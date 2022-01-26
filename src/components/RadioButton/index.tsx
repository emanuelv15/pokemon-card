import { ChangeEvent } from "react";
import ReactTooltip from "react-tooltip";

import { Itens } from "../../utils/types";

import { Container } from "./styles";

interface RadioButtonProps {
  itens: Itens[];
  onChangeRadio: (selectedRadio: any) => void;
}

const RadioButton = ({ itens, onChangeRadio }: RadioButtonProps) => {
  return (
    <Container>
      <div
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          onChangeRadio(event.target.value)
        }
      >
        {itens.map((iten) => (
          <div>
            {/*  eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <div data-tip data-for={iten.value}>
              <input
                type="radio"
                value={iten.value}
                name={iten.label}
                disabled={iten.disabled}
                checked={iten.checked}
              />
            </div>

            <ReactTooltip
              id={iten.value}
              place="top"
              type="dark"
              effect="solid"
              disable={!iten.disabled}
            >
              {`Pokémon não possui o gênero ${iten.label}.`}
            </ReactTooltip>

            <p id={iten.disabled ? "disabled" : ""}>{iten.label}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default RadioButton;
