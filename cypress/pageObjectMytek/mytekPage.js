


export class mytekPage{
    navigation(){
    cy.visit("https://www.mytek.tn/")
    
    }
   
connexionP(){
    cy.get('.panel > .header > .link > a').click()

}


}