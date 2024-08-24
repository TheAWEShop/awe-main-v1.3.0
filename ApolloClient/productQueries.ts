import { gql, useMutation } from '@apollo/client';

export const CREATE_PRODUCT = gql`
    mutation CreateProduct($input: CreateProductInput!) {
    createProduct(input: $input) {
        id
        name
        description
        price
        imageUrl
        stockQuantity
        category {
        id
        name
        }
        variants {
        id
        sku
        size
        color
        }
    }
}
`;
