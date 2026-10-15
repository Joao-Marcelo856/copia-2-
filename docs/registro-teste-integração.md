# Registro de Testes de Integração

Aluno: João Marcelo Monteiro De Oliveira

Grupo: 05

Data: 15/10/2026

## Banco de teste

Nome do banco de teste: notificacoes_test

Por que ele é separado do banco da API (uma frase): Para evitar interferência com os dados do ambiente de produção durante os testes.

## Testes escritos

| #   | Arquivo | O que o teste verifica | Verde ou vermelho? |

| --- | ------- | ---------------------- | ------------------ |

| 1   |evento.integration.test.js|grava o evento no banco com o nome correto|Verde|

| 2   |participante.integration.test.js|não grava participante com e-mail inválido|Verde|

| 3   |participante.integration.test.js|grava o nome novo no banco|Vermelho|

## Resultado

Linha "Tests:" da saída do npm run test:integration:

## Defeito encontrado

Teste: 3 o desafio

Esperado: Alterar o nome do participante no banco de dados

Obtido: O nome do participante não foi alterado no banco de dados, o Expected e o Received não são iguais, indicando que a alteração não ocorreu como esperado.

O que o usuário da API veria (a rota responde 200, mas...): Ele veria uma resposta de sucesso (200 OK), mas o nome do participante não seria atualizado no banco de dados, levando a inconsistências nos dados.
