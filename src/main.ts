import { testarPokeApiService } from "./testes/pokeApiService";
import { testarCatalogo } from "./testes/catalogoPokemon";

async function main() {
    await testarPokeApiService();

    await testarCatalogo();
}
main();