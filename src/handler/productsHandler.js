import ProductsService from "../services/productsService";

const ProductsHandler = {

    getData(){
        return ProductsService.getData();
    },
    addProduct(newProduct) {
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
            "age": newProduct.age,
            "genre": newProduct.genre,
            "image": newProduct.image
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
            "age": editedProduct.age,
            "genre": editedProduct.genre,
            "image": editedProduct.image
        }

        return ProductsService.editProduct(id, editProductForm);
    }
} 


export default ProductsHandler; 