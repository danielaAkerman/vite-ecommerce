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

    // Get products by category
    const [searchByCategory, setSearchByCategory] = useState(null)

    // Get products
    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)

    useEffect(() => {
        // fetch('https://api.escuelajs.co/api/v1/products')
        fetch('http://localhost:5173/data1.json')
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.toLowerCase() === searchByCategory.toLowerCase())
    }

    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if (searchType === 'BY_TITLE_AND_CATEGORY') { return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase())) }
        if (searchType === 'BY_TITLE') { return filteredItemsByTitle(items, searchByTitle) }
        if (searchType === 'BY_CATEGORY') { return filteredItemsByCategory(items, searchByCategory) }
        if (!searchType) { return items }
    }

    useEffect(() => {
        if (searchByTitle && searchByCategory) { setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory)) }
        if (searchByTitle && !searchByCategory) { setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory)) }
        if (!searchByTitle && searchByCategory) { setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory)) }
        if (!searchByTitle && !searchByCategory) { setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory)) }
    }, [items, searchByTitle, searchByCategory])

    return (
        <ShoppingCartContext.Provider value={{
            count, setCount,
            isProductDetailOpen, openProductDetail, closeProductDetail,
            isCheckoutSideMenuOpen, openCheckoutSideMenu, closeCheckoutSideMenu,
            productToShow, setProductToShow,
            cartProducts, setCartProducts,
            order, setOrder,
            searchByTitle, setSearchByTitle,
            searchByCategory, setSearchByCategory,
            items, setItems,
            filteredItems, setFilteredItems,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}