import { use } from "react";
import ProCard from "../ProCard/ProCard";

const Products = ({ productsPromise }) => {
    const products = use(productsPromise);
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-7xl mx-auto px-6">
            {products.map((product) => (
                <ProCard key={product.id} product={product}/>
            ))}
        </div>
    );
};

export default Products;