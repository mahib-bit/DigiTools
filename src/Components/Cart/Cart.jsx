import 'react';
import { use } from 'react';

const Cart = ({ productsPromise }) => {
    const products = use(productsPromise);

    return (

        <div className='flex flex-col max-w-[1500px] mx-auto items-center justify-center gap-4 py-12 border border-gray-300 rounded-lg mt-7'>
            <h1 className='text-2xl font-medium'>Your Cart</h1>

            {
                products.map((product) => (
                    <div key={product.id} className='flex items-center gap-4 border border-gray-200 rounded-lg p-4 w-full max-w-[600px]'>
                        <div>
                            <span className='text-4xl'>{product.icon}</span>
                            <div>
                                <h2 className='text-lg font-semibold'>{product.name}</h2>
                                <p className='text-gray-600'>${product.price.toFixed(2)}</p>
                            </div>
                        </div>
                        <p className='text-red-300'>Remove</p>
                    </div>
                ))
            }
            <p className='text-center text-gray-600'>Total: ${products.reduce((sum, product) => sum + product.price, 0).toFixed(2)}</p>
            <button className='btn bg-[#4F39F6] text-white rounded-xl'>Checkout</button>
        </div>
    );
};

export default Cart;