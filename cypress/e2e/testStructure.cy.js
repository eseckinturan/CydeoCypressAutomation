/// <reference types="cypress" />

describe('Context: My first test',() =>{
    before(()=>{
        // runs once before all test cases in this describe block like beforeClass in TestNG
    })
    beforeEach(()=>{
        // run before each test case, beforeMethod ins testNG
        cy.clearCookies();
    })
    after(() => {
        //similar to aftrClass in TestNG, runs once after all test finished

    } )
    afterEach(() => {
        // similar to afterMethod in TestNG
    })
    it('Opening a web application', () => {
        cy.visit('https://practice.cydeo.com');
    })
})