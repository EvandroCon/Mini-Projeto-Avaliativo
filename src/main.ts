interface PokemonResumo {
    id: number;
    nome: string;
    tipos: string[];
    altura: number;
    peso: number;
}

async function buscarPokemon(): Promise<PokemonResumo[]> {
    try {
        const resposta = await
fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

    const dados: PokemonResumo[] = await resposta.json();

        console.log("Id: ", dados.id);
        console.log("Nome: ", dados.name);
        console.log("Tipo: ", dados.types[0].type.name);
        console.log("Altura: ", dados.height);
        console.log("Peso: ", dados.weight);

        return dados;
    } catch (erro) {
        console.log("Erro ao buscar pokemons:", erro);
        return [];
    }
}

buscarPokemon();