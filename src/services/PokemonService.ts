import { PokemonResumo } from "../models/Pokemon";

export function adicionarAoCatalogo(catalogo: PokemonResumo[], pokemon: PokemonResumo): PokemonResumo[] {
    const jaExiste = catalogo.some((item) => item.id === pokemon.id);

    if (jaExiste) {
        console.log(`[AVISO] ${pokemon.nome} já está no catálogo.`);
        return catalogo;
    }

    catalogo.push(pokemon);

    console.log(`[OK] ${pokemon.nome} adicionado ao catálogo.`);
    return catalogo;
}

export function listarCatalogo(catalogo: PokemonResumo[]): void {

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

export function removerDoCatalogo(catalogo: PokemonResumo[], id: number): PokemonResumo[] {
    const existe = catalogo.some((pokemon) => pokemon.id === id);

    if (!existe) {
        console.log("[AVISO] Nenhum Pokémon encontrado com esse ID.");
        return catalogo;
    }

    console.log("[OK] Pokémon removido do catálogo.");
    return catalogo.filter((pokemon) => pokemon.id !== id);
}