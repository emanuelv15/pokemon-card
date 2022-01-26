import { useState, useEffect, useCallback } from "react";

import { api } from "../../services/api";

import { Pokemon, PokemonGender, Itens, ListPokemons } from "../../utils/types";

import RadioButton from "../../components/RadioButton";
import Header from "../../components/Header";

import headerImg from "../../assets/images/header.jpg";
import poekbolaImg from "../../assets/images/pokebola.jpg";
import logoImg from "../../assets/images/logo.png";

import {
  Container,
  ContainerCard,
  Card,
  HeaderCard,
  CardBody,
  CardFooter,
} from "./styles";

const Home = () => {
  const [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon);
  const [listPokemons, setListPokemons] = useState<ListPokemons[]>(
    [] as ListPokemons[]
  );
  const [pokemonGender, setPokemonGender] = useState<PokemonGender>("");

  const itensRadio: Itens[] = [
    {
      value: "default",
      name: "gender",
      label: "Default",
      disabled: pokemonGender === "" || pokemon.frontImgDefault === null,
      checked: pokemonGender === "default",
    },
    {
      value: "female",
      name: "gender",
      label: "Female",
      disabled: pokemonGender === "" || pokemon.fontImgFemale === null,
      checked: pokemonGender === "female",
    },
    {
      value: "shiny",
      name: "gender",
      label: "Shiny",
      disabled: pokemonGender === "" || pokemon.frontImgShiny === null,
      checked: pokemonGender === "shiny",
    },
  ];

  const clearPokemon = useCallback(() => {
    setPokemon({} as Pokemon);
    setPokemonGender("");
  }, []);

  const onChangeGender = useCallback((selectedGender: PokemonGender) => {
    setPokemonGender(selectedGender);
  }, []);

  const loadListPokemons = useCallback(async () => {
    try {
      await api.get("?limit=20000000").then((response) => {
        setListPokemons(response.data.results);
      });
    } catch {
      setListPokemons({} as ListPokemons[]);
    }
  }, []);

  const loadPokemon = useCallback(
    async (pokemonName: string) => {
      try {
        await api.get(`/${pokemonName}`).then((response) =>
          setPokemon({
            id: response.data.id,
            name: response.data.name
              .toLowerCase()
              .replace(/(?:^|\s)(?!da|de|do)\S/g, (name: String) =>
                name.toUpperCase()
              ),
            baseExp: response.data.base_experience,
            height: response.data.height,
            weight: response.data.weight,
            frontImgDefault: response.data.sprites.front_default,
            fontImgFemale: response.data.sprites.front_female,
            frontImgShiny: response.data.sprites.front_shiny,
            backImg: response.data.sprites.back_default,
          })
        );

        onChangeGender("default");
      } catch {
        clearPokemon();
      }
    },
    [clearPokemon, onChangeGender]
  );

  const onChangeInputPokemonName = useCallback(
    (pokemonName: string) => {
      pokemonName !== "" ? loadPokemon(pokemonName) : clearPokemon();
    },
    [clearPokemon, loadPokemon]
  );

  useEffect(() => {
    loadListPokemons();
  }, [loadListPokemons]);

  return (
    <Container>
      <Header
        logoImg={logoImg}
        placeholderInput="Name of Pokémon"
        listPokemons={listPokemons}
        onClickInput={onChangeInputPokemonName}
      />

      <ContainerCard>
        <Card>
          <HeaderCard src={headerImg} alt="Header Cart" />
          <CardBody>
            {pokemonGender === "" && (
              <img src={poekbolaImg} alt="Pokemon Img" />
            )}

            {pokemonGender === "default" && (
              <img
                src={pokemon.frontImgDefault || poekbolaImg}
                alt="Pokemon Img"
              />
            )}

            {pokemonGender === "female" && (
              <img
                src={pokemon.fontImgFemale || poekbolaImg}
                alt="Pokemon Img"
              />
            )}

            {pokemonGender === "shiny" && (
              <img
                src={pokemon.frontImgShiny || poekbolaImg}
                alt="Pokemon Img"
              />
            )}

            <h1>{pokemon.name || "Pokémon Name"}</h1>

            {pokemon.name && (
              <RadioButton itens={itensRadio} onChangeRadio={onChangeGender} />
            )}

            <p>{pokemon.baseExp || 0} xp</p>
          </CardBody>

          <CardFooter>
            <div>
              <h3>{pokemon.weight / 10 || 0} Kg</h3>
              <p>Weight</p>
            </div>

            <div>
              <h3>{pokemon.height / 10 || 0} m</h3>
              <p>Height</p>
            </div>
          </CardFooter>
        </Card>
      </ContainerCard>
    </Container>
  );
};

export default Home;
