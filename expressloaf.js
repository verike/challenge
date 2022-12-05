const prompt = require('prompt-sync') ();

class BreadMenu
{
    constructor(products, price, unit)
    {
        this.products = products;
        this.price = price;
        this.unit = unit;
    }
}
// Start

let bread_1 = new BreadMenu ('coconut', 400, 1);
let bread_2 = new BreadMenu ('sardine', 450, 1);
let bread_3 = new BreadMenu ('spanish', 500, 1);
let bread_4 = new BreadMenu ('wheat', 600, 1);
let bread_5 = new BreadMenu ('agege', 550, 1);
let bread_6 = new BreadMenu ('cranberry', 450, 1);

const cart = [];

// Onboard the user and request for name
const customerName = prompt('Welcome to ExpressLoaf, Kindly enter your name below : ');
console.log('\n\n');

// Mention user name and show bread menu 
const onboardMessage = `Hi ${customerName}, Once again You are welcome to ExpressLoaf bakery \n
Kindly go through the menu for your preferred flavour`;
console.log(onboardMessage);

// Item selection for customer
console.log(`Bread Menu\n 
${bread_1.products},
${bread_2.products},
${bread_3.products},
${bread_4.products},
${bread_5.products},
${bread_6.products}. \n`);

const pickProduct = prompt('Kindly select your preferred flavour: ');

if (pickProduct.length > 0)
{
    checkProduct(pickProduct);
}

// Validate customers choice
function checkProduct(picked)
{
    // Selection and adding to cart (Switch statement)
    switch (picked)
    {
        case 'coconut' || 'Coconut':
            Coconut()
            break;
        case 'sardine' || 'Sardine':
            Sardine()
            break;
        case 'spanish' || 'Spanish':
            Spanish()
            break;
        case 'wheat' || 'Wheat':
            Wheat()
            break;
        case 'agege' || 'Agege':
            Agege()
            break;
        case 'cranberry' || 'Cranberry':
            Cranberry()
            break;
        default:
            console.log('The Item is Currently Unavailable!');
            break;
    }
}


// Call checkout function


// Select payment method
function paymentMethod()
{
    const getTotalPrice = (items) => items.map((item) => item.sumTotalPurchased).reduce((acc, value) => acc + value, 0)
    
    const totalPayment = getTotalPrice(cart);
    console.log(`Total price for purchased items is ${totalPayment}`);

    const confirmCheckout = prompt('Kindly confirm payment invoice. y/n : ');

    if (confirmCheckout == 'Y' || confirmCheckout == 'y')
    {
        console.log(`Payment of ${totalPayment} successful. Thank you for trading with ExpressLoaf Bakery.`)
    }
    else
    {
        console.log('Payment Unable to be processed.')
    }


}


