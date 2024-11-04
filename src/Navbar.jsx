import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { ImMenu3 } from "react-icons/im";
import { CartContext, WishListContext } from './Root';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const handleMenu = () => {
        setOpen(!open)
    }


    const { cartItem, setCartItem } = useContext(CartContext)
    const {wishItem, setWishItem} = useContext(WishListContext)


    return (
        <div className="navbar flex justify-between py-8  w-[90%] mx-auto gap-4">
            <div className="flex">
                <p className=" text-xl font-bold text-white">Gadget Heaven</p>
            </div>
            <div className={`lg:flex flex-col lg:flex-row items-center absolute lg:static gap-3 lg:gap-12  ${open ? 'top-20 left-28' : 'hidden'}`}>
                <NavLink to={"/"}><p className=' lg:text-white font-bold text-base'>Home</p></NavLink>
                <NavLink to={"/statistics"}><p className=' lg:text-white font-bold text-base'>Statistics</p></NavLink>
                <NavLink to={"/dashboard"}><p className=' lg:text-white font-bold text-base'>Dashboard</p></NavLink>
            </div>
            <div className='text-2xl lg:hidden' onClick={() => handleMenu()}>
                <ImMenu3 />
            </div>
            <div className="flex items-center gap-2">
                {/* cart */}
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle bg-white">
                        <div className="indicator">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            {/* <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 21c-.707 0-1.414-.293-1.957-.836l-.276-.276c-3.191-3.191-5.08-5.08-7.009-7.283C1.293 10.17 1 8.39 1 7a5 5 0 015-5c1.654 0 3.204.896 4.223 2.354C10.797 2.896 12.347 2 14 2a5 5 0 015 5c0 1.39-.293 3.17-2.758 5.604-1.928 2.203-3.818 4.092-7.009 7.283l-.276.276c-.543.543-1.25.836-1.957.836z" />
                            </svg> */}

                            <span className="badge badge-sm indicator-item">{cartItem.length}</span>
                        </div>
                    </div>
                    <div
                        tabIndex={0}
                        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                        <div className="card-body">
                            <span className="text-lg font-bold">{cartItem.length} Items</span>
                            <span className="text-info">Subtotal: ${cartItem.reduce((accumulator, item) => accumulator + item.price, 0)}</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                    </div>
                </div>  
                {/*wishList  */}
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle bg-white">
                        <div className="indicator">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 21c-.707 0-1.414-.293-1.957-.836l-.276-.276c-3.191-3.191-5.08-5.08-7.009-7.283C1.293 10.17 1 8.39 1 7a5 5 0 015-5c1.654 0 3.204.896 4.223 2.354C10.797 2.896 12.347 2 14 2a5 5 0 015 5c0 1.39-.293 3.17-2.758 5.604-1.928 2.203-3.818 4.092-7.009 7.283l-.276.276c-.543.543-1.25.836-1.957.836z" />
                            </svg>

                            <span className="badge badge-sm indicator-item">{wishItem.length}</span>
                        </div>
                    </div>
                    {/* <div
                        tabIndex={0}
                        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                        <div className="card-body">
                            <span className="text-lg font-bold">{wishItem.length} Items</span>
                            <span className="text-info">Subtotal: ${wishItem.reduce((accumulator, item) => accumulator + item.price, 0)}</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View Wish List</button>
                            </div>
                        </div>
                    </div> */}
                </div>                
            </div>
        </div>
    );
};

export default Navbar;