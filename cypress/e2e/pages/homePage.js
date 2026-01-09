/// <reference types="cypress" />

import HomeElements from '../elements/homeElements';
import LoginElements from '../elements/loginElements';

const homeElements = new HomeElements();
const loginElements = new LoginElements();

const url = Cypress.config('baseUrl');

class HomePage {

    accessHomePage() {
        cy.visit(url);
        cy.wait(2000);
    }

    accessLoginPage() {
        homeElements.btnLogin().click();
        cy.wait(2000);
    }

}

export default HomePage;
