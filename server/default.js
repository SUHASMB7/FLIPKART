
import { products } from "./constants/data";
import Product from "./model/product-schema";

const DefaultData = () => {
    try{
        Product.insertMany(products);
        console.log('Data imported Successfully');
    } catch (error) {
        console.log('error while inserting default information', error.message);
    }
}

export default Connection;