import 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

const ProCard = ({ product, purchasedItems, setPurchasedItems }) => {

    const [isBought, setIsBought] = useState(false);

    const handleBuy = (productData) => {

        if (purchasedItems.length === 4) {
            toast(" Cannot select more than 4 Items! ");
            return;
        }
        setIsBought(true);
        setPurchasedItems([...purchasedItems, productData]);
    }
    return (
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

            <button disabled={isBought} onClick={() => {
                handleBuy(product)
            }}
                className={`btn w-full rounded-xl 
                ${isBought ? "bg-gray-400 text-slate-800 font-bold cursor-not-allowed" : "bg-[#4F39F6]"
                    }`}>
                {
                    isBought === true ? "Added to Cart" : "Buy Now"
                }
            </button>
        </div>
    );
};

export default ProCard;