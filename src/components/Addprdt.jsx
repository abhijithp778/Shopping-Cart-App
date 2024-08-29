import React from 'react'
import Navbar from './Navbar'

const Addprdt = () => {
  return (
    <div>
      <Navbar/>
      <br />
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Product Name</label>
                        <input type="text" className="form-control" placeholder='enter product name'/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <label htmlFor="" className="form-label">Image</label>
                        <input type="file" name="" id="" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Description</label>
                        <textarea name="" id="" className="form-control" placeholder='enter description'></textarea>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Product Price</label>
                        <input type="text" className="form-control" placeholder='enter price' />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Rating</label>
                        <input type="text" className="form-control" placeholder='enter rating' />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <label htmlFor="" className="form-label">Brand</label>
                      <input type="text" className="form-control" placeholder='enter brand'/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <label htmlFor="" className="form-label">manufacturing date</label>
                     <input type="date" name="" id="" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <label htmlFor="" className="form-label">Expiry date</label>
                      <input type="date" name="" id="" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <label htmlFor="" className="form-label">Dealer Name</label>
                      <input type="text" className="form-control" placeholder='enter dealer name' />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                      <button className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Addprdt
