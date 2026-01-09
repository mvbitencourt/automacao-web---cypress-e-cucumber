Feature: Login na aplicação Admin
Feature para realizar login na aplicação de Administradores PHPTravels

  Scenario Outline: Logins variados na aplicação
    Given que acesse a page home de login
    And que eu faça login "<tipoLogin>" informando "<email>" e "<senha>"
    Then tenho meu login "<resultadoLogin>"

    Examples:
      | tipoLogin   | email                | senha     | resultadoLogin              |
      | com sucesso | admin@phptravels.com | demoadmin | Login realizado com sucesso |
