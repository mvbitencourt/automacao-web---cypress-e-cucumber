# 🚀 Automação Web com Cypress + Cucumber (BDD)

Projeto de **automação de testes Web** utilizando **Cypress** integrado com **Cucumber (BDD)**, aplicando boas práticas como **Page Object Model**, **separação de responsabilidades**, **reutilização de código** e **organização modular**.

O projeto é focado na automação de fluxos como **login**, **cadastro de usuários/clientes** e **dashboards administrativos**.

Desenvolvido durante o curso da Udemy **"Automação Web - Cypress e Cucumber"**, ministrado pelo **Danilo Santana Barbosa**

Link: https://www.udemy.com/share/10aOvW3@7xhtlbyZNJNSvOLsolBDRB7gwJL4PQf3G3ToXdRTl552_E5nbQSHplb2ZFaMxJBc/



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
automacao-web---cypress-e-cucumber
├── cypress
│   ├── e2e
│   │   ├── elements
│   │   │   ├── customersElements.js
│   │   │   ├── customersRegisterElements.js
│   │   │   ├── dashboardAdminElements.js
│   │   │   ├── homeElements.js
│   │   │   ├── loginAdminElements.js
│   │   │   ├── loginElements.js
│   │   │   └── registerElements.js
│   │   │
│   │   ├── features
│   │   │   ├── login.feature
│   │   │   ├── loginCustomers.feature
│   │   │   ├── register.feature
│   │   │   └── registerCustomers.feature
│   │   │
│   │   ├── pages
│   │   │   ├── customersPage.js
│   │   │   ├── customersRegisterPage.js
│   │   │   ├── dashboardAdminPage.js
│   │   │   ├── homePage.js
│   │   │   ├── loginAdminPage.js
│   │   │   ├── loginPage.js
│   │   │   └── registerPage.js
│   │   │
│   │   └── steps
│   │       ├── loginAdminSteps.js
│   │       ├── loginSteps.js
│   │       ├── registerSteps.js
│   │       └── registerUsersSteps.js
│   │
│   ├── Files
│   │   └── image.jpg
│   │
│   ├── fixtures
│   │   └── example.json
│   │
│   └── support
│       ├── commands.js
│       └── e2e.js
│
├── .gitignore
├── cypress.config.js
├── package-lock.json
├── package.json
└── README.md
