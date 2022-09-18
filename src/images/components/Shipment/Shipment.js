// import React, { useEffect } from 'react';
// import './Shipment.css';
// import { useForm } from 'react-hook-form';
// import { Link } from 'react-router-dom';

// const Shipment = (props) => {

//     useEffect(() => {
//         window.scrollTo(0, 0)
//     }, [])

//     const { tofirstname, tolastname, flat, city,address } = props.deliveryDetails;

//     const { register, handleSubmit, errors } = useForm();
//     const onSubmit = data => props.deliveryDetailsHandler(data);

//     const subTotal = props.cart.reduce((acc, crr) => {
//         return acc + (crr.price * crr.quantity);
//     }, 0)

//     const totalQuantity = props.cart.reduce((acc, crr) => {
//         return acc + crr.quantity;
//     }, 0)

//     const tax = (subTotal / 100) * 5;
//     const deliveryFee = totalQuantity && 2;
//     const grandTotal = subTotal + tax + deliveryFee;

//     return (
//         <div className="shipment container my-5">
//             <div className="row">
//                 <div className="col-md-5">
//                     <h4>Edit Delivery Details</h4>
//                     <hr />
//                     <form onSubmit={handleSubmit(onSubmit)} className="py-5">

//                         <div className="form-group">
//                             <input
//                                 name="tofirstname"
//                                 className="form-control"
//                                 ref={register({ required: true })}
//                                 defaultValue={tofirstname}
//                                 placeholder="Name"
//                             />
//                             {
//                                 errors.tofirstname && <span className="error">This Option is required</span>
//                             }
//                         </div>

//                         <div className="form-group">
//                             <input
//                                 name="tolastname"
//                                 className="form-control"
//                                 ref={register({ required: true })}
//                                 defaultValue={tolastname}
//                                 placeholder="Last name"
//                             />
//                             {
//                                 errors.tolastname && <span className="error">Road No is required</span>
//                             }
//                         </div>

//                         <div className="form-group">
//                             <input
//                                 name="flat"
//                                 className="form-control"
//                                 ref={register({ required: true })}
//                                 defaultValue={flat}
//                                 placeholder="Flat, Suite or Floor"
//                             />
//                             {
//                                 errors.flat && <span className="error">Flat, Suite or Floor is required</span>
//                             }
//                         </div>

//                         <div className="form-group">
//                             <input
//                                 name="city"
//                                 className="form-control"
//                                 ref={register({ required: true })}
//                                 defaultValue={city}
//                                 placeholder="city name"
//                             />
//                             {
//                                 errors.city && <span className="error">city name is required</span>
//                             }
//                         </div>

//                         {/* <div className="form-group">
//                             <input
//                                 name="city Name"
//                                 className="form-control"
//                                 ref={register({ required: true })}
//                                 defaultValue={city}
//                                 placeholder="city name"
//                             />
//                             {
//                                 errors.city && <span className="error">Business name is required</span>
//                             }
//                         </div> */}

//                         <div className="form-group">
//                             <textarea
//                                 name="address"
//                                 ref={register({ required: true })}
//                                 defaultValue={address}
//                                 placeholder="Address"
//                                 className="form-control"
//                                 cols="30"
//                                 rows="2"
//                             >
//                             </textarea>
//                             {
//                                 errors.address && <span className="error">Address is required</span>
//                             }
//                         </div>

//                         <div className="form-group">
//                             <button
//                                 className="btn btn-danger btn-block"
//                                 type="submit"
//                             >
//                                 Save & Continue
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//                 <div className="offset-md-1 col-md-5">
//                     <div className="restaurant-info mb-3">
//                         <h4>Form <strong> Star Kabab And Restaurant</strong></h4>
//                         <h5>Arriving in 20-30 min</h5>
//                         <h5>107 Rd No 9</h5>
//                     </div>

//                     {
//                         props.cart.map(item =>
//                             <div className="single-checkout-item mb-3 bg-light rounded d-flex align-items-center justify-content-between p-3">
//                                 <img width="140px" className="moor-images" src={item.img} alt="" />
//                                 <div className='px-4'>
//                                     <h6>{item.name}</h6>
//                                     <h4 className="text-danger">₹{item.price.toFixed(2)}</h4>
//                                     <p><small>Delivery free</small></p>
//                                 </div>

//                                 <div className="checkout-item-button ml-3 btn">
//                                     <button
//                                         onClick={() => props.checkOutItemHandler(item.id, (item.quantity + 1))}
//                                         className="btn font-weight-bolder"
//                                     >
//                                         +
//                                     </button>

