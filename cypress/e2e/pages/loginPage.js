/// <reference types="cypress" />

import LoginElements from '../elements/loginElements';

const loginElements = new LoginElements();

class LoginPage {

    accessRegisterPage() {
        loginElements.btnRegister().click();
        cy.wait(2000);
    }

}

export default LoginPage;
