import React from 'react'
import { Link } from 'react-router-dom'

export const ListedRestaurant = () => {
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

    let temporaryMenu = `Please enter your restaurant menu here. Include the dishes, descriptions, and prices.
    
Example:

    Welcome to [Your Restaurant Name]! 
*****************************************************************************************************************
   1. Starters
    - Garlic Bread: Freshly baked bread with a hint of garlic. $5.99
    - Caesar Salad: Crisp romaine lettuce, parmesan cheese, and homemade dressing. $7.99
                        
    2. Main Courses
        - Grilled Salmon: Grilled salmon fillet served with lemon butter sauce and roasted vegetables. $17.99
        - Spaghetti Bolognese: Classic Italian pasta dish with meat sauce. $12.99
                        
    3. Desserts
        - Chocolate Lava Cake: Warm chocolate cake with a molten center, served with vanilla ice cream. $6.99
        - New York Cheesecake: Creamy and rich cheesecake with a graham cracker crust. $8.99
*****************************************************************************************************************
                       
    We look forward to showcasing your delicious menu to our customers! Thank you.`
    
    
    


    return (
        <>
            <h2 className="text-center my-2"><strong>Store Details</strong></h2>
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

                <h2 className="text-center"><strong>Upload your Menu!</strong></h2>
                <div class="input-group">
                    <span htmlFor="storeMenu" class="input-group-text">My menu</span>
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
