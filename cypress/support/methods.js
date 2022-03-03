export class Methods{
    checkDisplay(selector){
        try{
            cy.get(selector)
            return true
        } catch {
            return false
        }
    }

   toggle(selector){
       try{
            cy.get(selector+' > a').realHover()
            return show(selector)
        } catch {
           console.error()
           console.log('Error inesperado')
        }
       
    }

    goto(path){
        cy.get(path).click()
        if(notShow()==true){
            return true
        }
        return false
    }
}

function show(ms){
    if(cy.get(ms+' > div').should('be.visible')){
        return true
    }
    return false
}

function notShow(){
    cy.get('#menu-item-2977 > a').realHover(notShow)
    return true
}