import { PokemonResumo } from "../models/Pokemon";

export function capitalizarNome(nome: string): string {
    return nome.charAt(0).toUpperCase() + nome.slice(1);
}

export function formatarTipos(tipos: string[]): string {
    return tipos.join(", ");
}

export function formatarLinhaCatalogo(pokemon: PokemonResumo): string {
    return `#${pokemon.id} - ${capitalizarNome(pokemon.nome)} | Tipos: ${formatarTipos(pokemon.tipos)} | Altura: ${pokemon.altura} | Peso: ${pokemon.peso}`;
}

export function formatarDetalhesPokemon(pokemon: PokemonResumo): string {
    return [
        `ID: ${pokemon.id}`,
        `Nome: ${pokemon.nome}`,
        `Tipos: ${pokemon.tipos.join(", ")}`,
        `Altura: ${pokemon.altura}`,
        `Peso: ${pokemon.peso}`,
        "--------------------",
    ].join("\n");
}