import { PokemonApiResponse, PokemonResumo } from "./models/Pokemon";
import { buscarPokemon } from "./services/PokeApiService";
import { adicionarAoCatalogo, listarCatalogo, removerDoCatalogo } from "./services/PokemonService";

/*let catalogo: PokemonResumo[] = [];

buscarPokemon("pikachu").then((pokemon) => {
   
    if (pokemon !== null) {
        catalogo = adicionarAoCatalogo(catalogo, pokemon);

        listarCatalogo(catalogo);
        removerDoCatalogo(catalogo, 25);
    }
});*/

async function main() {

    let catalogo: PokemonResumo[] = [];

    const pikachu = await buscarPokemon("pikachu");
    if (pikachu !== null) {
        catalogo = adicionarAoCatalogo(catalogo, pikachu);
    }

    const charmander = await buscarPokemon("charmander");
    if (charmander !== null) {
        catalogo = adicionarAoCatalogo(catalogo, charmander);
    }

    const pikachuDuplicado = await buscarPokemon("pikachu");
    if (pikachuDuplicado !== null) {
        catalogo = adicionarAoCatalogo(catalogo, pikachuDuplicado);
    }

    await buscarPokemon("pokemon-inexistente");
    listarCatalogo(catalogo);
    catalogo = removerDoCatalogo(catalogo, 25);
    listarCatalogo(catalogo);

}

main();