//                                     <button
//                                         className="btn bg-white rounded"
//                                     >
//                                         {item.quantity}
//                                     </button>

//                                     {
//                                         item.quantity > 0 ?

//                                             <button
//                                                 onClick={() => props.checkOutItemHandler(item.id, (item.quantity - 1))}
//                                                 className="btn font-weight-bolder"
//                                             >
//                                                 -
//                                             </button>

//                                             :

//                                             <button
//                                                 className="btn font-weight-bolder"
//                                             >
//                                                 -
//                                      </button>
//                                     }
//                                 </div>
//                             </div>
//                         )
//                     }

//                     {
//                         !props.cart.length && <h3 className="py-3">No Items Added <a href="/"> Keep Shopping</a></h3>
//                     }

//                     <div className="cart-calculation">
//                         <p className="d-flex justify-content-between">
//                             <span>Sub Total: {totalQuantity} Item</span>
//                             <span>₹{subTotal.toFixed(2)}</span>
//                         </p>

//                         <p className="d-flex justify-content-between">
//                             <span>Tax</span>
//                             <span>₹{tax.toFixed(2)}</span>
//                         </p>

//                         <p className="d-flex justify-content-between">
//                             <span>Delivery Fee</span>
//                             <span>₹{deliveryFee}</span>
//                         </p>

//                         <p className="h5 d-flex justify-content-between">
//                             <span>Total</span>
//                             <span>₹{grandTotal.toFixed(2)}</span>
//                         </p>

//                         {
//                             totalQuantity ?
//                                 tofirstname && tolastname && flat && city && address ?
//                                     <Link to="/order-complete">
//                                         <button
//                                             onClick={() => props.clearCart()}
//                                             className="btn btn-block btn-danger"
//                                         >
//                                             Check Out Your Food
//                                     </button>
//                                     </Link>
//                                     :
//                                     <button
//                                         disabled className="btn btn-block btn-secondary"
//                                     >
//                                         Check Out Your Food
//                                     </button>

//                                 :
//                                 <button
//                                     disabled className="btn btn-block btn-secondary"
//                                 >
//                                     Nothing to Checkout
//                                 </button>
//                         }
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Shipment;


import React, { useEffect } from 'react';
import './Shipment.css';
// import { useForm } from 'react-hook-form';
// import { Link } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';

