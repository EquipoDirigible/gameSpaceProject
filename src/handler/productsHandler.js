import ProductsService from "../services/productsService";

const ProductsHandler = {

    getData(){
        return ProductsService.getData();
    },
    newProduct(newProduct) {
            if (!newProduct) {
                return;
            }
    
            let product = {
            "title": newProduct.title, 
            "description": newProduct.description,
            "price": newProduct.price,
            "difficulty": newProduct.difficulty,
            "players": newProduct.players,
            "duration": newProduct.duration,
            "publisher": newProduct.publisher,
            "age": new Date(),
            "genre": newProduct.genre,
            "image": newImage.img
            }
            ProductsService.addProduct(product);
            return newProduct;
    },
    deleteProduct(id){
        return ProductsService.deleteProduct(id);
    },
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