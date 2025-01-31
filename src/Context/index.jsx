import { createContext, useState, useEffect } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {

    // Product Detail · Increment quantity
    const [count, setCount] = useState(0)

    // Product Detail · Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => { setIsProductDetailOpen(true) }
    const closeProductDetail = () => { setIsProductDetailOpen(false) }

    // Checkout Side Menu · Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => { setIsCheckoutSideMenuOpen(true) }
    const closeCheckoutSideMenu = () => { setIsCheckoutSideMenuOpen(false) }

    // Product Detail · Show Product
    const [productToShow, setProductToShow] = useState({})


    // Shopping Cart · Add products to cart
    const [cartProducts, setCartProducts] = useState([])

    // Shopping Cart · Order
    const [order, setOrder] = useState([])

    // Get products by title
    const [searchByTitle, setSearchByTitle] = useState(null)

    // Get products
    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    useEffect(() => {
        if (searchByTitle) {
            setFilteredItems(filteredItemsByTitle(items, searchByTitle))
        }
    }, [items, searchByTitle])

    return (
        <ShoppingCartContext.Provider value={{
            count, setCount,
            isProductDetailOpen, openProductDetail, closeProductDetail,
            isCheckoutSideMenuOpen, openCheckoutSideMenu, closeCheckoutSideMenu,
            productToShow, setProductToShow,
            cartProducts, setCartProducts,
            order, setOrder,
            searchByTitle, setSearchByTitle,
            items, setItems,
            filteredItems, setFilteredItems,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}