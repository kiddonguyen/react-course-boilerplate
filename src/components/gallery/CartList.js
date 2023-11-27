import React from "react";
import { useGallery } from "../../contexts/gallery-context";

const CartList = () => {
    const { cartItems, removeFromCart } = useGallery();

    return (
        <div className="flex flex-col items-start gap-5 px-5 py-10">
            {cartItems.length > 0 &&
                cartItems.map((cartItem) => {
                    const handleRemoveFromCart = () => {
                        removeFromCart(cartItem.id);
                    };
                    return (
                        <div
                            className="inline-flex items-center justify-between gap-x-5"
                            key={cartItem.id}
                        >
                            <img
                                src={cartItem.url}
                                alt=""
                                className="object-cover w-10 h-10 rounded-full"
                            />
                            <button
                                className="p-3 text-sm font-semibold text-white bg-red-400 rounded-lg"
                                onClick={handleRemoveFromCart}
                            >
                                Delete
                            </button>
                        </div>
                    );
                })}
        </div>
    );
};

export default CartList;
