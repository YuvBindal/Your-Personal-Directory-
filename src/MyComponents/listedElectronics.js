import React from 'react'
import { Link } from 'react-router-dom'

export const ListedElectronics = () => {
    let style = {
        width: "50vw"
    };
    let smallWidth = {
        width: "25vw"
    }
    let dragDownStyle = {
        marginTop: "4.5vh"
    }

    let menuStyling = {
        height: "40vh"
    }
    let temporaryMenu = `Welcome to [Your Electronics Store Name]!

Please enter your product list here. Include the product names, descriptions, and prices.
    
Example:
********************************************************************************************************************
    1. TVs
       - Smart TV: High-definition smart TV with built-in streaming capabilities. $799.99
       - LED TV: Energy-efficient LED TV with vivid display. $499.99
    
    2. Laptops
       - Ultrabook: Lightweight and powerful laptop for professional use. $1,199.99
       - Gaming Laptop: High-performance laptop designed for gaming enthusiasts. $1,999.99
    
    3. Headphones
       - Wireless Headphones: Bluetooth-enabled headphones with noise cancellation. $149.99
       - Over-Ear Headphones: Comfortable headphones with immersive sound. $99.99
********************************************************************************************************************
    
Please follow the format above to list your products and their corresponding prices. Feel free to add more products as needed. Thank you for using our platform!`
        
        


    return (
        <>
            <h2 className ="text-center my-2"><strong>Store Details</strong></h2>
            <form className="container my-auto">
                <div className="row align-items-center">
                    <div className="col-auto">
                        <img width="300" height="300" src="https://th.bing.com/th?id=OIP.1TubNvwR54s7oy0sdAaKZAHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2" alt="Store Image"></img>

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
                        <div className="mb-3">
                            <label htmlFor="storeLoc" className="form-label">Store Location</label>
                            <input style={style} type="location" className="form-control" id="storeLoc" /><hr />
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
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                
                <h2 className="text-center"><strong>Upload your Product Catalog!</strong></h2>
                <div class="input-group">
                    <span htmlFor="storeMenu" class="input-group-text">Product Catalog</span>
                    <textarea placeholder={temporaryMenu} style={menuStyling} class="form-control" aria-label="With textarea" id="storeMenu"></textarea>
                </div>

                <hr />
                <h2 className="text-center"><strong>Store Contact Information!</strong></h2>


                <div>
                    <div className="mb-3">
                        <label htmlFor="storeNumber" className="form-label">Please enter your Store Number</label>
                        <input placeholder = "Please Enter in this Format: +91 XXXXX XXXXX" type="text" className="form-control" id="storeNumber" required/> <hr />
                    </div>

                </div>
                


                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">I allow "My Personal Map!" to use my data on a public forum!</label>
                </div>



                <button type="submit" className="btn btn-sm btn-success">Submit</button>
            </form>
        </>
    )
}
