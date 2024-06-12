import React, { useEffect, useState } from 'react';

const Header = () => {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    const getPokemons = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon')
      return response.json();
    }
    getPokemons().then((data) => {
      setPokemon(data.results)
      console.log(data.results,"log")
    });

  }, [pokemon])
  return (

    <header>

      <h1>Bienvenue sur notre site Sportive</h1>
      <table>
        <caption>
          Front-end web developer course 2021
        </caption>
        <thead>
          <tr>
            <th scope="col">Liste des pokemons :</th>
          </tr>
        </thead>
        <tbody>
          {pokemon && (
            pokemon.map((pok) => {
              return (
                <tr>
                  <th scope="row">{pok.name}</th>
                </tr>
              )
            })
          )}


        </tbody>
      </table>
    </header>
  );
};

export default Header;
