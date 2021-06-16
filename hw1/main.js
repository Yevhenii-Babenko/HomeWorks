//Створіть 3 змінних з наступими значеннями: 15.678, 123.965, 90.2345
const nokiaPrice = 15.678,
    iPhonePrice = 123.965,
    xiaomiPrice = 90.2345;

document.writeln(`${nokiaPrice} ${iPhonePrice} ${xiaomiPrice}`);
//or console
console.log(`${nokiaPrice} ${iPhonePrice} ${xiaomiPrice}`);

//Використовуючи вбудований об'єкт Math – виведіть максимальне число
const maxPrice = Math.max(nokiaPrice, iPhonePrice, xiaomiPrice);
document.writeln(`${maxPrice}`);

//or console
console.log(Math.max(nokiaPrice, iPhonePrice, xiaomiPrice))

//Використовуючи вбудований об'єкт Math – виведіть мінімальне число
const minPrice = Math.min(nokiaPrice, iPhonePrice, xiaomiPrice);
document.writeln(`${minPrice}`);

//or console
console.log(Math.min(nokiaPrice, iPhonePrice, xiaomiPrice));

//Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
let totalAmount = nokiaPrice;
totalAmount += iPhonePrice;
totalAmount += xiaomiPrice;

document.writeln(totalAmount.toFixed(0));

/*Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. Округлення використовувати в МЕНЬШУ сторону.*/

let roundPrice = Math.floor(nokiaPrice);
roundPrice += Math.floor(iPhonePrice);
roundPrice += Math.floor(xiaomiPrice);

//Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)
const roundToHundreds = Math.round((228 * 100) / 100);
console.log(roundToHundreds)

//Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?

function oddOrEven(num) {
    return (num & 1) ? "false" : "true";
}

console.log(oddOrEven(roundPrice));


function isEven(num) {
    if (num % 2 == 0)
        return true;
    else
        return false;
}

console.log(isEven(roundPrice));

//Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
function remainder(x) {
    return x - totalAmount;
}

console.log(remainder(500))

document.writeln(500 - `${totalAmount}`)

//Виведіть середнє значення цін, округлене до другого знаку після коми
const averageAmount = totalAmount / 3;

console.log(averageAmount.toFixed(2))

//(Більш складне) Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random).

const randomDiscount = Math.floor(Math.random() * 10);
//const discountPercent = randomDiscount + "%";

//Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?

const prices = [nokiaPrice, iPhonePrice, xiaomiPrice];  //задаємо масив із змінними ціни за товари

const randomItem = prices[Math.floor(Math.random() * 3)]; // змінну для пошуку рандомної ціни із масиву prices[]

console.log(randomItem * randomDiscount);

const discount = (randomItem * randomDiscount) / 100; // задаємо значення із рандомною знижкою для змінної 

console.log(discount.toFixed(2));

const disCleanPrice = randomItem - discount.toFixed(2);

const itemCost = randomItem / 2;

const netProfit = itemCost - disCleanPrice;

console.log(netProfit);
