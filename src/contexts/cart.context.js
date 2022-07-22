import { createContext, useState, useEffect } from 'react'
import cartService from '../services/cart.services'

const CartContext = createContext()

function CartProviderWrapper(props) {

    const [items, setItems] = useState([])
    const [itemsPrice, setItemsPrice] = useState([])
    const [shippingPrice, setShippingPrice] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        getItems()
    }, [])

    useEffect(() => {
        setItemsPrice(items.reduce((acc, curr) => acc + curr.product.price, 0))
        setShippingPrice(itemsPrice > 200 ? 0 : 5)
        setTotalPrice(itemsPrice + shippingPrice)
    }, [items])

    const getItems = () => {
        cartService
            .getItems()
            .then(({ data }) => {
                setItems(data.items)

            })
            .catch(err => console.log(err))
    }

    const addItem = (itemId) => {

        cartService
            .addItem(itemId)
            .then(({ data }) => setItems(data.items))
            .catch(err => console.error(err))
    }

    const removeItem = itemId => {
        cartService
            .removeItem(itemId)
            .then(({ data }) => setItems(data.items))
            .catch(err => console.error(err))
    }

    return (
        <CartContext.Provider value={{ items, shippingPrice, totalPrice, getItems, addItem, removeItem, itemsPrice }}>
            {props.children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProviderWrapper }