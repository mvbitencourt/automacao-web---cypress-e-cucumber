/// <reference types="cypress" />
import DashboardAdminElements from "../elements/dashboardAdminElements";

const dashboardAdminElements = new DashboardAdminElements

class DashboardAdminPage {

    navigateToCustomerScreen(){
        cy.get(dashboardAdminElements.btnUsers()).click()
        cy.get(dashboardAdminElements.btnCustomer()).click()
    }

}
export default DashboardAdminPage;