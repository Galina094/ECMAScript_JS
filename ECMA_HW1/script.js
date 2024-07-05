// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
// найти минимальное число в массиве, решение задание должно состоять из одной
// строки кода.

// const arr = [1, 5, 7, 9, 0];

// function searchMin (arr){
//     return Math.min(...arr);
// }
// console.log(searchMin(arr));

// // или сразу в консоль..

// console.log(Math.min(...arr));


// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект
// с двумя методами: increment и decrement. Метод increment должен увеличивать
// значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
// на 1. Значение счетчика должно быть доступно только через методы объекта,
// а не напрямую.

// function createCounter () {
//     let counter = 0;

//     const increment = () => {
//         return ++counter;
//     }

//     const decrement = () => {
//         return --counter;
//     }

//     const backCount = () => {
//         return counter;
//     }

//     return {increment, decrement, backCount};
// }

// const count = createCounter();
// console.log(count.increment());
// console.log(count.increment());
// console.log(count.decrement());

// const count2 = createCounter();
// console.log(count2.backCount());

// 3) Дополнительное задание, выполняем только если проходили работу с DOM.
// Напишите рекурсивную функцию findElementByClass, которая принимает корневой
// элемент дерева DOM и название класса в качестве аргументов и возвращает первый
// найденный элемент с указанным классом в этом дереве.

const rootElement = document.querySelector('html');

function findElementsByClass(rootElement, className) {
    let foundElements = [];
    let elementsToSearch = [rootElement];

    while (elementsToSearch.length > 0) {
        let currentElement = elementsToSearch.shift();
      if (currentElement.classList.contains(className)) {
        foundElements.push(currentElement);
      }
      Array.prototype.push.apply(elementsToSearch, currentElement.children);
    }
  
    return foundElements;
}
  
  let foundChildren = findElementsByClass(rootElement, 'elem4');

  console.log(foundChildren);

// function countTags(n, classEl) { //n – это Node
//     let numtags = 0;     //Инициализируем счетчик тегов
//     if (n.nodeType == 1) //Проверяем, является ли n объектом Element
//         numtags++;           //Если это так, то увеличиваем счетчик
//     //Теперь получаем все дочерние элементы n
//     const children = n.childNodes;
    
//     //Цикл по всем дочерним элементам
//     for (var i = 0; i < children.length; i++) {       
//         console.log(children[i]);
//         // if (children[i].classList.contains(classEl)) {
//         //     return children[i];
//         // }    //         
//         numtags += countTags(children[i]);
//     }
//     return numtags;      //Возвращаем общее количество тегов
// }
// console.log(countTags(rootElement, 'elem4'));



