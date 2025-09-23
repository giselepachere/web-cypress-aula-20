/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Checkout One', () => {
    const faker = require('@faker-js/faker').faker;
    let firstName;
    let lastName;
    let companyName;
    let email;
    let fullAddress;
    let additionalNotes;

    beforeEach(() => {
        // Gera dados aleatórios para cada campo usando faker
        firstName = faker.person.firstName();
        lastName = faker.person.lastName();
        companyName = faker.company.name();
        email = faker.internet.email();
        fullAddress = faker.location.streetAddress();
        additionalNotes = faker.lorem.sentence();
        // Acessa a página de checkout
        cy.visit('/checkout-one');
    });

    it('Checkout com sucesso', () => {
        // Preenche o campo First Name
        cy.get('#fname').type(firstName);
        cy.get('#fname').should('have.value', firstName);

        // Preenche o campo Last Name
        cy.get('#lname').type(lastName);
        cy.get('#lname').should('have.value', lastName);

        // Preenche o campo Company Name
        cy.get('#cname').type(companyName);
        cy.get('#cname').should('have.value', companyName);

        // Preenche o campo Email
        cy.get('#email').type(email);
        cy.get('#email').should('have.value', email);

        // Seleciona o país no dropdown
        cy.get('#country').select('usa');
        cy.get('#country').should('have.value', 'usa');

        // Seleciona o estado/cidade no dropdown
        cy.get('#city').select('Aland Islands');
        cy.get('#city').should('have.value', 'Aland Islands');

        // Preenche o campo Full Address
        cy.get('#faddress').type(fullAddress);
        cy.get('#faddress').should('have.value', fullAddress);

        // Preenche o campo Additional Notes
        cy.get('#messages').type(additionalNotes);
        // cy.get('#messages').should('have.value', additionalNotes);

        // Marca o checkbox Save In Address Book
        cy.get('#materialUnchecked').check();
        cy.get('#materialUnchecked').should('be.checked'); 

        // (Comentado) Clicar no botão Save e validar mensagem de sucesso
        // cy.get('.btn-black-overlay').click();
        // cy.get('.success-message').should('be.visible');

        // Marca o checkbox com id 'css'
        cy.get('#css').check();
        cy.get('#css').should('be.checked');

        // Clica no botão dentro de #order_review com a classe .theme-btn-one
        cy.get('.order_review').find('.theme-btn-one').click();
    });
});
