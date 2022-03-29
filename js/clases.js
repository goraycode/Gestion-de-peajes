import { form } from "./variables.js";

export class UI {
    constructor(sum1, sum2, sum3, sum4, sum5) {
        this.sum1 = sum1;
        this.sum2 = sum2;
        this.sum3 = sum3;
        this.sum4 = sum4;
        this.sum5 = sum5;
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
          </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>${this.sum1}</td>
                <td>8900</td>
                <td>${this.sum1 * 8900}</td>
            </tr>
            <tr>
                <td>2</td>
                <td>${this.sum2}</td>
                <td>12300</td>
                <td>${this.sum2 * 12300}</td>
            </tr>
            <tr>
                <td>3</td>
                <td>${this.sum3}</td>
                <td>28700</td>
                <td>${this.sum3 * 28700}</td>
            </tr>
            <tr>
                <td>4</td>
                <td>${this.sum4}</td>
                <td>34800</td>
                <td>${this.sum4 * 34800}</td>
            </tr>
            <tr>
                <td>5</td>
                <td>${this.sum5}</td>
                <td>48500</td>
                <td>${this.sum1 * 48500}</td>
            </tr>
        </tbody>
        `;

        div.appendChild(table);



        form.appendChild(div);
    }

    printMoney() {
        //creamos una tabla
        const div = document.createElement('div');
        div.classList.add('form__table');
        const p = document.createElement('p');
        p.textContent = 'Recaudo de dinero por cada categoria';
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
                <th>Total $</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>${this.sum1 * 8900}</td>
            </tr>
            <tr>
                <td>2</td>
                <td>${this.sum2 * 12300}</td>
            </tr>
            <tr>
                <td>3</td>
                <td>${this.sum3 * 28700}</td>
            </tr>
            <tr>
                <td>4</td>
                <td>${this.sum4 * 34800}</td>
            </tr>
            <tr>
                <td>5</td>
                <td>${this.sum5 * 48500}</td>
            </tr>
        </tbody>
        `;

        div.appendChild(table);



        form.appendChild(div);
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
