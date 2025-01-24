import { XMarkIcon } from '@heroicons/react/24/solid'

const OrdersCard = props => {

    const { totalPrice, totalProducts } = props

    return (
        <div className="flex justify-between items-center mb-4 border border-black">
            <p>
                <span>24.01.25</span>
                <span>{totalProducts}</span>
                <span>{totalPrice}</span>
            </p>
        </div>
    )
}

export { OrdersCard }