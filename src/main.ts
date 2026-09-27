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

let catalogo: PokemonResumo[] = [];

buscarPokemon("pikachu").then((pokemon) => {
   
    if (pokemon !== null) {
        catalogo = adicionarAoCatalogo(catalogo, pokemon);

        console.log(catalogo);
    }
});

function adicionarAoCatalogo(catalogo: PokemonResumo[], pokemon: PokemonResumo): PokemonResumo[] {
    const jaExiste = catalogo.some((item) => item.id === pokemon.id);

    if (jaExiste) {
        console.log(`[AVISO] ${pokemon.nome} já está no catálogo.`);
        return catalogo;
    }

    catalogo.push(pokemon);
    
    console.log(`[OK] ${pokemon.nome} adicionado ao catálogo.`);
    return catalogo;
}
