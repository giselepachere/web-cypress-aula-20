/// <reference types="cypress"/> 

// Bloco de testes, agrupa os casos de teste relacionados
    describe('Comandos Básicos', () => { //nome da suíte de teste 

  // Caso de teste: deve acessar a página inicial
        it('Acessar uma URL', () => {
    
            cy.visit('https://automationpratice.com.br/login') // Acessa a URL informada  
        });


        it('Encontrar elementos', () => {      // Encontra o elemento que queremos interagir 
            cy.visit('https://automationpratice.com.br/login')  

            // get() - selecionar/encontrar elementos no DOM
            cy.get('#user') // Seleciona o input de e-mail pelo ID 'user'

            // find() - ele vai selecionar um elementos
            // diminuindo o escopo com o get antes
            cy.get('.mc-form').find('.form-control') // Seleciona todos os itens de lista dentro do elemento com a classe 'nav'
            // cy.get('.mc-form> .form-control') // Posso usar das duas formas essa e a de cima

            // contain - encontrar um elemento pelo texto 
            // diminuindo o escopo com o get antes   
            // cy.get('.mc-form').find('.form-control').contains('Send e-mail') // Seleciona o elemento com o texto 'EMAIL' dentro de .mc-form
             
        });    
    
        it('deve preencher um campo com enter', () => {   
            cy.visit('https://automationpratice.com.br/login') 
                cy.get('.mc-form').find('.form-control').type('gi@gmail.com{enter}') // Digita o e-mail no campo e dá enter

        });

        it('clicar no elemento login', () => {   
             cy.visit('https://automationpratice.com.br/login') 
               cy.get('#btnLogin').click() // clicar no botão login
                //cy.get('#btnLogin').rightclick() // clicar com o botão direito do mouse
                //cy.get('#btnLogin').dblclick() // clicar duas vezes no botão login
        }); 

        it('Select ou  dropdown', () => {   
            cy.visit('https://automationpratice.com.br/checkout-one') 
                cy.get('#country').select('usa') // selecionar um país no dropdown por nome 
                cy.get('#state').select(2) // por posição 


        }); 
                
        it('Checkbox', () => {   
            cy.visit('https://automationpratice.com.br/checkout-one') 
                cy.get('materialUnchecked').check() // marcar o checkbox
                //cy.get('materialUnchecked').uncheck() // desmarcar o checkbox
                cy.get('materialUnchecked').should('be.checked') // verificar se o checkbox está marcado
                cy.get('materialUnchecked').should('not.be.checked') // verificar se o checkbox não está marcado

                
        });         

        it('RadioBotton', () => {  
            
            cy.visit('https://automationpratice.com.br/checkout-one') 
                cy.get('#css').check() // marcar o radio button
                cy.get('#css').should('be.checked') // verificar se o radio button está marcado
                cy.get('#css').should('not.be.checked') // verificar se o radio button não está marcado
        });  

        it('Desabilitado', () => {  
            cy.visit('https://automationpratice.com.br/checkout-one') 
                cy.get('#email').should('be.disabled') // verificar se o campo está desabilitado
                cy.get('#firstName').should('be.enabled') // verificar se o campo está habilitado
        }); 

        it('Visibilidade', () => {  
            cy.visit('https://automationpratice.com.br/checkout-one') 
                cy.get('#email').should('be.visible') // verificar se o campo está visível
                cy.get('#firstName').should('not.be.visible') // verificar se o campo não está visível
        });

        it('Validar um texto', () => {  
            cy.visit('https://automationpratice.com.br/login') 
                cy.get('#createAccount')
                    .should('be.visible') // verificar se está visivel
                    .should('exist') // verificar se tem a classe text-center
                    .should('contain', 'Ainda não tem conta?')

        }); 
 }); 
  

