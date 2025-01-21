import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {

    // Product Detail · Increment quantity
    const [count, setCount] = useState(0)
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)

    // Product Detail · Open/Close
    const openProductDetail = () => { setIsProductDetailOpen(true) }
    const closeProductDetail = () => { setIsProductDetailOpen(false) }

    // Product Detail · Show Product
    const [productToShow, setProductToShow] = useState({})

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}