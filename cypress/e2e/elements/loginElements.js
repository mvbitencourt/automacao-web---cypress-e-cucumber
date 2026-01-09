class LoginElements {

    inputEmail = () => { return cy.get('#email') }
    inputPassword = () => { return cy.get('#password') }
    btnLogin = () => { return cy.get('button[type="submit"]') }
    btnRegister = () => { return cy.xpath('//a[normalize-space()="Signup"]') }

}

export default LoginElements;