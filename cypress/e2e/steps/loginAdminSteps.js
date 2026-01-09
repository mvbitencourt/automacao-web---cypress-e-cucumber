/// <reference types="cypress" />
import LoginAdminPage from "../pages/loginAdminPage";
const loginAdminPage = new LoginAdminPage

Given(/^que acesse a page home de login$/, () => {
    loginAdminPage.visitLoginAdminPage()
});

Given(/^que eu faça login "([^"]*)" informando "([^"]*)" e "([^"]*)"$/, (type, email, password) => {
    loginAdminPage.fillLoginInformation(email, password)
    loginAdminPage.btnSubmitLogin()
});

Then(/^tenho meu login "([^"]*)"$/, (result) => {
    if (cy.contains('Dashboard')) {
        cy.log(result)
    } else {
        cy.log('Login não realizado')
    }
});