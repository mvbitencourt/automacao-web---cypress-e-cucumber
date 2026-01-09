class HomeElements {

    btnGoToLogin = () => { return cy.xpath('/html/body/header/div[1]/div/div[2]/a[2]') }
    btnGoToRegister = () => { return cy.xpath('/html/body/header/div[1]/div/div[2]/a[3]') }

    inputFirstName = () => { return cy.get('[placeholder="First Name"]') }
    inputLastName = () => { return cy.get('[placeholder="Last Name"]') }
    inputEmail = () => { return cy.xpath('//input[@id="email"]') }
    inputPassword = () => { return cy.get('[placeholder="Password"]') }
    inputConfirmPassword = () => { return cy.get('[placeholder="Confirm Password"]') }
    inputNumber = () => { return cy.xpath('//input[@id="mobile"]') }
    checkAgreeTerms = () => { return cy.get('span.material-symbols-outlined.text-white.text-xs.checkbox-icon') }
    btnCreateAccount = () => { return cy.get('//button[@id="submit"]') }

}

export default HomeElements;