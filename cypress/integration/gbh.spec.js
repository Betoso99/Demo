import('cypress-real-events/support')

describe('demo', () => {
    it('Visit GBH', () => {
        cy.visit('https://gbh.com.do/es/');

        if(checkDisplay() == true){
            if(toggleSolutions() == true){
                if(gotoInnovationSquat() == true){
                    if(checkInnovationSquadDisplay() == true){
                        cy.wait(3000)
                        if(toggleWhoAreWe() == true){
                            if(gotoAboutUs()){
                                checkAboutUsDisplay()
                            }
                        }
                    }
                }
            }
        }
    });
   });

   function checkDisplay(){
        try{
            cy.get('.et_pb_section_0 > .et_pb_row > .et_pb_column > .et_pb_button_module_wrapper > .et_pb_button')
            return true
        }
        catch{
            return false
        }
    }

    function checkInnovationSquadDisplay(){
        try{
            cy.get('#et-boc > div > div > div.et_pb_section.et_pb_section_0.showcase.bg.bg--logo-green-to-blue.bg--green-to-blue-animated.bg--shadow-overlay.et_pb_with_background.et_section_regular > div.et_pb_row.et_pb_row_0.text-center.text-lg-left > div > div.et_pb_button_module_wrapper.et_pb_button_0_wrapper.et_pb_module > a')
            return true
        }
        catch{
            return false
        }
    }

    function checkAboutUsDisplay(){
        try{
            cy.get('#et-boc > div > div > div.et_pb_section.et_pb_section_0.showcase.bg.bg--green-to-blue.bg--green-to-blue-animated.bg--shadow-overlay-sm.et_pb_with_background.et_section_regular > div.et_pb_row.et_pb_row_0 > div')
            return true
        }
        catch{
            return false
        }
    }

    function show(ms){
        if(cy.get('#menu-item-'+ms+' > div').should('be.visible')){
            return true
        }
        return false
    }

    function notShow(){
        cy.get('#menu-item-2977 > a').realHover(notShow)
        return true
    }

   function toggleSolutions(){
       try{
            cy.get('#menu-item-4135 > a').realHover()
            return show('4135')
       }catch{
           console.log('Error inesperado')
       }
       
    }

   function toggleWhoAreWe(){
        try{
            setTimeout(()=>{}, 3000);
            cy.get('#menu-item-4132 > a').realHover()
            return show('4132')
        }catch{
            console.log('Error inesperado')
        }
    }

    function gotoInnovationSquat(){
        cy.get('#menu-item-4139 > a').click()
        if(notShow()==true){
            return true
        }
        return false
    }

    function gotoAboutUs(){
        cy.get('#menu-item-4133 > a').click()
        if(notShow()==true){
            return true
        }
        return false
    }

    //#menu-item-4133 > a