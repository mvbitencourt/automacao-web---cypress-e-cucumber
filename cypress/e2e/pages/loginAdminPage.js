/// <reference types="cypress" />
import LoginAdminElements from "../elements/loginAdminElements";

const loginAdminElements = new LoginAdminElements
const url = Cypress.config("baseUrlAdmin")

class LoginAdminPage {

    visitLoginAdminPage() {
        cy.visit(url)
    }

    fillLoginInformation(email, password) {
        cy.get(loginAdminElements.inputLogin()).type(email)
        cy.get(loginAdminElements.inputPassword()).type(password)
    }

    btnSubmitLogin() {
        cy.get(loginAdminElements.btnLogin()).click()
    }

}
export default LoginAdminPage;