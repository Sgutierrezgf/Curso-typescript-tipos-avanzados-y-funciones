import { addPRoduct, findPRoducts, products, updateProduct, updatePRoduct } from "./products/product.service";
import { faker } from '@faker-js/faker'


for (let index = 0; index < 50; index++) {
  addPRoduct({
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(),
    size: faker.helpers.arrayElements(['S', 'M', 'L', 'XL']),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    categoryId: faker.datatype.uuid(),
  })
}

console.log('products', products)

const product = products[0]
updateProduct(product.id, {
  title: 'New title',
  stock: 80
})

findPRoducts({
  stock: 10,
  color: 'red',
  createdAt: new Date(),
  isNew: true,
  tags: ['as', 'as']
})


