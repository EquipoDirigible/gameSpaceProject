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

    async deleteProduct(id){
        await URL.delete("/products/" + id)
    },
    async editProduct(id, editedProduct){
        await URL.patch("/products/" + id, editedProduct)
    }
}

export default ProductsService