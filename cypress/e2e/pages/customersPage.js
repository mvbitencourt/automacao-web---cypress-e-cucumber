/// <reference types="cypress" />
import CustomersElements from "../elements/customersElements";

const customersElements = new CustomersElements

class CustomersPage {

    addNewUser(){
        cy.get(customersElements.btnAdd()).click()
    }

    verifyCreatedUser(email) {
        cy.contains(email)
    }

}
export default CustomersPage;