/// <reference types="cypress" />
import LoginPage from '../pages/loginPage';
const loginPage = new LoginPage();

Given(/^que eu acesso a página inicial de login$/, () => {
    loginPage.accessLoginPage();
});

When(/^eu insiro o email "([^"]*)" e a senha "([^"]*)"$/, (email, password) => {
    console.log(email, password);
    loginPage.fillLogin(email, password);
});

When(/^eu clico no botão de entrar$/, () => {
    loginPage.submitLogin();
});

Then(/^eu tenho meu "([^"]*)"$/, (message) => {
    console.log(message);
    cy.contains("Dashboard").should('be.visible');
});


