import { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";

function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
        if (!res.ok) {
          throw new Error("Failed to fetch pokemon");
        }
        const data = await res.json();
        setPokemons(data.results);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  console.log(pokemons);
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {pokemons.map(({ name, url }) => (
        <PokemonCard key={name} name={name} url={url} />
      ))}
    </div>
  );
}

export default Home;
