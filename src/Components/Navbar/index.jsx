import { NavLink } from "react-router-dom"
import { useContext } from 'react'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

const Navbar = () => {
    const context = useContext(ShoppingCartContext)

    const activeStyle = 'underline underline-offset-4'

    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'
                        onClick={() => context.setSearchByCategory()}
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes'
                        onClick={() => { context.setSearchByCategory('clothes') }}
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics'
                        onClick={() => context.setSearchByCategory('electronics')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/office'
                        onClick={() => context.setSearchByCategory('office')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Office
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/jewelry'
                        onClick={() => context.setSearchByCategory('jewelry')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Jewelry
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/bags'
                        onClick={() => context.setSearchByCategory('bags')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Bags
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/shoes'
                        onClick={() => context.setSearchByCategory('shoes')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Shoes
                    </NavLink>
                </li>
            </ul>

            {/* DEL OTRO LADO */}

            <ul className="flex items-center gap-3">
                <li className='text-black/60'>
                    daniela@dev

                </li>
                <li>
                    <NavLink to='/my-orders'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Sign In
                    </NavLink>
                </li>
                <li className="flex items-center">
                    <ShoppingBagIcon className='size-6' /> {context.cartProducts.length}
                </li>

            </ul>
        </nav>
    )
}

export { Navbar }
