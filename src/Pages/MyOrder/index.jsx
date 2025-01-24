import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import { Layout } from '../../Components/Layout'
import { OrderCard } from '../../Components/OrderCard'

function MyOrder() {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout >
      <div className='flex items-center justify-center relative w-80 mb-6'>
        <Link to='/my-orders' className='absolute left-0'>
          <ChevronLeftIcon className='size-6 cursor-pointer' />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className='w-80'>
        {
          context.order?.slice(-1)[0].products.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images[0]}
              price={product.price}
            />
          ))}
      </div>
    </Layout>
  )
}

export { MyOrder }