/* eslint-disable react/jsx-no-target-blank */
// import { Container } from "./styles";

// interface InputProps {
//   placeholder: string;
//   value: string;
//   onChange: (event: string) => void;
// }

// const Input = ({ placeholder, value, onChange }: InputProps) => {
//   return (
//     <Container>
//       <input
//         placeholder={placeholder}
//         value={value}
//         onChange={(event) => onChange(event.target.value.toLowerCase())}
//       />
//     </Container>
//   );
// };

// export default Input;

import React, { useState } from "react";

import { Container, ContainerInput, Icon, ContainerResults } from "./styles";

import { ListPokemons } from "../../utils/types";

import "./sc.css";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";

interface InputProps {
  placeholder: string;
  data: ListPokemons[];
  onClickInput: (event: string) => void;
}

function Input({ placeholder, data, onClickInput }: InputProps) {
  const [filteredData, setFilteredData] = useState<ListPokemons[]>(
    [] as ListPokemons[]
  );
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event: string) => {
    const searchWord = event;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const handleClickPokemonName = (pokemonName: string) => {
    setWordEntered(pokemonName);
    setFilteredData([]);
    onClickInput(pokemonName);
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
    onClickInput("");
  };

  return (
    <Container>
      <ContainerInput>
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={(event) => handleFilter(event.target.value)}
        />
        <Icon>
          {wordEntered === "" ? (
            <SearchOutlined />
          ) : (
            <CloseOutlined id="clearBtn" onClick={clearInput} />
          )}
        </Icon>
      </ContainerInput>
      {filteredData.length !== 0 && (
        <ContainerResults>
          {filteredData.slice(0, 4).map((value) => {
            return (
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <a
                className="dataItem"
                target="_blank"
                onClick={() => handleClickPokemonName(value.name)}
              >
                <p>{value.name} </p>
              </a>
            );
          })}
        </ContainerResults>
      )}
    </Container>
  );
}

export default Input;
