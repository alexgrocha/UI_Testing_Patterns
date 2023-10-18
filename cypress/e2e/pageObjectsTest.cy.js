/// <reference types="cypress" />

//const loginPage = require('../support/pages/login.page')
//const dashboardPage = require('../fixtures/data.json')

const {dashboardPage, loginPage} = require ('..support/pages/index.js')
const data = require('../fixtures/data.json')

describe('Access Admin Panel', () => {
    beforeEach(() => {
        cy.visit('/wp-admin')
    });

    it('should login with valid credentials', () => {
        loginPage.login(data.usuario, data.senha)  
        dashboardPage.siteName.should("be.visible")   
    });
});
