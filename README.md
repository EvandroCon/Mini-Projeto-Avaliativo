# Pokédex TypeScript Lite

## Sobre o projeto

O Pokédex TypeScript Lite é uma aplicação simples em Node.js com TypeScript que consulta dados de Pokémon na PokeAPI e organiza alguns resultados em um catálogo local durante a execução do programa.

## Objetivo

Praticar os principais conceitos do Módulo 01:

- Node.js;
- JavaScript no back-end;
- TypeScript;
- interfaces;
- funções tipadas;
- arrays;
- objetos;
- JSON;
- métodos de array;
- classes;
- async/await;
- fetch;
- tratamento de erros;
- GitHub;
- GitFlow;
- Kanban.

## Tecnologias utilizadas

- Node.js
- TypeScript
- TSX
- PokeAPI
- Git
- GitHub

## Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:
- Node.js
- npm
- Git

## Como instalar

Clone o repositório:

```bash
git clone https://github.com/EvandroCon/Mini-Projeto-Avaliativo

Acesse a pasta do projeto:
cd Mini-Projeto-Avaliativo

Instale as dependências:
npm install

Como executar
Execute o projeto em ambiente de desenvolvimento:
npm run dev

Para compilar o projeto (gerar os arquivos JavaScript):
npm run build

Estrutura do projeto

Mini-Projeto-Avaliativo/
│
├── src/
│   ├── main.ts                      
│   │
│   ├── models/
│   │   ├── Pokemon.ts                
│   │   └── CatalogoPokemon.ts        
│   │
│   ├── services/
│   │   ├── PokeApiService.ts         
│   │   └── PokemonService.ts         
│   │
│   ├── utils/
│   │   └── textFormatters.ts         
│   │
│   └── tests/
│       ├── testPokeApiService.ts     
│       └── testCatalogoPokemon.ts    
│
├── package.json
├── tsconfig.json
└── README.md

Funcionalidades

- Buscar Pokémon por nome ou ID
- Tratar erro de Pokémon inexistente
- Transformar resposta da API em objeto simplificado
- Adicionar Pokémon ao catálogo local
- Impedir Pokémon duplicado
- Listar catálogo
- Remover Pokémon por ID
- Exibir mensagens no terminal
- Exemplos de execução
- Busca válida

Entrada testada pokeApiService e catalogoPokemon:

#pikachu

Saída obtida:

[OK] Pokémon encontrado: pikachu
[OK] pikachu adicionado ao catálogo.

#Catálogo atual:
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60

Busca inválida

Entrada testada:

#pokemon-inexistente

Saída obtida:

[ERRO] Pokémon não encontrado: pokemon-inexistenteDuplicidade

Entrada testada:

#adicionar pikachu duas vezes

Saída obtida:
[AVISO] pikachu já está no catálogo.

Remoção

Entrada testada:

#remover ID 25

Saída obtida:
[OK] Pokémon removido do catálogo.


Conceitos aplicados

TypeScript
O projeto foi feito em TypeScript, usando tipos nas funções e interfaces para organizar os dados da API e do sistema.

Interface PokemonResumo
Organiza as informações do Pokémon que o programa usa, como id, nome, tipos, altura e peso, de forma mais simples.

Fetch e async/await
A função buscarPokemon usa fetch para buscar os dados na PokeAPI. O async/await permite esperar a resposta da API antes de continuar o programa.

Tratamento de erros
A função buscarPokemon usa try/catch para tratar erros durante a busca. Também verifica resposta.ok para identificar quando o Pokémon não existe, evitando que o programa seja interrompido.

Métodos de array
em PokemonApiService e PokemonService:

map - buscarPokemon() - Transformar os “tipos” da API em string[]

some - adicionarAoCatalogo() - Verificar Pokémon duplicado

push - adcionarAoCatalogo() - Adicionar o Pokémon ao final do array, alterando o array original

filter - removerDoCatalogo() - Ele cria um novo array contendo apenas os Pokémon que não possuem o ID que queremos remover.

forEach - listarCatalogo() - Ele percorre todos os Pokémons e executa o código para cada um.

e em catalogoPokemon:

some - adicionar() - Verificar se o Pokémon já existe no catálogo antes de adicioná-lo.

push — adicionar() — Adicionar o Pokémon ao array do catálogo.

forEach — listar() — Percorrer todos os Pokémon do catálogo para exibir suas informações.

some — remover() — Verificar se existe um Pokémon com o ID informado.

filter — remover() — Criar um novo array sem o Pokémon que possui o ID informado.

Classe CatalogoPokemon
A classe CatalogoPokemon gerencia os Pokémons do catálogo. Ela possui uma atributo privado (pokemons) e os métodos adicionar, lista e remover para gerenciar os Pokémons.

Organização do Kanban
Link do Kanban:

https://trello.com/invite/b/6ab926a5a0b79af5cac12717/ATTIa555d2c00d3243fc45265e2d2257042e2AD215FB/mini-projeto-avaliativo

Link do video:

https://drive.google.com/file/d/1DwEu7eXGvua_ChB13dpDRQuPZb1vjYrh/view?usp=drive_link

Link dos slides da apresentação:

https://docs.google.com/presentation/d/1VoGPZcLVQLfko2hemmT-6VaUjDUCxCZ-F1Osd-5ZvDE/edit?usp=sharing

Branches utilizadas

- main
- classePokemon
- feat/pokedex
- formataçãoTexto
- testes
- README

Melhorias futuras

- Criar menu interativo no terminal
- Salvar catálogo em arquivo JSON(pc_box.json)
- Exibir HP, ataque e defesa
- Criar filtros por tipo de Pokémon
- Criar uma API própria com Express
