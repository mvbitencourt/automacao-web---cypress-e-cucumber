/// <reference types="cypress" />

import DashboardAdminPage from "../pages/dashboardAdminPage";
import CustomerRegisterPage from "../pages/customersRegisterPage";
import CustomerPage from "../pages/customersPage";

const dashboardAdminPage = new DashboardAdminPage
const customerRegisterPage = new CustomerRegisterPage
const customerPage = new CustomerPage

Then(/^queira cadastrar novos usuários$/, () => {
    dashboardAdminPage.navigateToCustomerScreen()
    customerPage.addNewUser()
});

When(/^eu inserir os dados pessoais nome "([^"]*)", sobrenome "([^"]*)", email "([^"]*)", senha "([^"]*)" e telefone "([^"]*)"$/, (name, surname, email, pass, phone) => {
    customerRegisterPage.fillCustomerInformation(name, surname, email, pass, phone)
});

When(/^selecionar as configurações do cliente status "([^"]*)", tipo "([^"]*)" e moeda "([^"]*)"$/, (status, type, currency) => {
    customerRegisterPage.selectUserStatus(status)
    customerRegisterPage.selectUserType(type)
    customerRegisterPage.seleccCurrency(currency)
});

When(/^clicar em registrar$/, () => {
    customerRegisterPage.btnRegister()
});

Then(/^tenho meu usuario "([^"]*)" cadastrado com sucesso e listado na tela users$/, (email) => {
    customerPage.verifyCreatedUser(email)
});