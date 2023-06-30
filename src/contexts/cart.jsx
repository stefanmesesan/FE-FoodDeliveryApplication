import { createContext, useState, useMemo } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(
        JSON.parse(localStorage.getItem("cartItems") || "[]")
    );

    const updateCartItems = (cartItems) => {
        setCartItems(cartItems);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    };

    const addToCart = (menuItem) => {
        const isExisting = cartItems.some((cartItem) => {
            if (cartItem.menuItem.id === menuItem.id) {
                return true
            } else {
                return false
            }
        })

        if (isExisting) {
            increaseQuantity(menuItem.id)
            return
        }

        const cartItem = { quantity: 1, menuItem };
        const newCartItems = [...cartItems, cartItem];
        updateCartItems(newCartItems);
    };

    const increaseQuantity = (menuItemId) => {
        const newCartItems = cartItems.map((cartItem) => {
            if (cartItem.menuItem.id === menuItemId) {
                return {
                    ...cartItem,
                    quantity: cartItem.quantity + 1,
                };
            } else {
                return cartItem;
            }
        });

        updateCartItems(newCartItems);
    };

    const decreaseQuantity = (menuItemId) => {
        const newCartItems = cartItems.map((cartItem) => {
            if (cartItem.menuItem.id === menuItemId) {
                return {
                    ...cartItem,
                    quantity: Math.max(1, cartItem.quantity - 1),
                };
            } else {
                return cartItem;
            }
        });

        updateCartItems(newCartItems);
    };

    const deleteFromCart = (menuItemId) => {
        const newCartItems = cartItems.filter((cartItem) => {
            if (cartItem.menuItem.id == menuItemId) {
                return false;
            } else {
                return true;
            }
        });

        updateCartItems(newCartItems);
    };

    const clearCart = () => {
        updateCartItems([])
    }

    const totalPrice = useMemo(() => {
        let sum = 0;

        cartItems.forEach((cartItem) => {
            sum = sum + cartItem.quantity * cartItem.menuItem.price;
        });

        return sum;
    }, [cartItems]);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                increaseQuantity,
                decreaseQuantity,
                deleteFromCart,
                clearCart,
                totalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
