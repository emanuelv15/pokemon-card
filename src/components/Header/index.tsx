import Input from "../Input";

import { ListPokemons } from "../../utils/types";

import { Container, Content } from "./styles";

interface HeaderProps {
  logoImg: string;
  placeholderInput: string;
  listPokemons: ListPokemons[];
  onClickInput: (event: string) => void;
}

const Header = ({
  logoImg,
  placeholderInput,
  listPokemons,
  onClickInput,
}: HeaderProps) => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo" />
        <Input
          placeholder={placeholderInput}
          data={listPokemons}
          onClickInput={onClickInput}
        />
      </Content>
    </Container>
  );
};

export default Header;
