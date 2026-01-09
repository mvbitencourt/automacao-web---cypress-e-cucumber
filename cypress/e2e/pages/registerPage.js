/// <reference types="cypress" />

import RegisterElements from '../elements/registerElements';
const registerElements = new RegisterElements();

const url = Cypress.config('baseUrl2');
const filePath = 'cypress/Files/image.jpg';

class RegisterPage {

    fillFirstName(firstName) {
        registerElements.inputFirstName().type(firstName);
    }

    fillLastName(lastName) {
        registerElements.inputLastName().type(lastName);
    }

    fillEmailAdress(email) {
        registerElements.inputEmail().type(email);
    }

    fillPassword(password) {
        registerElements.inputPassword().type(password);
    }   

    fillConfirmPassword(confirmPassword) {
        registerElements.inputConfirmPassword().type(confirmPassword);
    }

    fillNumber(number) {
        registerElements.inputNumber().type(number);
    }

    checkAgreeTerms() {
        registerElements.checkAgreeTerms().click();
    }
    
}

export default RegisterPage;