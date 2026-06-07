import { use } from "react";

const Products = ({ productsPromise }) => {
    const products = use(productsPromise);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-7xl mx-auto px-6">
            {products.map((product) => (
                <div key={product.id} 
                className="border rounded-2xl p-6 border-[#05021d]">
                    <div className="mb-4 flex justify-between items-center">
                        <span className="text-4xl">{product.icon}</span>
                        <span className={`px-3 py-1 rounded-full text-sm 
                            ${product.tagType === 'popular' ? 'bg-yellow-100 text-yellow-500' : 
                            product.tagType === 'new' ? 'bg-purple-100 text-purple-500' : 'bg-green-100 text-green-500'}`}>
                            {product.tag}
                        </span>
                    </div>

                    <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>

                    <p className="max-w-[290px] text-gray-500 mb-4">{product.description}</p>

                    <h3 className="text-3xl font-bold mb-4">
                        ${product.price}
                        <span className="text-base font-normal text-gray-500">
                            /{product.period}
                        </span>
                    </h3>

                    <ul className="space-y-2 mb-6">
                        {product.features.map((feature, index) => (
                            <li key={index}><span className="font-bold text-green-500 mr-2">✓</span> {feature}</li>
                        ))}
                    </ul>

                    <button className="btn w-full rounded-xl bg-[#4F39F6] text-white">
                        Buy Now
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Products;