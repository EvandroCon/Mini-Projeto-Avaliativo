import { PokemonApiResponse, PokemonResumo } from "../models/Pokemon";

export async function buscarPokemon(nomeOuId: string): Promise<PokemonResumo | null> {

    const url = `https://pokeapi.co/api/v2/pokemon/${nomeOuId}`;

    try {
        const resposta = await fetch(url);

        if (!resposta.ok) {
            console.log(`[ERRO] Pokémon não encontrado: ${nomeOuId}`);
            return null;
        }
        const dados: PokemonApiResponse = await resposta.json();

        const pokemonResumo: PokemonResumo = {
            id: dados.id,
            nome: dados.name,
            tipos: dados.types.map((item: any) => item.type.name),
            altura: dados.height,
            peso: dados.weight
        };

        console.log(`[OK] Pokémon encontrado: ${pokemonResumo.nome}`);
        return pokemonResumo;

    } catch (erro) {
        console.log("Erro ao buscar pokemons:", erro);
        return null;
    }
}