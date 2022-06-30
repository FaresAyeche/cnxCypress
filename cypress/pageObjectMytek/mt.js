
export class mt{
    navigation(){
    cy.visit("https://www.mytek.tn/")
    
    }
   
connexionP(){
    cy.get('.panel > .header > .link > a').click()

}
remplissage(){
    cy.get('#email').type('ahmed-baha-eddine.ben-dhaya@talan.com')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('22080023Ah')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
}
remplissage2(){
    cy.get('#email').type('ahmed-baha-eddine.ben-dhaya88@talan.com')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('2208{enter}')
   // cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
}
effacerC(){
    cy.get('#email').clear()  
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').clear()
}
}