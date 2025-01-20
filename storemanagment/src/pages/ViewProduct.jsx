import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function ViewProduct() {
  const [products, setProducts]=useState([]);

  const getAllProducts= ()=>{
    axios.get("http://localhost:5000/products")
         .then(res=>{
             if(res.status===200)
             {
              setProducts(res.data)
             }
         })
         .catch(error=>alert(error.message))
  }

  useEffect(getAllProducts ,[])
  function deleteProduct(prodctId)
  {
     axios.delete(`http://localhost:5000/products/${prodctId}`)
          .then(res=>{
            if(res.status===200)
            {
             // window.location.reload();
             getAllProducts();
            }
          });
  }
  return (
      <div className='d-flex justify-content-center'>
           <div className='w-75 card mt-3 p-2'>
              <h1 className='text-secondary text-center'>Product List..!</h1>
              <table className='table table-dark '>
                 <thead>
                   <tr>
                     <th>ID</th>
                     <th>Product Name</th>
                     <th>Description</th>
                     <th>Category</th>
                     <th>Price</th>
                     <th>Quantity</th>
                     <th>Supplier</th>
                     <th>Is Available</th>
                     <th>Actions</th>
                   </tr>
                 </thead>
                 <tbody>
                  {
                    products.map((prod,index)=><tr key={index}>
                      <td>{prod.id}</td>
                      <td>{prod.productName}</td>
                      <td>{prod.description}</td>
                      <td>{prod.category}</td>
                      <td>{prod.price}</td>
                      <td>{prod.quantity}</td>
                      <td>{prod.supplier}</td>
                      <td>
                        <input type='checkbox' className='form-check-input'
                                checked={prod.inStock}/>
                      </td>
                      <td>
                        <button className='btn text-danger' onClick={()=>deleteProduct(prod.id)}>
                                      <i className="bi bi-trash-fill"></i>
                        </button>
                        <Link className='btn text-primary' to={'/edit-product/'+prod.id}>
                                       <i class="bi bi-pencil-fill"></i>
                        </Link>
                      </td>

                      
                                            
                      

                    </tr>)
                  }
                 </tbody>
              </table>
           </div>
      </div>
  )
}

export default ViewProduct