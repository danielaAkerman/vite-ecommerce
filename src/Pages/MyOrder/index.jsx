import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { Layout } from '../../Components/Layout'
import { OrderCard } from '../../Components/OrderCard'

function MyOrder() {
  const context = useContext(ShoppingCartContext)
  return (
    <Layout >
      MyOrder
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