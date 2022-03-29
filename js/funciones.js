import { nameUser, placa, form, sense, category } from "./variables.js";
import { UI } from './clases.js';

let cars = [];
let car = {};
let cantTotalAmbosSentidos;
let cantTotalSoloSentido;

function errorMessage() {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Faltan completar datos',
    });
}


export function validateEntry(e) {
    e.preventDefault();

    if (nameUser.value === '' || placa.value === '' || Number(sense.value) === 0 || Number(category.value) === 0) {
        errorMessage();
    } else {

        car = {
            placa: placa.value,
            nameUser: nameUser.value,
            sense: Number(sense.value),
            category: Number(category.value)
        }
        cars = [...cars, car];
        console.log(cars);
        
        amountBothSense(cars);
        resetFormulario();
    }


}


function resetFormulario() {
    form.reset();
}


function amountBothSense(cars) {
    let sumCat1 = 0, sumCat2 = 0, sumCat3 = 0, sumCat4 = 0, sumCat5 = 0;
    cantTotalAmbosSentidos = cars.filter((car) => {

        switch (car.category) {
            case 1:
                if (car.sense === 1) {
                    sumCat1++;
                } else {
                    sumCat1++;
                }
                break;
            case 2:

                if (car.sense === 1) {
                    sumCat2++;
                } else {
                    sumCat2++;
                }
                break;

            case 3:
                if (car.sense === 1) {
                    sumCat3++;
                } else {
                    sumCat3++;
                }
                break;

            case 4:
                if (car.sense === 1) {
                    sumCat4++;
                } else {
                    sumCat4++;
                }
                break;


            case 5:
                if (car.sense === 1) {
                    sumCat5++;
                } else {
                    sumCat5++;
                }
                break;

            default:
                break;
        }
    });

    const ui = new UI(sumCat1, sumCat2, sumCat3, sumCat4, sumCat5);
    ui.printAmountTotal();


}


function amountOnlySense(cars) {
    let sumCat1Sense1 = 0, sumCat1Sense2 = 0,
        sumCat2Sense1 = 0, sumCat2Sense2 = 0,
        sumCat3Sense1 = 0, sumCat3Sense2 = 0,
        sumCat4Sense1 = 0, sumCat4Sense2 = 0,
        sumCat5Sense1 = 0, sumCat5Sense2 = 0;

    cantTotalSoloSentido = cars.filter((car) => {

        switch (car.category) {
            case 1:
                if (car.sense === 1) {
                    sumCat1Sense1++;
                } else {
                    sumCat1Sense2++;
                }
                break;
            case 2:

                if (car.sense === 1) {
                    sumCat2Sense1++;
                } else {
                    sumCat2Sense2++;
                }
                break;

            case 3:
                if (car.sense === 1) {
                    sumCat3Sense1++;
                } else {
                    sumCat3Sense2++;
                }
                break;

            case 4:
                if (car.sense === 1) {
                    sumCat4Sense1++;
                } else {
                    sumCat4Sense2++;
                }
                break;


            case 5:
                if (car.sense === 1) {
                    sumCat5Sense1++;
                } else {
                    sumCat5Sense2++;
                }
                break;
            default:
                break;
        }
    });

}