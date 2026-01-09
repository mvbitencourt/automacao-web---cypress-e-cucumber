# 🚀 Automação Web com Cypress + Cucumber (BDD)

Projeto de **automação de testes Web** utilizando **Cypress** integrado com **Cucumber (BDD)**, aplicando boas práticas como **Page Object Model**, **separação de responsabilidades**, **reutilização de código** e **organização modular**.

O projeto é focado na automação de fluxos como **login**, **cadastro de usuários/clientes** e **dashboards administrativos**.

---

## 🧪 Tecnologias Utilizadas

- ⚙️ **Cypress**
- 🥒 **Cucumber (BDD)**
- 📄 **Gherkin**
- 🧱 **Page Object Model (POM)**
- 📦 **JavaScript**

---

## 📂 Estrutura do Projeto

```text
cypress
├── e2e
│   ├── elements
│   │   ├── customersElements.js
│   │   ├── customersRegisterElements.js
│   │   ├── dashboardAdminElements.js
│   │   ├── homeElements.js
│   │   ├── loginAdminElements.js
│   │   ├── loginElements.js
│   │   └── registerElements.js
│   │
│   ├── features
│   │   ├── login.feature
│   │   ├── loginCustomers.feature
│   │   ├── register.feature
│   │   └── registerCustomers.feature
│   │
│   ├── pages
│   │   ├── customersPage.js
│   │   ├── customersRegisterPage.js
│   │   ├── dashboardAdminPage.js
│   │   ├── homePage.js
│   │   ├── loginAdminPage.js
│   │   ├── loginPage.js
│   │   └── registerPage.js
│   │
│   ├── steps
│   │   ├── loginAdminSteps.js
│   │   ├── loginSteps.js
│   │   ├── registerSteps.js
│   │   └── registerUsersSteps.js
│
├── fixtures
│
├── support
│
├── Files
│
├── cypress.config.js
│
├── package.json
├── package-lock.json
└── node_modules
