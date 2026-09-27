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

        listarCatalogo(catalogo);
        removerDoCatalogo(catalogo, 25);
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

function listarCatalogo(catalogo: PokemonResumo[]): void {

    if (catalogo.length === 0) {
        console.log("[AVISO] Catálogo vazio.");
        return;
    }

    console.log("Catálogo atual:");
    catalogo.forEach((pokemon) => {
        console.log("ID:", pokemon.id);
        console.log("Nome:", pokemon.nome);
        console.log("Tipos:", pokemon.tipos.join(", "));
        console.log("Altura:", pokemon.altura);
        console.log("Peso:", pokemon.peso);
        console.log("---------------------");
    });
}

function removerDoCatalogo(catalogo: PokemonResumo[], id: number): PokemonResumo[] {
    const existe = catalogo.some((pokemon) => pokemon.id === id);

    if (!existe) {
        console.log("[AVISO] Nenhum Pokémon encontrado com esse ID.");
        return catalogo;
    }

    console.log("[OK] Pokémon removido do catálogo.");
    return catalogo.filter((pokemon) => pokemon.id !== id);
}