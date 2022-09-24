# Respostas
## Exercício de Casa 🏠 

#### Introdução à Web e API

Pesquise sobre os niveis de maturidade de Richardsson e responda:
1) qual nivel de maturidade corresponde ao CRUD (Create, Read, Update, Delete)?
  **Resposta:** Nível 2 — Verbos HTTP

  GET
  POST
  PATCH
  PUT
  DELETE


2) qual a relação entre os metodos HTTP e o CRUD?
  **Resposta:** Então a sigla CRUD é um acrônimo, de quatro operações básicas, são elas:

C: Create – Criar um novo registro.

R: Read – Ler um registro, ou uma lista de registros.

U: Update – Atualizar um registro.

D: Delete – Excluir um registro.

O CRUD representa os 5 principais metodos/verbos HTTP

3) o que é HATEOAS? Ele é obrigatório para que uma API seja considerada RESTfull?
  **Resposta:** 
HATEOAS significa Hypermedia as the Engine of Application State. Uma API que implementa esse nível fornece aos seus clientes links que indicarão como poderá ser feita a navegação entre seus recursos. Ou seja, quem for consumir a API precisará saber apenas a rota principal e a resposta dessa requisição terá todas as demais rotas possíveis.
Alguns desenvolvedores pragmáticos dizem que se o web service implementa até o nível 2 já pode ser considerado rest, por outro lado, devs que são mais puristas consideram que para um web service ser considerado rest deve implementar até o ultimo nivel.

4) O que quer dizer quando dizemos que uma API é idempotente?
  **Resposta:** Um método HTTP é idempotente se uma requisição idêntica pode ser feita uma ou mais vezes em sequência com o mesmo efeito enquanto deixa o servidor no mesmo estado. Em outras palavras, um método idempotente não deveria possuir nenhum efeito colateral (exceto para manter estatísticas). Implementados corretamente, o GET, HEAD, PUT, e DELETE são métodos idempotentes, mas não o método POST. Todos os métodos seguros também são idempotentes.

https://developer.mozilla.org/pt-BR/docs/Glossary/Idempotent

5) Qual a diferença entre os métodos PUT e PATCH?
  **Resposta:** O PUT, é usado para alteração de um dado completo
O PATCH é usado para atualização parcial.

6) Do arquivo filmes.js retorne no terminal o Titulo, Ano e Genero. (desafio: apresente cada Genero em linhas separadas)
7) Do arquivo colors-rgb retorne no terminal o RGB como no exemplo: "aliceblue RGB: 240, 248, 255, 1"
8) Do arquivo estados-cidade dado uma sigla retorne no terminal o lista de cidades

Referencia:
https://www.youtube.com/watch?v=P92SBaN42mQ&ab_channel=MichelliBrito
https://rivaildojunior.medium.com/modelo-de-maturidade-de-richardson-para-apis-rest-8845f93b288
https://gist.github.com/renatoapcosta/8882e63760f7eeac469e1e162377fa30
https://medium.com/codex/richardson-maturity-model-for-rest-apis-8c9eaeaa4a6
