/// <reference types="cypress" />

// Welcome to Moressier!
describe('Launching Moressier app', () => {  
  beforeEach(() => {
    cy.visit('https://www.morressier.com/event/acsspring2020expo/5e733c5acde2b641284a7e27')
  })

  it('checking search button available or not', () => {
   cy.get('input.sc-pVTma.iAFvwR').should('be.visible')
  })

  it('searching the required data', () => {
    cy.get('input.sc-pVTma.iAFvwR').should('be.visible')
    cy.get('input.sc-pVTma.iAFvwR').type('Chemistry').type('{enter}')
  })

  it('check for filter options', () => {
   cy.get('button.sc-bqiQRQ.geIeGH.style__FilterToggleButton-sc-1x1tqvy-6.jLTGFV:nth-child(2)').click()
   cy.get('h4.sc-gsDJrp.bLxCLd').should('have.text', 'Presentation filters')
   cy.get('div#keywordsbh-content>div:nth-child(1)').click()
   cy.get('div#keywordsbh-content>div>h4:nth-child(1)').should('have.text', 'Keywords')
   cy.get('div#author_namesbh-content>div>h4:nth-child(1)').should('have.text', 'Author names')
   cy.get('div#author_organizationsbh-content>div>h4:nth-child(1)').should('have.text', 'Organizations')
   cy.get('div#divisionbh-content>div>h4:nth-child(1)').should('have.text', 'division')
   cy.get('div#symposiabh-content>div>h4:nth-child(1)').should('have.text', 'symposia')
   cy.get('div#sessionbh-content>div>h4:nth-child(1)').should('have.text', 'session')
   //clicking on close button on the filter options popup
   cy.get('button.sc-bqiQRQ.loQDtc').click()
 })

})
