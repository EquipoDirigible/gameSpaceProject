import ProductsService from "../services/productsService";

const ProductsHandler = {

    getData() {
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
    deleteProduct(id) {
        return ProductsService.deleteProduct(id);
    },
    editProduct(id, editedProduct) {
        if (!editedProduct) {
            return;
        }

        let editedProductForm = {

            "title": title,
            "description": description,
            "price": price,
            "difficulty": difficulty,
            "players": players,
            "duration": duration,
            "publihser": publisher,
            "age": age,
            "genre": genre,
            "image": image
        }

        return ProductsService.editProduct(id, editedProductForm);
    }
}


export default ProductsHandler; 