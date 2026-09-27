interface PokemonResumo {
    id: number;
    nome: string;
    tipos: string[];
    altura: number;
    peso: number;
}

async function buscarPokemon(nomeOuId: string): Promise<PokemonResumo | null> {

    const url = `https://pokeapi.co/api/v2/pokemon/${nomeOuId}`;

    try {
        const resposta = await fetch(url);

        if (!resposta.ok) {
            console.log(`[ERRO] Pokémon não encontrado: ${nomeOuId}`);
            return null;
        }
        const dados: any = await resposta.json();

        const pokemon: PokemonResumo = {
            id: dados.id,
            nome: dados.name,
            tipos: dados.types.map((item: any) => item.type.name),
            altura: dados.height,
            peso: dados.weight
        };

        return pokemon;

    } catch (erro) {
        console.log("Erro ao buscar pokemons:", erro);
        return null;
    }
}

buscarPokemon("pikachu").then((pokemon) => {
    console.log(pokemon);
});