import 'react';

const Cart = ({ purchasedItems, removeFromCart }) => {

    return (

        <div className='flex flex-col max-w-[1500px] mx-auto items-center justify-center gap-4 py-12 mt-7 px-6'>
            <h1 className='text-2xl font-medium'>Your Cart</h1>

            {
                purchasedItems.map((product) => (
                    <div key={product.id} className='flex items-center gap-4 border border-gray-200 rounded-lg p-6 w-full justify-between '>
                        <div>
                            <span className='text-4xl'>{product.icon}</span>
                            <div>
                                <h2 className='text-lg font-semibold'>{product.name}</h2>
                                <p className='text-gray-600'>${product.price.toFixed(2)}</p>
                            </div>
                        </div>
                        <p className='text-red-300 cursor-pointer' onClick={() => removeFromCart(product.id)}>Remove</p>
                    </div>
                ))
            }
            <div className='flex items-center justify-between w-full max-w-[600px]'>
                <p >Total: </p>
                <p className=''>
                    ${purchasedItems.reduce((sum, product) => sum + product.price, 0).toFixed(2)}
                </p>
            </div>

            <button className='btn w-full rounded-xl bg-[#4F39F6] text-white '>Checkout</button>
        </div>
    );
};

export default Cart;