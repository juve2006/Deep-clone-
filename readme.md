# DEEP CLONE OBJECT

Для «простого клонирования» объекта можно использовать Object.assign. 
Необходимо помнить, что Object.assign не делает глубокое клонирование объекта.
Если внутри копируемого объекта есть свойство, 
значение которого не является примитивом, оно будет передано по ссылке. 
Для создания «настоящей копии» (полного клона объекта) можно воспользоваться методом из 
сторонней JavaScript-библиотеки _.cloneDeep(obj). или вот такую функцию замутил