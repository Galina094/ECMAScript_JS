// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:
// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя).

// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:
// Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).

class Employee {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(`Name: ${this.name}`);
    }
}

class Manager extends Employee {
    constructor(name, department) {
        super(name);
        this.department = department;
    }

    displayInfo() {
        console.log(`name: ${this.name}, separately: ${this.department}`);
    }
}

// Пример использования классов
const employee = new Employee("John Smith");
employee.displayInfo();
// Вывод:
// Name: John Smith

const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();
// Вывод:
// Name: Jane Doe
// Department: Sales

// --------------------------------------------------------

// ""Управление списком заказов""

// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:

// Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

class Order {
    constructor(orderNumber, product) {
        this.orderNumber = orderNumber;
        this.products = [product];
    }

    addProduct(product) {
        this.products.push(product);
    }    

    getTotalPrice(){
        let sum = 0;
        for (let i = 1; i < this.products.length; i++) {
            sum += this.products[i].price;           
        }

        // this.products.forEach(element => {
        //     sum += element.price;
        //     console.log(element);
        // });
        return sum;
    }

}


// Пример использования класса
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const order = new Order(1);
const product1 = new Product("Phone", 500);
order.addProduct(product1);
const product2 = new Product("Headphones", 100);
order.addProduct(product2);
console.log(`Sum of order${order.orderNumber}: ${order.getTotalPrice()}`);


const order2 = new Order(2);
const product3 = new Product("Phone", 1500);
order2.addProduct(product3);
const product4 = new Product("Headphones", 2000);
order2.addProduct(product4);
console.log(`Sum of order${order2.orderNumber}: ${order2.getTotalPrice()}`);



