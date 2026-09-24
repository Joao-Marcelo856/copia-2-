1. Qual é o item de prioridade nº 1 no plano de testes do seu grupo?

- Falha no envio de e-mail e notificações


2. Em um dos seus testes, aponte o que é o Arrange, o Act e o Assert

- usando o validators.test.js como exemplo it("não retorna erro para um e-mail válido", () => {
  // ARRANGE (Prepara): Define os dados de entrada necessários para o teste
  const email = "ana@senai.br";

  // ACT (Executa): Roda a função/comportamento que está sendo testado
  const resultado = isEmail(email);

  // ASSERT (Confere): Verifica se o resultado obtido é o esperado
  expect(resultado).toBeNull();
});

3. Um teste que nunca fica vermelho, nem com o código quebrado, serve para alguma coisa? Por quê?

- Não, não serve para nada.Um teste que nunca falha (conhecido como "falso positivo") perde completamente a sua utilidade de proteção porque ele não valida o comportamento real do código. O ciclo fundamental do teste automatizado exige que ele seja capaz de quebrar (ficar vermelho) quando o código de produção muda de forma incorreta. Se ele nunca fica vermelho, ele gera uma falsa sensação de segurança e esconde bugs, tornando-se apenas linhas de código inúteis que gastam tempo de processamento.