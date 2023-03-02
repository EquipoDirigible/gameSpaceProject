import ProductsService from "../services/productsService";

const ProductsHandler = {
    editProduct(id, editedProduct) {
        if (!editedProduct) {
            return; 
        } 
        
        let editProductForm = {
            "title": editedProduct.title, 
            "description": editedProduct.description,
            "price": editedProduct.price,
            "difficulty": editedProduct.difficulty,
            "players": editedProduct.players,
            "duration": editedProduct.duration,
            "publisher": editedProduct.publisher,
            "age": new Date(),
            "genre": editedProduct.genre,
            "image": editedImage.img
        }

        return ProductsService.editProduct(id, editedProductForm);
    }
} 


export default ProductsHandler; 