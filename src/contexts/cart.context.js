import { createContext, useState } from 'react'
import cartService from '../services/cart.services'

const CartContext = createContext()

function CartProviderWrapper(props) {

    const [items, setItems] = useState([])

    const getItems = () => {
        cartService
            .getItems()
            .then(({ data }) => setItems(data.items))
            .catch(err => console.log(err))
    }

    const addItem = (itemId) => {

        cartService
            .addItem(itemId)
            .then(({ data }) => setItems({ ...items, data }))
            .catch(err => console.error(err))
    }

    const removeItem = itemId => alert('yay')

    return (
        <CartContext.Provider value={{ items, getItems, addItem, removeItem }}>
            {props.children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProviderWrapper }