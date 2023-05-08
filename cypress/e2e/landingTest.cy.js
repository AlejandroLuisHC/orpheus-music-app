describe('When accessing web', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001/');
    });
    it('displays login page', () => {
        cy.get('button').contains('Log in / Sign up')
    })
    it('When click on login button', () => {
        cy.get('button').click()
        cy.origin('https://dev-8ubas8e7b3y88k8n.eu.auth0.com', () => {
            cy.get('p').contains('Iniciar sesión en Orpheus para continuar hacia Orpheus')
            describe('When login with wrong credentials', () => {
                cy.get('input[name="username"]').type('wrongemail@email.com')
                cy.get('input[name="password"]').type('wrongpassword')
                cy.get('button[type="submit"]').contains('Iniciar sesión').click()
                cy.get('span').contains('Correo electrónico o contraseña incorrecta')
            })
            describe('When login with correct credentials', () => {
                cy.get('button[data-provider="google"]').click()
                cy.origin('http://localhost:3001/home', () => {
                })
            })
        })
    })
})