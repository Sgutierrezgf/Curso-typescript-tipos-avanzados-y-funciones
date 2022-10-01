import { Product } from "./product.model"
import { CreateProductDTO, UpdateProductDTO, FindProductDTO } from "./product.dto"
import { faker } from '@faker-js/faker'


export const products: Product[] = []

export const addPRoduct = (data: CreateProductDTO) => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    }
  }
  products.push(newProduct)
  return newProduct
}

export const updateProduct = (id: string, changes: UpdateProductDTO): Product => {
  const index = products.findIndex(item => item.id === id)
  const prevData = products[index]
  products[index] = {
    ...prevData,
    ...changes
  }
  return products[index]
}


export const findPRoducts = (dto: FindProductDTO): Product[] => {
  // code
  // dto.color = 'blue';
  // dto.isNew = true;
  // dto.tags = [];
  // dto.tags?.pop();
  // dto.tags?.push();
  return products
}
