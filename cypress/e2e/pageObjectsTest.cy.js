/// <reference types="cypress" />

//const loginPage = require('../support/pages/login.page')
//const dashboardPage = require('../fixtures/data.json')

const {dashboardPage, loginPage} = require ('../support/pages')
const data = require('../fixtures/data.json')

describe('Access Admin Panel', () => {
    beforeEach(() => {
        //cy.visit('/wp-admin')
        cy.login(data.usuario, data.senha)
    });

    it('should login with valid credentials', () => {
        //loginPage.login(data.usuario, data.senha)  
        dashboardPage.siteName.should("be.visible")   
    });
});
