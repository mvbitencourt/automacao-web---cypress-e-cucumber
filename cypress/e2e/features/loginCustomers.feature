Feature: Criar novo usuário via Admin PHPTravels
Funcionalidade para se criar novos usuarios Clientes

  Scenario Outline: Criando novos clientes na plataforma
    Given que acesse a page home de login
    And que eu faça login "<tipoLogin>" informando "<emailLogin>" e "<senha>"
    And queira cadastrar novos usuários
    When eu inserir os dados pessoais nome "<nome>", sobrenome "<sobrenome>", email "<email>", senha "<senhaRegistro>" e telefone "<telefone>"
    And selecionar as configurações do cliente status "<status>", tipo "<tipo>" e moeda "<moeda>"
    And clicar em registrar
    Then tenho meu usuario "<email>" cadastrado com sucesso e listado na tela users

    Examples:
      | tipoLogin   | emailLogin           | senha     | nome   | sobrenome | email            | senhaRegistro | telefone    | status  | tipo     | moeda |
      | com sucesso | admin@phptravels.com | demoadmin | Danilo | Barbosa   | danilo@email.com | D123*456abc   | 11978657865 | Enabled | Customer | USD   |
