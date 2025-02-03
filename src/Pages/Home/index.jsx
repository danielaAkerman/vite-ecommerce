import { useContext } from 'react'
import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductDetail"
import { ShoppingCartContext } from '../../Context'

function Home() {
  const context = useContext(ShoppingCartContext)

  // ARREGLAR ESTO PARA FILTRAR POR CATEGORÍA
  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return (
        context.filteredItems?.map((item) => (<Card key={item.id} data={item} />))
      )
    } else {
      return (
        <div>We don't have anything 😞</div>
      )
    }

  }

  return (
    <Layout >
      <div className='flex items-center justify-center relative w-80'>
        <h2 className='font-medium text-xl mb-6'>Exclusive Products</h2>
      </div>
      <input
        placeholder='Search a product'
        className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none focus:bg-slate-200'
        onChange={(e) => context.setSearchByTitle(e.target.value)} />
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {
          renderView()
        }
      </div>
      <ProductDetail />
    </Layout>
  )
}

export { Home }
