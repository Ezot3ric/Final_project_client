import { createContext, useState } from 'react'

const CartContext = createContext()

function CartProviderWrapper(props) {

    const [items, setItems] = useState([])

    const getItems = () => {
        cartServices
            .getItems()
            .then(({ data }) => setItems(data.items))
            .catch(err => console.log(err))
    }

    const addItem = (itemId, quantity) => alert('yay')
    const removeItem = itemId => alert('yay')

    return (
        <CartProviderWrapper.Provider value={{ items, getItems, addItem, removeItem }}>
            {props.children}
        </CartProviderWrapper.Provider>
    )
}

export { CartContext, CartProviderWrapper }