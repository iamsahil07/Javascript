// reduce :

const num = [1, 2, 3];

const myTotal = num.reduce((acc, currNum) => {
    console.log(`For acc : ${acc} currNum : ${currNum}`);
    return acc + currNum}, 0);
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, itemValue) => acc + itemValue.price,0)
console.log(priceToPay);
