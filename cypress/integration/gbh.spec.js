import('cypress-real-events/support')

describe('demo', () => {
    it('Visit GBH', () => {
        cy.visit('https://gbh.com.do/es/');

        if(checkDisplay('.et_pb_section_0 > .et_pb_row > .et_pb_column > .et_pb_button_module_wrapper > .et_pb_button') == true){
            if(toggle('#menu-item-4135') == true){
                if(goto('#menu-item-4139 > a') == true){
                    if(checkDisplay('#et-boc > div > div > div.et_pb_section.et_pb_section_0.showcase.bg.bg--logo-green-to-blue.bg--green-to-blue-animated.bg--shadow-overlay.et_pb_with_background.et_section_regular > div.et_pb_row.et_pb_row_0.text-center.text-lg-left > div > div.et_pb_button_module_wrapper.et_pb_button_0_wrapper.et_pb_module > a') == true){
                        cy.wait(3000)
                        if(toggle('#menu-item-4132') == true){
                            if(goto('#menu-item-4133 > a')){
                                checkDisplay('#et-boc > div > div > div.et_pb_section.et_pb_section_0.showcase.bg.bg--green-to-blue.bg--green-to-blue-animated.bg--shadow-overlay-sm.et_pb_with_background.et_section_regular > div.et_pb_row.et_pb_row_0 > div')
                            }
                        }
                    }
                }
            }
        }
    });
   });

   function checkDisplay(selector){
        try{
            cy.get(selector)
            return true
        }
        catch{
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

   function toggle(selector){
       try{
            cy.get(selector+' > a').realHover()
            return show(selector)
       }catch{
           console.log('Error inesperado')
       }
       
    }

    function goto(path){
        cy.get(path).click()
        if(notShow()==true){
            return true
        }
        return false
    }

