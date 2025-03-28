import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { Layout } from "../../Components/Layout"
import { OrdersCard } from "../../Components/OrdersCard"

function MyOrders() {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout >
      <div className='flex items-center justify-center relative w-80'>
        <h2 className='font-medium text-xl mb-6'>My Orders</h2>
      </div>
      {context.order.map((order, index) => (

        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts} />
        </Link>
      ))
      }
    </Layout>
  )
}

export { MyOrders }
