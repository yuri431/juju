import { useState } from "react"
import axios from "axios"


const Addproduct=()=>{
  const [name,SetName]=useState('')
    const [brand,SetBrand]=useState('')
    const [specifications,SetSpecifications]=useState('')
    const [price,setPrice]=useState('')
    const [model,setModel]=useState('')
    const [warranty_period,setWarrantyperiod]=useState('')
    const [stock_quantity,setStockquantity]=useState('')
  
    const [electronic_photo,setElectronicphoto]=useState('')
    // 3 states of posting data 
    const [loading,setLoading]=useState('')
    const [success,setSuccess]=useState('')
    const [error,setError]=useState('')

    const submit=async(e)=>{
        e.preventDefault()
        setLoading('please wait...')
        try {
            const data= new FormData()
            data.append("name",name)
            data.append("brand",brand)
            data.append("price",price)
            data.append("model",model)
            data.append("specifications",specifications)
            data.append("stock_quantity",stock_quantity)
            data.append("warranty_period",warranty_period)
            data.append("electronic_photo",electronic_photo)
           
            const response=await axios.post("https://teekay.pythonanywhere.com/api/add_product",data)
            setSuccess("product added successfully")
            setLoading("")
            setError("")

        } catch (error) {
            setLoading("")
            setError("Something went wrong!")
        }

    }
    return(
<div className="container-fluid">

    
      <div className="row container mt-5 justify-content-center d-flex">
        
    
        
          {/* <!-- Card 1: Shop Product Form --> */}
            <div className="card col-md-8 ">
            <div className="text-center  ">
         <h6 className="text-warning text-sm"> {loading} </h6>
                  <h6 className="text-success">{success}</h6>
              {/* bind error in h2  */}
                 <h6 className="text-danger">{error}</h6></div>
              <div className="card-body">
                <h5 className="card-title text-center">Add  Product</h5>
                <form onSubmit={submit}>
              
   
                  <div class="mb-3">
                    <label for="" class="form-label">Name of product</label>
                    <input type="text" class="form-control" id="" placeholder="Enter product name" required onChange={(e)=>SetName(e.target.value)} />
                    {/* {name} */}
                  </div>
                  
                 
                    <label for="" class="form-label">Product Name</label>
                    <input type="text" class="form-control" id="" placeholder="Enter brand name" onChange={(e)=>SetBrand(e.target.value)} />
                    {/* {product_name} */}
                
                    <label for="productCost" class="form-label">Product price</label>
                    <input type="number" class="form-control" id="" placeholder="Enter product price" onChange={(e)=>setPrice(e.target.value)} />
                    {/* {product_cost} */}

                    <label for="productModel" class="form-label">Product model</label>
                    <input type="text" class="form-control" id="" placeholder="Enter  model" onChange={(e)=>setModel(e.target.value)} />
                    {/* {product_cost} */}

                    <label for="warranty period" class="form-label">warranty_period </label>
                    <input type="number" class="form-control" id="" placeholder="Enter warranty period " onChange={(e)=>setWarrantyperiod(e.target.value)} />
                    {/* {product_cost} */}
                  
                    <label for="" class="form-label">specifications </label>
                    <textarea class="form-control" id="" rows="" placeholder="Enter product specifications" onChange={(e)=>SetSpecifications(e.target.value)} ></textarea>
                    {/* {product_description} */}
                 
                    <label for="" class="form-label">Stock Quantity</label>
                    < input type="number" class="form-control" id="" placeholder="Enter available stock quantity" onChange={(e)=>setStockquantity(e.target.value)} />
                    {/* {stock_quantity} */}
                  
                    <label for="" class="form-label">Electronic Photo</label>
                    <input type="file" className="form-control" accept="image/*" onChange={(e)=>setElectronicphoto(e.target.files[0])} />  <br />
                  <button type="submit" class="btn btn-primary w-100">Add product </button>
                </form>
              </div>
            </div>
          
       
        </div>
      </div>
    
      
      
      
      
      
    
    )
}
export default Addproduct