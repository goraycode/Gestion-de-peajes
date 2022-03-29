import { cars } from "./funciones.js";
import { form } from "./variables.js";

export class UI {
    constructor(sum1, sum2, sum3, sum4, sum5) {
        this.sum1 = sum1;
        this.sum2 = sum2;
        this.sum3 = sum3;
        this.sum4 = sum4;
        this.sum5 = sum5;
        this.arrayRecaudos = [];
        this.higher = 0;
        this.less = 0;
        this.positionMay = 0;
        this.positionMen = 0;
    }

    printAmountBothTotal() {
        //creamos una tabla
        const div = document.createElement('div');
        div.classList.add('form__table');
        const p = document.createElement('p');
        p.textContent = 'Total de vehículos de cada categoria en ambos sentidos y el recaudo en $';

        div.appendChild(p);


        const getDiv = document.querySelector('div.form__table');

        if (getDiv !== null) {
            getDiv.remove();
        }

        const table = document.createElement('table');
        table.className = 'table table-dark table-stripedr';

        table.innerHTML = `
        <thead>
            <tr>
                <th>Categoria</th>
                <th>Total Vehículos</th>
                <th>$Valor</th>
                <th>$ Total recaudo</th>
                <th>Porcentaje %</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>${this.sum1}</td>
                <td>8900</td>
                <td>${this.sum1 * 8900}</td>
                <td>${this.calculatePercentage(this.sum1, cars.length)}%</td>
            </tr>
            <tr>
                <td>2</td>
                <td>${this.sum2}</td>
                <td>12300</td>
                <td>${this.sum2 * 12300}</td>
                <td>${this.calculatePercentage(this.sum2, cars.length)}%</td>
            </tr>
            <tr>
                <td>3</td>
                <td>${this.sum3}</td>
                <td>28700</td>
                <td>${this.sum3 * 28700}</td>
                <td>${this.calculatePercentage(this.sum3, cars.length)}%</td>
            </tr>
            <tr>
                <td>4</td>
                <td>${this.sum4}</td>
                <td>34800</td>
                <td>${this.sum4 * 34800}</td>
                <td>${this.calculatePercentage(this.sum4, cars.length)}%</td>
            </tr>
            <tr>
                <td>5</td>
                <td>${this.sum5}</td>
                <td>48500</td>
                <td>${this.sum5 * 48500}</td>
                <td>${this.calculatePercentage(this.sum5, cars.length)}%</td>
            </tr>
        </tbody>
        `;

        div.appendChild(table);

        const pHigherLess = document.createElement('p');
        pHigherLess.textContent = `
        El recaudo más alto se dio en la categoria
        `;





        form.appendChild(div);
        this.printHiguerLess();
    }

    printHiguerLess() {
        const div = document.createElement('div');
        div.classList.add('form__fields');
        const p = document.createElement('p');
        p.textContent = `${this.higuerLess()}`;

        div.appendChild(p);

        form.appendChild(div);
    }

    calculatePercentage(sum, total) {

        if (sum === 0) {
            return 0
        }
        sum = (sum * 100) / total;
        return sum.toFixed(2);
    }

    higuerLess() {

        this.arrayRecaudos = [...this.arrayRecaudos, this.sum1 * 8900,
        this.sum2 * 12300,
        this.sum3 * 28700,
        this.sum4 * 34800,
        this.sum5 * 48500];

        this.less = Math.max(
            this.sum1 * 8900,
            this.sum2 * 12300,
            this.sum3 * 28700,
            this.sum4 * 34800,
            this.sum5 * 48500);

        this.arrayRecaudos.forEach((recaudo, index) => {
            //obtenemos el mayor
            if (recaudo > this.higher) {
                this.higher = recaudo;
                this.positionMay = index;
            }

            //obtenemos el menor

            if (recaudo < this.less) {
                this.less = recaudo;
                this.positionMen = index;
            }
        });

        console.log(this.arrayRecaudos);

        return `Recaudo mayor: $${this.higher} de la categoria ${this.positionMay + 1} y el Recaudo menor: $${this.less} de la categoria ${this.positionMen + 1}`;
    }

}


export class UIcarSense extends UI {
    constructor(sum1, sum2, sum3, sum4, sum5, sum6, sum7, sum8, sum9, sum10) {
        super(sum1, sum2, sum3, sum4, sum5);
        this.sum6 = sum6;
        this.sum7 = sum7;
        this.sum8 = sum8;
        this.sum9 = sum9;
        this.sum10 = sum10;
    }
    printAmountTotal() {
        //creamos una tabla
        const div = document.createElement('div');
        div.classList.add('form__table');
        const p = document.createElement('p');
        p.textContent = 'Total de vehículos de cada categoria en cada sentido';
        div.appendChild(p);


        const getDiv = document.querySelector('div.form__table');

        if (getDiv !== null) {
            getDiv.remove();
        }

        const table = document.createElement('table');
        table.className = 'table table-dark table-stripedr';

        table.innerHTML = `
        <thead>
            <tr>
                <th>Categoria</th>
                <th>Br a SM</th>
                <th>SM a Br</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>${this.sum1}</td>
                <td>${this.sum2}</td>
            </tr>
            <tr>
                <td>2</td>
                <td>${this.sum3}</td>
                <td>${this.sum4}</td>
            </tr>
            <tr>
                <td>3</td>
                <td>${this.sum5}</td>
                <td>${this.sum6}</td>
            </tr>
            <tr>
                <td>4</td>
                <td>${this.sum7}</td>
                <td>${this.sum8}</td>
            </tr>
            <tr>
                <td>5</td>
                
                <td>${this.sum9}</td>
                <td>${this.sum10}</td>
            </tr>
        </tbody>
        `;

        div.appendChild(table);



        form.append(div);
    }
}


export class Average {
    constructor(even, odd) {
        this.even = even;
        this.odd = odd;
    }

    printAverage() {
        const div = document.createElement('div');
        div.classList.add('form__table');
        const p = document.createElement('p');
        p.textContent = 'Promedio de recaudo para vehículos de categoria 1';
        div.appendChild(p);


        const getDiv = document.querySelector('div.form__table');

        if (getDiv !== null) {
            getDiv.remove();
        }

        const table = document.createElement('table');
        table.className = 'table table-dark table-stripedr';

        table.innerHTML = `
        <thead>
            <tr>
                <th>Placa finalizada</th>
                <th>Promedio</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td>Par</td>
                <td>${this.even.toFixed(2)}</td>
            </tr>
            <tr>
                <td>Impar</td>
                <td>${this.odd.toFixed(2)}</td>
            </tr>
        </tbody>
            `;

        div.appendChild(table);



        form.append(div);


    }


}