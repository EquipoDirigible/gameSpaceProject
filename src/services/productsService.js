import axios from 'axios'; 

const URL = axios.create({
    baseURL: 'http://localhost:3000/products',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})

const ProductsService = {
    async editProduct(id, editedProduct){
        await apiClient.patch("/products/" + id, editedProduct)
    }
}

export default ProductsService