 /// <reference types="cypress"/> 
 describe('Login', () => { //nome da suíte de teste

    it('Deve fazer login com sucesso', () => { //nome do caso de teste
        cy.visit('/login') // Acessa a URL informada 
        cy.get('#user').type('gi@gmail.com') // Digita o e-mail no campo de e-mail
        cy.get('#password').type('123456') // Digita a senha no campo de senha
        cy.get('#btnLogin').click() // clicar no botão login
        cy.get('#swal2-title').should('be.visible').should('contain', 'Login realizado') // Verifica se o alerta de erro está visível
       // cy.url().should('include', '/dashboard') // Verifica se a URL contém '/dashboard' após o login bem-sucedido
      //  cy.get('.welcome-message').should('contain', 'Bem-vindo, Gi!') // Verifica se a mensagem de boas-vindas está correta
        
    }); 

    it('Campo e-mail Vazio', () => { //nome do caso de teste
        cy.visit('/login') // Acessa a URL informada 
        cy.get('#btnLogin').click() // clicar no botão login
        cy.get('.invalid_input')
            .should('be.visible')
            .should('contain', 'E-mail inválido.') 
              
         
         });   

    it('Campo senha Vazio', () => { //nome do caso de teste
        cy.visit('/login') // Acessa a URL informada
        cy.get('#user').type('gi@gmail.com') // Digita o e-mail no campo de e-mail
        cy.get('#btnLogin').click() // clicar no botão login
        cy.get('.invalid_input')
            .should('be.visible')
            .should('contain', 'Senha inválida.') // Verifica se o alerta de erro está visível 
           
        }); 
        
    it('E-mail invalido', () => { //nome do caso de teste
        cy.visit('/login')  
        cy.get('#user')
            .type('gi@gmail.com')  
        cy.get('#password')
            .type('156')  
        cy.get('#btnLogin')
            .click()    
        cy.get('.invalid_input')
            .should('be.visible')
            .should('contain', 'Senha inválida.') 
        
    });  
        
    it.only('Senha invalido', () => { //nome do caso de teste
        cy.visit('/login')  
        cy.get('#user')
            .type('g12')  
        cy.get('#password')
            .type('123456')  
        cy.get('#btnLogin')
            .click()    
        cy.get('.invalid_input')
            .should('be.visible')
            .should('contain', 'E-mail inválido.') 
        
    });  
        
        });  