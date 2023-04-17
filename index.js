// --------------------------------- Task-1 ---------------------------------


const userText = document.getElementById("input");
const buttonTask1 = document.getElementById("buttonTask1");
const addInkMarker = document.getElementById("addInkMarker");

class Marker {
    constructor(color, ink) {
        this.color = color;
        this.ink = ink;
    }
    noneLevel() {
        if (this.ink === 0) {
            task1.innerHTML += '<p class="alignCenter">Чернила закончились, нужно заправить!</p>';
        };
    };
    print(text) {
        let output = "";
        let res = "";

        for (let i = 0; i < text.length; i++) {
            if (text[i] !== " " && this.ink > 0) {
                output += `<span style="color: ${this.color}">${text[i]}</span>`;
                this.ink -= 0.5;
                res = '<p class ="result1">' + output + '</p>';
            }
            else {
                output += text[i];
                res = '<p class ="result1">' + output + '</p>';
            };
        };
        // task1.innerHTML += res;
        document.getElementById('task1').innerHTML += res;
        this.noneLevel();
    };
};

class AddMarker extends Marker {
    fill() {
        this.ink += 100;
        task1.innerHTML += '<p class="alignCenter">Чернила заправлены на 200 символов без пробелов!</p>';
    }
    noneLevel() {
        super.noneLevel();
    };
};

const marker = new AddMarker(`red`, 100);

buttonTask1.addEventListener("click", () => marker.print(userText.value));

addInkMarker.addEventListener("click", () => marker.fill());


// --------------------------------- Task-2 ---------------------------------


class ExtendedDate extends Date{
    constructor(dateString) {
        super(dateString);
    };
    dateText() {
        const first = ["","Первое","Второе","Третье","Четвёртое","Пятое","Шестое","Седьмое","Восьмое","Девятое"];
        const second = ["Десятое","Одиннадцатое","Двенадцатое","Тринадцатое","Четырнадцатое","Пятнадцатое","Шестнадцатое","Семнадцатое","Восемнадцать","Девятнадцать"];
        const decimal = ["", "", "Двадцать", "Тридцать"];
        const third = ["", "", "Двадцатое", "Тридцатое"];
        const month = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
        
        let result = '';

        if (this.getDate() < 10) result = first[this.getDate()];
        else if (this.getDate() >= 10 && this.getDate() < 20) result = second[this.getDate() - 10];
        else if ((this.getDate() == 20) || (this.getDate() == 30)) result = third[this.getDate() / 10];
        else {
            let firstNum = this.getDate() % 10;
            let decimalNum = (this.getDate() - this.getDate() % 10) / 10;
            result = ' ' + decimal[decimalNum] + ' ' + first[firstNum];
        };

        result += ' ' + month[this.getMonth()];
        return result;
    };
    futureOrPast() {
        const today = new Date();
        if (this < today) return false;
        else return true;
    };
    isLeapYear() {
        const leap = ((this.getFullYear() % 400 == 0) || ((this.getFullYear() % 4 == 0) && (this.getFullYear() % 100 != 0))) ? 'Высокосный' : 'НЕТ';
        return leap;
    }
    nextDay() {
        const next = new Date(Date.parse(this) + 24 * 60 * 60 * 1000);
        return next.toLocaleDateString();
    };
};

const dateUser = document.getElementById('date');

submit.addEventListener("click", () => {
    let res = '';
    let newDate = new ExtendedDate(dateUser.value);

    res += `<p> Указанная дата: <span>${newDate.toLocaleDateString()}</span> </p>`;
    res += `<p> Дата прописью: <span>${newDate.dateText()}</span> </p>`;
    res += `<p> Это Будущая дата или Прошедшая? <span>${(newDate.futureOrPast() ? 'Будущая' : 'Прошедшая')}</span> </p>`;
    res += `<p> Этот год Высокосный или Нет? <span>${newDate.isLeapYear()}</span> </p>`;
    res += `<p> Дата следующего дня: <span>${newDate.nextDay()}</span> </p>`;

    document.getElementById('task2').innerHTML = res;
});


// --------------------------------- Task-3 ---------------------------------


class Employee {
    constructor(lastName, firstName, age, position, salary) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.age = age;
        this.position = position;
        this.salary = salary;
    };
};
class EmpTable {
    constructor(employees = []) {
        this.employees = employees;
    };
    getHtml() {
        let tbl = '';
        for (let tempEmp in this.employees) {
            tbl += '<tr>';
            for (let tempValue in this.employees[tempEmp]) {
                tbl += '<td>' + this.employees[tempEmp][tempValue] + '</td>';
            };
            tbl += '</tr>';
        };
        task3.innerHTML += tbl;
    };
};
const employees =
[
    mikhailov = new Employee('Михайлов', 'Георгий', 32, 'Бухгалтер', '20 000'),
    bobrov = new Employee('Бобров', 'Леонид', 22, 'Аналитик', '15 000'),
    prokofieva = new Employee('Прокофьева', 'Вероника', 43, 'Банкир', '100 000'),
    efimov = new Employee('Ефимов', 'Андрей', 19, 'Кассир', '10 000'),
    makarov = new Employee('Макаров', 'Роман', 25, 'Aгент', '12 000')
];

const employeesTbl = new EmpTable(employees);
employeesTbl.getHtml();


// ------------------------------------------------------------------------------------


const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
        this.el.classList.remove('btn-up_hide');
    },
    hide() {
        this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            scrollY > 400 ? this.show() : this.hide();
        });
        document.querySelector('.btn-up').onclick = () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
}
btnUp.addEventListener();
