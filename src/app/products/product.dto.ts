import { Product } from "./product.model"


export interface CreateProductDTO extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string
}

export interface UpdateProductDTO extends Partial<CreateProductDTO> {

}

export interface FindProductDTO extends Readonly<Partial<Omit<Product, 'tags'>>> {
  readonly tags: ReadonlyArray<string>;
}

