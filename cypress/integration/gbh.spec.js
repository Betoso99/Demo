import('cypress-real-events/support')
import {Methods} from '../support/methods'
const methods = new Methods();

describe('demo', () => {
    it('Visit GBH', () => {
        cy.visit('https://gbh.com.do/es/');

        if(methods.checkDisplay('.et_pb_section_0 > .et_pb_row > .et_pb_column > .et_pb_button_module_wrapper > .et_pb_button') == true){
            if(methods.toggle('#menu-item-4135') == true){
                if(methods.goto('#menu-item-4139 > a') == true){
                    if(methods.checkDisplay('#et-boc > div > div > div.et_pb_section.et_pb_section_0.showcase.bg.bg--logo-green-to-blue.bg--green-to-blue-animated.bg--shadow-overlay.et_pb_with_background.et_section_regular > div.et_pb_row.et_pb_row_0.text-center.text-lg-left > div > div.et_pb_button_module_wrapper.et_pb_button_0_wrapper.et_pb_module > a') == true){
                        cy.wait(3000)
                        if(methods.toggle('#menu-item-4132') == true){
                            if(methods.goto('#menu-item-4133 > a')){
                                methods.checkDisplay('#et-boc > div > div > div.et_pb_section.et_pb_section_0.showcase.bg.bg--green-to-blue.bg--green-to-blue-animated.bg--shadow-overlay-sm.et_pb_with_background.et_section_regular > div.et_pb_row.et_pb_row_0 > div')
                            }
                        }
                    }
                }
            }
        }
    });
   });