const Shipment = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // const { tofirstname, tolastname, flat, city,address } = props.deliveryDetails;

    // const { register, handleSubmit, errors } = useForm();
    // const onSubmit = data => props.deliveryDetailsHandler(data);
    const handleToken = (token) => {

    }
    const subTotal = props.cart.reduce((acc, crr) => {
        return acc + (crr.price * crr.quantity);
    }, 0)

    const totalQuantity = props.cart.reduce((acc, crr) => {
        return acc + crr.quantity;
    }, 0)

    const tax = (subTotal / 100) * 5;
    const deliveryFee = totalQuantity && 2;
    const grandTotal = subTotal + tax + deliveryFee;

    return (
        <div className="shipment container my-5">
            <div className="row">
                {/* <div className="col-md-5">
                    <h4>Edit Delivery Details</h4>
                    <hr />
                    <form onSubmit={handleSubmit(onSubmit)} className="py-5">

                        <div className="form-group">
                            <input
                                name="tofirstname"
                                className="form-control"
                                ref={register({ required: true })}
                                defaultValue={tofirstname}
                                placeholder="Name"
                            />
                            {
                                errors.tofirstname && <span className="error">This Option is required</span>
                            }
                        </div>

                        <div className="form-group">
                            <input
                                name="tolastname"
                                className="form-control"
                                ref={register({ required: true })}
                                defaultValue={tolastname}
                                placeholder="Last name"
                            />
                            {
                                errors.tolastname && <span className="error">Road No is required</span>
                            }
                        </div>

                        <div className="form-group">
                            <input
                                name="flat"
                                className="form-control"
                                ref={register({ required: true })}
                                defaultValue={flat}
                                placeholder="Flat, Suite or Floor"
                            />
                            {
                                errors.flat && <span className="error">Flat, Suite or Floor is required</span>
                            }
                        </div>

                        <div className="form-group">
                            <input
                                name="city"
                                className="form-control"
                                ref={register({ required: true })}
                                defaultValue={city}
                                placeholder="city name"
                            />
                            {
                                errors.city && <span className="error">city name is required</span>
                            }
                        </div>

                        {/* <div className="form-group">
                            <input
                                name="city Name"
                                className="form-control"
                                ref={register({ required: true })}
                                defaultValue={city}
                                placeholder="city name"
                            />
                            {
                                errors.city && <span className="error">Business name is required</span>
                            }
                        </div> */}

                        {/* <div className="form-group">
                            <textarea
                                name="address"
                                ref={register({ required: true })}
                                defaultValue={address}
                                placeholder="Address"
                                className="form-control"
                                cols="30"
                                rows="2"
                            >
                            </textarea>
                            {
                                errors.address && <span className="error">Address is required</span>
                            }
                        </div>

                        <div className="form-group">
                            <button
                                className="btn btn-danger btn-block"
                                type="submit"
                            >
                                Save & Continue
                            </button>
                        </div>
                    </form>
                </div> */} 
                <div className="offset-md-1 col-md-5">
                    <div className="restaurant-info mb-3">
                        <h4>Form <strong> Star Kabab And Restaurant</strong></h4>
                        <h5>Arriving in 20-30 min</h5>
                        <h5>107 Rd No 9</h5>
                    </div>

                    {
                        props.cart.map(item =>
                            <div className="single-checkout-item mb-3 bg-light rounded d-flex align-items-center justify-content-between p-3">
                                <img width="140px" className="moor-images" src={item.img} alt="" />
                                <div className='px-4'>
                                    <h6>{item.name}</h6>
                                    <h4 className="text-danger">₹{item.price.toFixed(2)}</h4>
                                    <p><small>Delivery free</small></p>
                                </div>

                                <div className="checkout-item-button ml-3 btn">
                                    <button
                                        onClick={() => props.checkOutItemHandler(item.id, (item.quantity + 1))}
                                        className="btn font-weight-bolder"
                                    >
                                        +
                                    </button>

                                    <button
                                        className="btn bg-white rounded"
                                    >
                                        {item.quantity}
                                    </button>

                                    {
                                        item.quantity > 0 ?

                                            <button
                                                onClick={() => props.checkOutItemHandler(item.id, (item.quantity - 1))}
                                                className="btn font-weight-bolder"
                                            >
                                                -
                                            </button>

                                            :

                                            <button
                                                className="btn font-weight-bolder"
                                            >
                                                -
                                     </button>
                                    }
                                </div>
                            </div>
                        )
                    }

                    {
                        !props.cart.length && <h3 className="py-3">No Items Added <a href="/"> Keep Shopping</a></h3>
                    }

                    <div className="cart-calculation">
                        <p className="d-flex justify-content-between">
                            <span>Sub Total: {totalQuantity} Item</span>
                            <span>₹{subTotal.toFixed(2)}</span>
                        </p>

                        <p className="d-flex justify-content-between">
                            <span>Tax</span>
                            <span>₹{tax.toFixed(2)}</span>
                        </p>

                        <p className="d-flex justify-content-between">
                            <span>Delivery Fee</span>
                            <span>₹{deliveryFee}</span>
                        </p>

                        <p className="h5 d-flex justify-content-between">
                            <span>Total</span>
                            <span>₹{grandTotal.toFixed(2)}</span>
                        </p>

                        <div className='stripe-section'>
                            <StripeCheckout
                            stripeKey="pk_test_51LBfbhSFFO1G4ZMfdyqdjI2RGEBFPAtVy8CIbUomrAzfQaaKWHqHU396quxsL8MEosqualH5PdGjMmKZXoL3jQUV00lfUxQLVF"
                            token={handleToken}
                            billingAddress
                            shippingAddress
                            amount={grandTotal * 100}
                            name="Foodhunter"
                            >

                            </StripeCheckout>
                        </div>

                        {/* {
                            totalQuantity ?
                                tofirstname && tolastname && flat && city && address ?
                                    <Link to="/order-complete">
                                        <button
                                            onClick={() => props.clearCart()}
                                            className="btn btn-block btn-danger"
                                        >
                                            Check Out Your Food
                                    </button>
                                    </Link>
                                    :
                                    <button
                                        disabled className="btn btn-block btn-secondary"
                                    >
                                        Check Out Your Food
                                    </button>

                                :
                                <button
                                    disabled className="btn btn-block btn-secondary"
                                >
                                    Nothing to Checkout
                                </button>
                        } */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shipment;