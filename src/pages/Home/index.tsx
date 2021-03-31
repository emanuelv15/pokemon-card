import { useState, useEffect } from 'react';

import { api } from '../../services/api';

import headerImg from '../../assets/images/header.jpg'
import poekbolaImg from '../../assets/images/pokebola.jpg'
import logoImg from '../../assets/images/logo.png'

import {
    Container,
    Content,
    ContainerCard,
    Card,
    Header,
    CardBody,
    CardFooter
} from './styles';

interface Pokemon {
    id: number;
    name: string;
    baseExp: number;
    height: number;
    weight: number;
    frontImg: string;
    backImg: string;
}

const Home = (): JSX.Element => {
    const [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon);
    const [pokemonName, setPokemonName] = useState('');

    useEffect(() => {
        async function loadListPokemons() {
            try {
                await api.get(pokemonName).then(response => setPokemon({
                    id: response.data.id,
                    name: response.data.name.toLowerCase().replace(/(?:^|\s)(?!da|de|do)\S/g, (l: String) => l.toUpperCase()),
                    baseExp: response.data.base_experience,
                    height: response.data.height,
                    weight: response.data.weight,
                    frontImg: response.data.sprites.front_default,
                    backImg: response.data.sprites.back_default,
                }));
            } catch {
                setPokemon({} as Pokemon)
            }
        }

        pokemonName !== "" ? loadListPokemons() : setPokemon({} as Pokemon)
    }, [pokemonName]);

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="Pokémon Card" />
                <input
                    placeholder="Number or Name of Pokémon"
                    value={pokemonName}
                    onChange={event => setPokemonName(event.target.value.toLowerCase())}
                />
            </Content>

            <ContainerCard>
                <Card>
                    <Header src={headerImg} alt="Header Cart" />
                    <CardBody>
                        {pokemon.frontImg ? <img src={pokemon.frontImg} alt="Pokemon Img" /> : <img src={poekbolaImg} alt="Pokemon Img" />}
                        <h1>{pokemon.name || 'Pokémon Name'}</h1>
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
