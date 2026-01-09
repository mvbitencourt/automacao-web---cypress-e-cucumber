/// <reference types="cypress" />

import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginPage";
import RegisterPage from "../pages/registerPage";
const homePage = new HomePage();
const loginPage = new LoginPage();
const registerPage = new RegisterPage();

Given(/^que eu acesso a página inicial do site$/, () => {
	homePage.accessHomePage();
});

When(/^clico no botão de login$/, () => {
	homePage.accessLoginPage();
});

When(/^clico no botão de cadastrar novo usuário$/, () => {
	loginPage.accessRegisterPage();
});

When(/^eu preencho o formulário de cadastro com "([^"]*)" e sobrenome "([^"]*)"$/, (name, lastName) => {
	console.log(name, lastName);
	registerPage.fillFirstName(name);
    registerPage.fillLastName(lastName);
});

When(/^insiro meus dados de email "([^"]*)"$/, (email) => {
	console.log(email);
	registerPage.fillEmailAdress(email);
});

When(/^insiro minhas senhas "([^"]*)" e "([^"]*)"$/, (password, confirmPassword) => {
	console.log(password, confirmPassword);
	registerPage.fillPassword(password);
    registerPage.fillConfirmPassword(confirmPassword);
});

When(/^insiro o numero de telefone "([^"]*)"$/, (phone) => {
	console.log(phone);
	registerPage.fillNumber(phone);
});

When(/^clico em aceitar os termos$/, () => {
	registerPage.checkAgreeTerms();
});

When(/^clico no botão de cadastrar$/, () => {
	registerPage.btnCreateAccount();
});

Then(/^tenho meu cadastro "([^"]*)"$/, (message) => {
	// Implementar verificação de sucesso do cadastro
});