// Product shelf 
function Coconut()
{
    var itemUnit =parseInt(prompt('How many would you like to have? '));
    var totalItemPrice = itemUnit * bread_1.price;
    console.log(`Total for ${itemUnit} ${bread_1.products} is ${totalItemPrice}`);
    var addToCart = prompt('Would you like to add to cart? y/n: ');

    if (addToCart == 'y' || addToCart == 'Y')
    {
        cart.push(
            {
                item: bread_1.products,
                unitPrice: bread_1.price,
                unit: bread_1.unit,
                sumTotalPurchased: totalItemPrice
            }
        )
        console.log(`Added ${bread_1.products} to Cart.`);
        console.log(cart);
        var stillPurchasing = prompt('Would you like to purchase more? y/n: ')
        if (stillPurchasing == 'y' || stillPurchasing == 'Y')
        {
            const pickProduct = prompt('Kindly select your preferred flavour: ');
            if (pickProduct.length > 0)
            {
                checkProduct(pickProduct);
            }
            checkProduct();
        }
        else
        {
            paymentMethod();
        }
    }
    else
    {
        console.log('Thank you for checking our bakery.');
    }
    
}
function Sardine()
{
    var itemUnit = prompt('How many would you like to have? ');
    var convertUnitToInt = parseInt(itemUnit);
    var totalItemPrice = convertUnitToInt * bread_2.price;
    console.log(`Total for ${convertUnitToInt} ${bread_2.products} is ${totalItemPrice}`);
    var addToCart = prompt('Would you like to add to cart? y/n: ');

    if (addToCart == 'y' || addToCart == 'Y')
    {
        cart.push(
            {
                item: bread_2.products,
                unitPrice: bread_2.price,
                unit: bread_2.unit,
                sumTotalPurchased: totalItemPrice
            }
        )
        console.log(`Added ${bread_2.products} to Cart.`);
        console.log(cart);
        var stillPurchasing = prompt('Would you like to purchase more? y/n: ')
        if (stillPurchasing == 'y' || stillPurchasing == 'Y')
        {
            const pickProduct = prompt('Kindly select your preferred flavour: ');
            if (pickProduct.length > 0)
            {
                checkProduct(pickProduct);
            }
            checkProduct();
        }
        else
        {
            paymentMethod();
        }
    }
    else
    {
        console.log('Thank you for checking our bakery.');
    }

}
function Spanish()
{
    var itemUnit = prompt('How many would you like to have? ');
    var convertUnitToInt = parseInt(itemUnit);
    var totalItemPrice = convertUnitToInt * bread_3.price;
    console.log(`Total for ${convertUnitToInt} ${bread_3.products} is ${totalItemPrice}`);
    var addToCart = prompt('Would you like to add to cart? y/n: ');

    if (addToCart == 'y' || addToCart == 'Y')
    {
        cart.push(
            {
                item: bread_3.products,
                unitPrice: bread_3.price,
                unit: bread_3.unit,
                sumTotalPurchased: totalItemPrice
            }
        )
        console.log(`Added ${bread_3.products} to Cart.`);
        console.log(cart);
        var stillPurchasing = prompt('Would you like to purchase more? y/n: ')
        if (stillPurchasing == 'y' || stillPurchasing == 'Y')
        {
            const pickProduct = prompt('Kindly select your preferred flavour: ');
            if (pickProduct.length > 0)
            {
                checkProduct(pickProduct);
            }
            checkProduct();
        }
        else
        {
            paymentMethod();
        }
    }
    else
    {
        console.log('Thank you for checking our bakery.');
    }
    
}
function Wheat()
{
    var itemUnit = prompt('How many would you like to have? ');
    var convertUnitToInt = parseInt(itemUnit);
    var totalItemPrice = convertUnitToInt * bread_4.price;
    console.log(`Total for ${convertUnitToInt} ${bread_4.products} is ${totalItemPrice}`);
    var addToCart = prompt('Would you like to add to cart? y/n: ');

    if (addToCart == 'y' || addToCart == 'Y')
    {
        cart.push(
            {
                item: bread_4.products,
                unitPrice: bread_4.price,
                unit: bread_4.unit,
                sumTotalPurchased: totalItemPrice
            }
        )
        console.log(`Added ${bread_4.products} to Cart.`);
        console.log(cart);
        var stillPurchasing = prompt('Would you like to purchase more? y/n: ')
        if (stillPurchasing == 'y' || stillPurchasing == 'Y')
        {
            const pickProduct = prompt('Kindly select your preferred flavour: ');
            if (pickProduct.length > 0)
            {
                checkProduct(pickProduct);
            }
            checkProduct();
        }
        else
        {
            paymentMethod();
        }
    }
    else
    {
        console.log('Thank you for checking our bakery.');
    }

}
function Agege()
{
    var itemUnit = prompt('How many would you like to have? ');
    var convertUnitToInt = parseInt(itemUnit);
    var totalItemPrice = convertUnitToInt * bread_5.price;
    console.log(`Total for ${convertUnitToInt} ${bread_5.products} is ${totalItemPrice}`);
    var addToCart = prompt('Would you like to add to cart? y/n: ');

    if (addToCart == 'y' || addToCart == 'Y')
    {
        cart.push(
            {
                item: bread_5.products,
                unitPrice: bread_5.price,
                unit: bread_5.unit,
                sumTotalPurchased: totalItemPrice
            }
        )
        console.log(`Added ${bread_5.products} to Cart.`);
        console.log(cart);
        var stillPurchasing = prompt('Would you like to purchase more? y/n: ')
        if (stillPurchasing == 'y' || stillPurchasing == 'Y')
        {
            const pickProduct = prompt('Kindly select your preferred flavour: ');
            if (pickProduct.length > 0)
            {
                checkProduct(pickProduct);
            }
            checkProduct();
        }
        else
        {
            paymentMethod();
        }
    }
    else
    {
        console.log('Thank you for checking our bakery.');
    }
    
}
function Cranberry()
{
    var itemUnit = prompt('How many would you like to have? ');
    var convertUnitToInt = parseInt(itemUnit);
    var totalItemPrice = convertUnitToInt * bread_6.price;
    console.log(`Total for ${convertUnitToInt} ${bread_6.products} is ${totalItemPrice}`);
    var addToCart = prompt('Would you like to add to cart? y/n: ');

    if (addToCart == 'y' || addToCart == 'Y')
    {
        cart.push(
            {
                item: bread_6.products,
                unitPrice: bread_6.price,
                unit: bread_6.unit,
                sumTotalPurchased: totalItemPrice
            }
        )
        console.log(`Added ${bread_6.products} to Cart.`);
        console.log(cart);
        var stillPurchasing = prompt('Would you like to purchase more? y/n: ')
        if (stillPurchasing == 'y' || stillPurchasing == 'Y')
        {
            const pickProduct = prompt('Kindly select your preferred flavour: ');
            if (pickProduct.length > 0)
            {
                checkProduct(pickProduct);
            }
            checkProduct();
        }
        else
        {
            paymentMethod();
        }
    }
    else
    {
        console.log('Thank you for checking our bakery.');
    }

}

