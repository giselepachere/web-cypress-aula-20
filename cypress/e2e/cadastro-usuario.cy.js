/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';    

describe('Login', () => { //nome da suíte de teste
  let nome;
  let email;
  let senha;

  beforeEach(() => {
    // Gera novos dados a cada teste
    nome = faker.person.firstName();
    email = faker.internet.email({ provider: 'gmail.com' });
    senha = faker.internet.password({ length: 6 });
    //Dado que eu acesse a aplicação
    cy.visit('//register') // Acessa a URL informada no baseUrl do cypress.config.js
  });

  it('Cadastro com sucesso', () => { //nome do caso de teste
    // E preencho campos com dados válidos
    cy.get('#user').type(nome);
    cy.get('#email').type(email);
    cy.get('#password').type(senha);
    
    //Quando clico em validar
    cy.get('#btnRegister').click();
    
    //Então vejo mensagem cadastro realizado!
    cy.get('#swal2-title')
      .should('be.visible')
      .should('contain', 'Cadastro realizado!');
   
      //E vejo mensagem Bem-vindo <nome>
    cy.get('#swal2-html-container')
      .should('be.visible')
      .should('contain', `Bem-vindo ${nome}`);
  });

  it('Campo nome vazio', () => { //nome do caso de teste
    cy.get('#email').type(email);
    cy.get('#btnRegister').click();
    cy.get('#errorMessageFirstName')
      .should('be.visible')
      .should('contain', 'O campo nome deve ser prenchido');
  });

  it('Campo email vazio', () => { //nome do caso de teste
    cy.get('#user').type(nome);
    cy.get('#password').type(senha); 
    cy.get('#btnRegister').click();  
   
    cy.get('#errorMessageFirstName')   
      .should('be.visible')
      .should('contain', 'O campo e-mail deve ser prenchido corretamente');
  });

  it('Campo senha vazio', () => { //nome do caso de teste
    cy.get('#user').type(nome);
    cy.get('#email').type(email);
    cy.get('#btnRegister').click(); 
    
    cy.get('#errorMessageFirstName')
      .should('be.visible')
      .should('contain', 'O campo senha deve ter pelo menos 6 dígitos');
  });

  it('Campo e-mail invalido', () => { //nome do caso de teste
    cy.get('#user').type(nome);
    cy.get('#email').type(nome);
    cy.get('#password').type(senha);
    cy.get('#btnRegister').click();
    cy.get('#errorMessageFirstName')   
      .should('be.visible')
      .should('contain', 'O campo e-mail deve ser prenchido corretamente');
  });

  it('Campo senha invalido', () => { //nome do caso de teste
    cy.get('#user').type(nome);
    cy.get('#email').type(email);
    cy.get('#password').type('123');
    cy.get('#btnRegister').click();
   
    cy.get('#errorMessageFirstName')
      .should('be.visible')
      .should('contain', 'O campo senha deve ter pelo menos 6 dígitos');
  });

});
