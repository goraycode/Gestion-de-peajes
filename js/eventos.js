import {getPrint, validateEntry } from './funciones.js';
import { form, selectPrint } from './variables.js';

eventListeners();
function eventListeners() {

    /*  buttonCobrar.disabled = true;
     buttonCobrar.style.cursor = 'not-allowed'; */

    form.addEventListener('submit', validateEntry);

    selectPrint.addEventListener('change', (e) => {
        getPrint(e.target.value);
    });


}