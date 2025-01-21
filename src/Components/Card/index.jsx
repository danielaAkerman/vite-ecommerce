import { useContext } from 'react'
import { PlusIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

const Card = ({ data }) => {
    const context = useContext(ShoppingCartContext)

    const showProduct = () =>{
        context.openProductDetail()
        context.setProductToShow(data)
    }

    return (
        <div
            onClick={() => showProduct()}
            className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-2 left-2 bg-white/60 rounded-lg text-xs px-3 py-0.5'>{data.category.name}</span>
                <img className='w-full h-full object-cover rounded-lg'
                    src={data.images[0]} alt={data.title}></img>
                <div
                    onClick={() => context.setCount(context.count + 1)}
                    className='absolute top-2 right-2 flex justify-center items-center bg-white w-6 h-6 rounded-full p-1'>
                    <PlusIcon className='size-6' />
                </div>
            </figure>
            <p className='flex justify-between items-center'>
                <span className='text-sm font-light'>{data.title}</span>
                <span className='text-lg font-medium'>${data.price}</span>
            </p>
        </div>
    )
}

export { Card }