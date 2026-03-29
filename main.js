/**
 * 1.1.Выведит элементы массива в формате:   
 * Element 0: value x 
 * Element 1: value y 
 * Element 2: value z 
 * @param {Array} array - массив для вывода    
 */ 
function printArray(array) {
    if (!Array.isArray(array)) {
        throw new TypeError("Argument must be an array");
    }
    for (let i = 0; i < array.length; i++) {
        console.log(`Element ${i}: value ${array[i]}`);  
    }
}
/**
 * Выводит элементы массива в формате:  
 * 0: x 
 * 1: y
 * 2: z
 * @param {Array} array - массив для вывода 
 */ 
function printArray1(array) {
    if(!Array.isArray(array)) {
        throw new TypeError("Argument must be an array"); 
    }
    for (let i = 0; i < array.length; i++) {
        console.log(`${i}: ${array[i]}`); 
    }
}
const testArray = [10, 20, 30]; 
console.log("printArray: ");
printArray(testArray);
console.log("printArray1: ");
printArray1(testArray);
 /** 
 * 1.2.Универсальная функция forEach 
 * Выполняет колбэк для каждого элемента массива
 * @param {Array} array - массив для обхода 
 * @param {Function} callback - функция обратного вызова (element, index, array) 
 * @returns {undefined}
 * @throws {TypeError} если аргументы неверные
 */
function forEach(array, callback) {
    if (!Array.isArray(array)) throw new TypeError("Первый аргумент должен быть массивом");
    if(typeof callback !== "function") throw new TypeError("Второй аргумент должен быть функцией");
    for (let i = 0; i < array.length; i++)  {
        callback(array[i], i, array);
    }
}
   console.log("=== forEach ===");
forEach([1, 2, 3], (el, idx) => console.log(`Element: ${el}, Index: ${idx}`));
// Ошибка
try { forEach(123, () => {}); } catch(e) { console.log(e); }
/**
 * 2. Функция map 
 * Создает новый массив с результатами вызова колбэка для каждого элемента
 * @param {Array} array 
 * @param {Function} callback
 * @returns {Array} новый массив
 */ 
function map(array, callback) {
    if(!Array.isArray(array)) throw new TypeError("Первый аргумент должен быть массивом");
     if(typeof callback !== "function") throw new TypeError("Второй аргумент должен быть функцией");
     const result = [];
     for(let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
     }
     return result;
} 
// Пример
console.log("=== map ===");
console.log(map([1,2,3], x => x*x)); // [1,4,9]
/**
 * 3.Функция filter
 * Создает новый массив с элементами, удовлетворяющими условию колбэка
 * @param {Array} array 
 * @param {Function} callback
 * @returns {Array} 
 */
function filter(array, callback) { 
    if(!Array.isArray(array)) throw new TypeError("Первый аргумент должен быть массивом");
    if(typeof callback !== "function") throw new TypeError("Второй аргумент должен быть функцией");
    const result = [];
    for(let i = 0; i < array.length; i++) {
    if(callback(array[i], i, array)) result.push(array[i]);
    }
    return result;
}
// Пример 
console.log("=== filter ===");
console.log(filter([1,2,3,4,5], x => x%2===0)); // [2, 4]
/**
 * 4. Функция find 
 * Возвращает первый элемент массива, удовлетворяющий условию
 * @param {Array} array 
 * @param {Function} callback
 * @returns {Array} {*|undefined}
 */
function find(array, callback) {
    if(!Array.isArray(array)) throw new TypeError("Первый аргумент должен быть массивом");
    if(typeof callback !== "function") throw new TypeError("Второй аргумент должен быть функцией");
    const result = [];
    for(let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) return array[i];
    }
    return undefined;
}
// Пример
console.log("=== find ===");
console.log(find([1,2,3,4], x => x%2===0)); // 2
/**
 * 5. Функция some
 * Проверяет, есть ли хотя бы один элемент, удовлетворяющий условию
 * @param {Array} array 
 * @param {Function} callback
 * @returns {Array} {boolean}
*/
function some(array, callback) {
    if(!Array.isArray(array)) throw new TypeError("Первый аргумент должен быть массивом");
    if(typeof callback !== "function") throw new TypeError("Второй аргумент должен быть функцией");
    const result = [];
    for(let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) return true;
    }
    return false;
}
// Пример
console.log("=== some ===");
console.log(some([1,3,5,6], x=>x%2===0)); // true
/**
 * 6. Функция every 
 * Проверяет, удовлетворяют ли все элементы условию
 * @param {Array} array 
 * @param {Function} callback
 * @returns {Array} {boolean} 
 */
function every(array, callback) {
    if(!Array.isArray(array)) throw new TypeError("Первый аргумент должен быть массивом");
    if(typeof callback !== "function") throw new TypeError("Второй аргумент должен быть функцией");
    for(let i = 0; i < array.length; i++) {
        if(!callback(array[i], i, array))
            return false;
    }
    return true;
}
// Пример
console.log("=== every ===");
console.log(every([2,4,6], x=>x%2===0)); // true
/**
 * 7. Функция reduce
 * Последовательно обрабатывает элементы массива, накапливая результат
 * @param {Array} array 
 * @param {Function} callback (accumulator, element, index, array)
 * @returns {*} [initialValue]
 * @returns {*}
 */
function reduce(array, callback, initialValue) {
    if(!Array.isArray(array)) throw new TypeError("Первый аргумент должен быть массивом");
    if(typeof callback !== "function") throw new TypeError("Второй аргумент должен быть функцией"); 
    let accumulator, startIndex;
    if (arguments.length >= 3) {
        accumulator = initialValue;
        startIndex = 0;       
    } else if (array.length > 0) {
        accumulator = array[0];
        startIndex = 1;
    } else {
        return undefined;
    }
    for (let i = startIndex; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array); 
    }
    return accumulator;
} 
// Пример
console.log("=== reduce ===");
console.log(reduce([1,2,3,4], (acc, el)=>acc+el, 0)); // 10