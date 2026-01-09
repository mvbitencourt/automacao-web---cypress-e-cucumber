Feature: Cadastro

  Scenario Outline: Realizar cadastro com diferentes dados
    Given que eu acesso a página inicial do site
    When clico no botão de login
    And clico no botão de cadastrar novo usuário
    And eu preencho o formulário de cadastro com "<name>" e sobrenome "<lastName>"
    And insiro meus dados de email "<email>"
    And insiro minhas senhas "<password>" e "<confirmPassword>"
    And insiro o numero de telefone "<phone>"
    And clico em aceitar os termos
    And clico no botão de cadastrar
    Then tenho meu cadastro "<message>"

    Examples:
      | cenario              | name  | lastName   | email           | password  | confirmPassword | phone      | message               |
      | Cadastro com sucesso | Teste | Automation | email@gmail.com | Senha123! | Senha123!       | 9999999999 | realizado com sucesso |
