import LocalButton from './Button';
import React, { useEffect, useState } from 'react';

const SharedComponentHeader = React.lazy(() => import('shared_component/Header'));
const SharedComponentFooter = React.lazy(() => import('shared_component/Footer'));
const SharedComponentSubtitle = React.lazy(() => import('shared_component/SubTitle'));

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    const getPokemons = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon');
      return response.json();
    };
    getPokemons().then(data => {
      setPokemon(data.results);
      console.log(data.results, 'log');
    });
  }, [pokemon]);

  return (
    <div>
      <React.Suspense fallback="Loading Header">
        <SharedComponentHeader />
      </React.Suspense>
      <React.Suspense fallback="Loading Subtitle">
        <SharedComponentSubtitle text="Remote" />
      </React.Suspense>
      <LocalButton />
      <table>
        <caption>Front-end web developer course 2021</caption>
        <thead>
          <tr>
            <th scope="col">Liste des pokemons :</th>
          </tr>
        </thead>
        <tbody>
          {pokemon &&
            pokemon.map(pok => {
              return (
                <tr>
                  <th scope="row">{pok.name}</th>
                </tr>
              );
            })}
        </tbody>
      </table>
      <React.Suspense fallback="Loading Footer">
        <SharedComponentFooter />
      </React.Suspense>
    </div>
  );
};

export default App;
