
describe('form app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    })
    const name = () => {return cy.get('input[name="name"]')};
    const email = () => {return  cy.get('input[name="email"]')};
    const password = () => {return cy.get('input[name="password"]')};
    const tos = () => {return cy.get('input[name="tos"]')};
    const submit = () => {return cy.get('#submit')};


    it("testing inputs", () => {
        name().type("Wei")
        name().should("have.value", "Wei")
        email().type("wei@email.com")
        password().type("random")
        tos().click();
        submit().click();
    })
    // it("testing form validation", () => {
    //     submit().should("be.disabled")
    //     name().type("We")
    //     submit().should("be.disabled")
    //     email().type("fakeemail")
    //     submit().should("be.disabled")
    //     password().type("fa")
    //     submit().should("be.disabled")
    //     name().type("i")
    //     submit().should("be.disabled")
    //     email().type("@email.com")
    //     submit().should("be.disabled")
    //     password().type("faaaa")
    //     submit().should("be.disabled")
    //     tos().click();
    //     submit().should("not.be.disabled")
    // })
    

})