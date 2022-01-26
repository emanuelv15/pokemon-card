export interface Pokemon {
  id: number;
  name: string;
  baseExp: number;
  height: number;
  weight: number;
  frontImgDefault: string | null;
  fontImgFemale: string | null;
  frontImgShiny: string | null;
  backImg: string;
}

export type PokemonGender = "" | "default" | "female" | "shiny";

export interface Itens {
  value: string;
  name: string;
  label: string;
  disabled: boolean;
  checked: boolean;
}

export interface ListPokemons {
  url: string;
  name: string;
}
