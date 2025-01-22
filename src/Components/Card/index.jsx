import { useContext } from 'react'
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

const Card = ({ data }) => {
    const context = useContext(ShoppingCartContext)

    const showProduct = () => {
        context.openProductDetail()
        context.setProductToShow(data)
        // context.closeCheckoutSideMenu()
    }

    const addProductsToCart = (event) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, data])
        context.openCheckoutSideMenu()
        context.closeProductDetail()
    }

    const renderIcon = (id) => {

        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0
        if (isInCart) {
            return (
                <div
                    className='absolute top-2 right-2 flex justify-center items-center bg-black w-6 h-6 rounded-full p-1'>
                    <CheckIcon className='size-6 text-white' />
                </div>
            )
        } else {
            return (
                <div
                    onClick={(event) => addProductsToCart(event)}
                    className='absolute top-2 right-2 flex justify-center items-center bg-white w-6 h-6 rounded-full p-1'>
                    <PlusIcon className='size-6' />
                </div>
            )
        }
    }


    return (
        <div
            onClick={() => showProduct()}
            className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-2 left-2 bg-white/60 rounded-lg text-xs px-3 py-0.5'>{data.category.name}</span>
                <img className='w-full h-full object-cover rounded-lg' src={data.images[0]} alt={data.title}></img>
                {renderIcon(data.id)}
            </figure>
            <p className='flex justify-between items-center'>
                <span className='text-sm font-light'>{data.title}</span>
                <span className='text-lg font-medium'>${data.price}</span>
            </p>
        </div>
    )
}

export { Card }