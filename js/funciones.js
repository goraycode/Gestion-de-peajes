import { nameUser, placa, form, sense, category } from "./variables.js";
import { Average, UI, UIcarSense } from './clases.js';

export let cars = [];
let recaudado = [];
let car = {};
let vehiculos;


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

        resetFormulario();
    }


}


export function getPrint(e) {
    switch (e) {
        case '1':
            amountBothSense(cars);
            break;

        case '2':
            amountOnlySense(cars);
            break;

        case '3':
            averageCategory();
            break;
        case '4':
            console.log(recaudado);
            break;

        default:
            break;
    }
}


function resetFormulario() {
    form.reset();
}


export function amountBothSense(cars) {
    let sumCat1 = 0, sumCat2 = 0, sumCat3 = 0, sumCat4 = 0, sumCat5 = 0;
    vehiculos = cars.filter((car) => {

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
    ui.printAmountBothTotal();

    //retornamos la suma para sacar el promedio de recaudo de la categoria 1
    return sumCat1;

}





function amountOnlySense(cars) {
    let sumCat1Sense1 = 0, sumCat1Sense2 = 0,
        sumCat2Sense1 = 0, sumCat2Sense2 = 0,
        sumCat3Sense1 = 0, sumCat3Sense2 = 0,
        sumCat4Sense1 = 0, sumCat4Sense2 = 0,
        sumCat5Sense1 = 0, sumCat5Sense2 = 0;

    vehiculos = cars.filter((car) => {

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

    const uiOnlySense = new UIcarSense(sumCat1Sense1, sumCat1Sense2,
        sumCat2Sense1, sumCat2Sense2,
        sumCat3Sense1, sumCat3Sense2,
        sumCat4Sense1, sumCat4Sense2,
        sumCat5Sense1, sumCat5Sense2);

    uiOnlySense.printAmountTotal();

}


function averageCategory() {
    let par, totalCat1 = 0, averageP = 0, averageI = 0, sumP = 0, sumI = 0;

    totalCat1 = amountBothSense(cars);

    par = cars.filter((car) => {
        //aseguramos que solo filtre los que tengan categoria 1
        if (car.category === 1) {
            //obtenemos el ultimo digito de la placa

            let latestDigit = Number(car.placa.slice(-1));
            if (latestDigit % 2 === 0) {
                sumP++;
                averageP = (totalCat1 * 8900) / sumP;

            } else {
                sumI++;
                averageI = (totalCat1 * 8900) / sumI;
            }
        }
    });

    console.log(`Promedio de pares: ${averageP}`);
    console.log(`Promedio de impares: ${averageI}`);

    const printAverage = new Average(averageP, averageI);
    printAverage.printAverage();


}