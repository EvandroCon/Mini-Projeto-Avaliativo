import { buscarPokemon } from "../services/PokeApiService";
import { CatalogoPokemon } from "../models/catalogoPokemon";

export async function testarCatalogo() {
    const catalogo = new CatalogoPokemon();

    const pikachu = await buscarPokemon("pikachu");
    if (pikachu !== null) {
        catalogo.adicionar(pikachu);
    }

    const charmander = await buscarPokemon("charmander");
    if (charmander !== null) {
        catalogo.adicionar(charmander);
    }

    const pikachuDuplicado = await buscarPokemon("pikachu");
    if (pikachuDuplicado !== null) {
        catalogo.adicionar(pikachuDuplicado);
    }

    await buscarPokemon("pokemon-inexistente");

    catalogo.listar();

    catalogo.remover(25);

    catalogo.listar();
}
