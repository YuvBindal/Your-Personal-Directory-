import React from 'react'
import { Link } from 'react-router-dom'

export const Listing = () => {
    let style = {
        width: "50vw"
    };
    let smallWidth = {
        width: "25vw"
    }
    let dragDownStyle = {
        marginTop: "4.5vh"
    }


    return (
        <>
            <h2 className="text-center my-2"><strong>Store Details</strong></h2>
            <form className="container my-auto">
                <div className="row align-items-center">
                    <div className="col-auto">
                        <img className="figure-img rounded" width="300" height="300" src="https://th.bing.com/th?id=OIP.1TubNvwR54s7oy0sdAaKZAHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2" alt="Store Image"></img>

                    </div>
                    <div className="col-auto">
                        <div className="mb-3">
                            <label htmlFor="storeName" className="form-label">Store Name</label>
                            <input style={style} type="text" className="form-control" id="storeName" /> <hr />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="storeDesc" className="form-label">Store Description</label>
                            <input style={style} type="text" className="form-control" id="storeDesc" /><hr />
                        </div>

                        <div className="row align-items-center">
                            <div class="col-md-6">
                                <label htmlFor="storeCity" class="form-label">City</label>
                                <input type="text" class="form-control" id="storeCity" required />
                                <div class="invalid-feedback">
                                    Please provide a valid Indian city.
                                </div>
                            </div>
                            <div class="col-md-3">
                                <label htmlFor="storeState" class="form-label">State</label>
                                <select class="form-select" id="storeState" required>
                                    <option selected disabled value="">Choose your state</option>
                                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                    <option value="Assam">Assam</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Chandigarh">Chandigarh</option>
                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                    <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                                    <option value="Daman and Diu">Daman and Diu</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                                    <option value="Jharkhand">Jharkhand</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Lakshadweep">Lakshadweep</option>
                                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Manipur">Manipur</option>
                                    <option value="Meghalaya">Meghalaya</option>
                                    <option value="Mizoram">Mizoram</option>
                                    <option value="Nagaland">Nagaland</option>
                                    <option value="Odisha">Odisha</option>
                                    <option value="Puducherry">Puducherry</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Sikkim">Sikkim</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Tripura">Tripura</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                    <option value="Uttarakhand">Uttarakhand</option>
                                    <option value="West Bengal">West Bengal</option>

                                </select>
                                <div class="invalid-feedback">
                                    Please select a valid state.
                                </div>
                            </div>
                            <div class="col-md-3">
                                <label htmlFor="storeZip" class="form-label">Zip</label>
                                <input type="text" class="form-control" id="storeZip" required />
                                <div class="invalid-feedback">
                                    Please provide a valid zip.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />
                <h2><strong>Additional Information</strong></h2>
                <div className="row align-items-center">

                    <div className="col-auto">
                        <div className="mb-3">
                            <label htmlFor="storeImage1" className="form-label">Upload a picture for your store!</label>
                            <input style={smallWidth} type="file" className="form-control" id="storeImage1" />
                        </div>

                    </div>
                    <div className="col-auto">
                        <div style={dragDownStyle} className="mb-3 dropdown">
                            <button required className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Select your industry
                            </button>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/listing/restaurant">Restaurants</Link></li>
                                <li><Link className="dropdown-item" to="/listing/ANM">Arts and Media</Link></li>
                                <li><Link className="dropdown-item" to="/listing/Electronics">Electronics</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="mb-3">
                            <label htmlFor="storeHours" className="form-label">Enter your opening and closing hours!</label>
                            <input placeholder="eg. 12:00 PM to 8:00 PM" style={smallWidth} type="text" className="form-control" id="storeHours" />
                        </div>
                    </div>
                </div>


                <div className="col-auto">
                    <div className="mb-3">
                        <label htmlFor="storeAccess" className="form-label">Please enter accessibility information, eg. provision of wheelchairs, ramps, etc.</label>
                        <input type="text" className="form-control" id="storeAccess" />
                    </div>

                </div>
                <hr />


                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">I allow "My Personal Map!" to use my data on a public forum!</label>
                </div>

                <hr />
                <h2 className="text-center"><strong>Store Contact Information!</strong></h2>


                <div>
                    <div className="mb-3">
                        <label htmlFor="storeNumber" className="form-label">Please enter your Store Number</label>
                        <input placeholder = "Please Enter in this Format: +91 XXXXX XXXXX" type="text" className="form-control" id="storeNumber" required/> <hr />
                    </div>

                </div>
                



                <button type="submit" className="btn btn-sm btn-success">Submit</button>
            </form>
        </>
    )
}
