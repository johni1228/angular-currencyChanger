var faker = require('faker');

var database = { products: [] };

for (let i = 0; i <= 300; i++) {
    database.products.push({
        id: i,
        name: faker.commerce.productName(),
        description: faker.lorem.sentences(),
        price: faker.commerce.price(),
        imageUrl: "http://source.unsplash.com/1600*900/?product",
        quantity: faker.datatype.number()
    });

    
}
console.log(JSON.stringify(database));