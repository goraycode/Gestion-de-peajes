import { UI } from './clases.js';
import { validateEntry } from './funciones.js';
import { buttonPrint, category, form, sense } from './variables.js';

eventListeners();
function eventListeners() {

    /*  buttonCobrar.disabled = true;
     buttonCobrar.style.cursor = 'not-allowed'; */

    form.addEventListener('submit', validateEntry);

    buttonPrint.addEventListener('click', () => {

        const ui = new UI(0, 0, 0, 0, 0);
        ui.printAmountTotal();

    });


}