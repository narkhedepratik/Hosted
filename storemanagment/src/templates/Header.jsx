import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
   <nav className='bg-primary p-2 d-flex justify-content-between'>
      <h1 className='text-white ms-3 ' style={{fontSize:'50px'}}><i className="bi bi-shop-window"></i></h1>

      <div className='mt-3'>
         <Link className='btn btn-light me-5' to={'/add-product'}>Add Product</Link>
         <Link className='btn btn-light' to={'/view-product'}>View Product</Link>
      </div>
   </nav>
  )
}

export default Header