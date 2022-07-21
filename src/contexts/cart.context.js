import { createContext, useState } from 'react'
import cartService from '../services/cart.services'

const CartContext = createContext()

function CartProviderWrapper(props) {

    const [items, setItems] = useState([])
    const [itemsPrice, setItemsPrice] = useState([])
    const [shippingPrice, setShippingPrice] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    const getItems = () => {
        cartService
            .getItems()
            .then(({ data }) => {
                setItems(data.items)
                setItemsPrice(data.items)
                console.log(data.items.price)
            })
            .catch(err => console.log(err))
    }

    const addItem = (itemId) => {
        cartService
            .addItem(itemId)
            .then(({ data }) => setItems({ ...items, data }))
            .catch(err => console.error(err))
    }

    const removeItem = itemId => {
        cartService
            .removeItem(itemId)
            .then(({ data }) => setItems({ ...items, data }))
            .catch(err => console.error(err))
    }

    return (
        <CartContext.Provider value={{ items, itemsPrice, shippingPrice, totalPrice, getItems, addItem, removeItem }}>
            {props.children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProviderWrapper }