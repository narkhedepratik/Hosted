import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom';

function AddProduct() {
  const {register ,handleSubmit,setValue,reset,formState:{errors}}  =useForm();
  const  {id} =useParams();
  const navigate=useNavigate();
             

  const getEditProduct = ()=>{
     axios.get(`http://localhost:5000/products/${id}`)
          .then(res=>{
               if(res.status===200)
               {
                   for(let prop in res.data)
                   {
                      setValue(prop , res.data[prop])
                   }
               }
          })
  }
  useEffect(()=>{
     if(id!==null || id!==undefined) getEditProduct()
  },[id])

  const onSaveData=function (product) {
       if(id===null || id===undefined)
       {
          product.price=parseInt(product.price)
          axios.post('http://localhost:5000/products' ,product)
               .then(res=>{
                    if(res.status===201)
                    {
                     alert("Product Saved successfully..!")
                     reset();
                    }
               })
               .catch(error=>{
                 alert(error.message)
               })
       }else{
           axios.put(`http://localhost:5000/products/${id}`,product)
               .then(
                    res=>{
                          if(res.status===200)
                          {
                              alert("Product updated successfully..!")
                              reset();
                              navigate('/view-product')
                            
                          }
                    }
               )
               .catch(error=>alert(error.message));
                 }
  }
  return (
    <div className='d-flex justify-content-center'>
       <div className='card w-50 mt-3 p-2 ps-4 pe-4'>
            <h1 className='text-center fs-3'>
             {
                 (id===null || id===undefined)? 'Add Product Here...!':
                                                 'Edit Product Here..!'
             }
            </h1>
         
            <form onSubmit={handleSubmit(onSaveData)}>
                <div>
                    <label className='form-label'>Enter Product Name</label>
                    <input type='text' className='form-control border border-black
                                                   text-center'
                     {...register('productName')}></input>
                </div>
                <div>
                    <label className='form-label'>Enter Product Description</label>
                    <input type='text' className='form-control border border-black
                                                   text-center'
                     {...register('description')}></input>
                </div>
                <div>
                    <label className='form-label'>Enter Product Category</label>
                    <input type='text' className='form-control border border-black
                                                   text-center'
                     {...register('category')}></input>
                </div>
                <div>
                    <label className='form-label'>Enter Product Price</label>
                    <input type='number' className='form-control border border-black
                                                   text-center'
                     {...register('price')}></input>
                </div>
                <div>
                    <label className='form-label'>Enter Product Quantity</label>
                    <input type='text' className='form-control border border-black
                                                   text-center'
                     {...register('quantity')}></input>
                </div>
                <div>
                    <label className='form-label'>Enter Supplier Name</label>
                    <input type='text' className='form-control border border-black
                                                   text-center'
                     {...register('supplier')}></input>
                </div>
                <div className='mt-3'>
                    <label className='form-label me-5'>IS product in stock?</label>
                    <input type='checkbox' className='form-check-input border border-black
                                                   text-center'
                     {...register('inStock')}></input>
                </div>

               <div className='text-center'>
                <button className='btn btn-success'>Submit</button>
                </div>
                
                
                
                


            </form>
       </div>
    </div>
  )
}

export default AddProduct