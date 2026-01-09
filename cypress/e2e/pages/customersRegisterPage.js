/// <reference types="cypress" />

import CustomerRegisterElements from "../elements/customersRegisterElements";

const customerRegisterElements = new CustomerRegisterElements

class CustomerRegisterPage {

    selectUserStatus(status) {
        cy.get(customerRegisterElements.selectStatusUser()).select(status, { force: true })
    }

    selectUserType(type) {
        cy.get(customerRegisterElements.selectUserType()).select(type, { force: true })
    }

    seleccCurrency(currency) {
        cy.get(customerRegisterElements.selectCurrency()).select(currency, { force: true })
    }

    fillCustomerInformation(name, surname, email, pass, phone) {
        cy.get(customerRegisterElements.inputName()).type(name)
        cy.get(customerRegisterElements.inputLastName()).type(surname)
        cy.get(customerRegisterElements.inputEmail()).type(email)
        cy.get(customerRegisterElements.inputPass()).type(pass)
        cy.get(customerRegisterElements.inputPhone()).type(phone)
    }

    btnRegister() {
        cy.get(customerRegisterElements.btnSave()).click()
    }

}
export default CustomerRegisterPage;