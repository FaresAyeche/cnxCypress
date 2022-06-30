/// <reference types="cypress" />

import { mt } from "../pageObjectMytek/mt"




describe('mytek',()=>{
const m=new mt
it('doit être dans la page d_acceuil MyTek',()=>{
m.navigation()
})

it('les données NOK  doivent PAS être remplis et compte non conect',()=>{

    m.connexionP()
    
    })
                   it('les données  doivent être remplis et  connecter',()=>{
                  
                  
  m.connexionP()
        m.remplissage2()
        
        })
        it('il faut effacer les champs',()=>{
    
            m.effacerC()
            
            })



    
       it('doit être dans la pge de connexion',()=>{
    
            m.remplissage()
            
            })








})







































