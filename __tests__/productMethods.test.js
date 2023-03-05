import ListProducts from '../src/components/ListProducts'

describe.only('getData', () => {
    it('should return the products using the product service', async () => {
    const products = [
        {
            "id": 1,
            "title": "Root",
            "description": "Decide the fate of the forest as woodland factions fight for contrasting goals.",
            "price": "20€",
            "difficulty": "Normal",
            "duration": 60, 
            "players": 4,
            "image": "https://cf.geekdo-images.com/JUAUWaVUzeBgzirhZNmHHw__itemrep/img/sQgkl-_hydBVvQHAMLt2Zk_3dwI=/fit-in/246x300/filters:strip_icc()/pic4254509.jpg"
        }, 
        {
            "id": 2,
            "title": "Iki",
            "description": "Hire artisans, set them up in the market and acquire prestige in feudal Japan.",
            "price": "30€", 
            "difficulty": "Easy",
            "duration": 90, 
            "players": 4,
            "image": "https://cf.geekdo-images.com/ypE6HrTY1Xvpt1XCpKlMBw__itemrep/img/78YkxWh0kuforNDF-2wTJTlKaZY=/fit-in/246x300/filters:strip_icc()/pic5960068.png"
        }, 
        {
            "id": 3,
            "title": "Sail",
            "description": "Navigate your pirate ship together through turbulent waters and avoid the Kraken!",
            "price": "15€", 
            "difficulty": "Easy",
            "duration": 20, 
            "players": 2,
            "image": "https://cf.geekdo-images.com/WdYRHQ_ILHTV_ECMGF27Gw__itemrep/img/1c7zshiWMvra-pEdBUnD0Lf0BPE=/fit-in/246x300/filters:strip_icc()/pic7267575.jpg"
        },
        {
            "id": 4,
            "title": "Dune Imperium",
            "description": "Influence, intrigue, and combat in the universe of Dune.",
            "price": "40€", 
            "difficulty": "Normal",
            "duration": 120, 
            "players": 4,
            "image": "https://cf.geekdo-images.com/PhjygpWSo-0labGrPBMyyg__itemrep/img/3_xJ0tO5L62bUp2oRfjeVS0DHX0=/fit-in/246x300/filters:strip_icc()/pic5666597.jpg"
        }
    ]
    const result = await axios.get(URL);
    expect(result).toEqual(products);
    //expect(productService.getProducts).toHaveBeenCalled();
    });
    });

    describe('handleDelete', () => {
        it('should delete the product using the product service', async () => {
            const id = 1;
            await axios.delete(`http://localhost:3000/products/${id}`);
            expect(product).toHaveBeenCalledWith(id);
        });
    });


