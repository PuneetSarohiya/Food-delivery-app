import React, { useEffect } from 'react';
import MapImg from '../../images/img/map.png';
import Rider from '../../images/img/rider.png';
import RiderHelmet from '../../images/img/helmet.png';

const OrderComplete = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { tofirstname,tolastname,flat,city,address} = props.deliveryDetails;

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-8">
                    <img className="img-fluid" src={MapImg} alt="" />
                </div>
                <div className="col-md-4 pl-md-5">
                    <div className="bg-light p-3 rounded">
                        <img className="w-25 ml-5" src={Rider} alt="" />
                        <div className="bg-white  rounded p-3 my-3">
                            <div>
                                <h5>Your Location</h5>
                                <p>First Name: {tofirstname}</p>
                                <p>Last Name: {tolastname}</p>
                                <p>Flat number: {flat}</p>
                                <p>City Name: {city}</p>
                                <p>Address: {address}</p>
                            </div>
                            <div>
                                <h5>Shop Address</h5>
                                <p>Star Kabab and restaurant</p>
                            </div>
                        </div>
                        <h1>09:00</h1>
                        <p>Estimated Delivery</p>

                        <div className="bg-white rounded p-3 d-flex">
                            <img className="w-25 mr-2" src={RiderHelmet} alt="" />
                            <div>
                                <h6>Sohan Kumar</h6>
                                <p>Your Rider</p>
                            </div>
                        </div>

                        <button className="btn btn-block my-3 btn-danger">Contact</button>
                          <p>9878768908</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderComplete; 

// import React from "react";
// import ReactDOM from "react-dom"
// import "./OrderComplete.css";
// const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

// function OrderComplete() {
//   const createOrder = (data, actions) => {
//         return actions.order.create({
//           purchase_units: [
//             {
//               amount: {
//                 value: "0.01",
//               },
//             },
//           ],
//         });
//       }
 
//  const onApprove = (data, actions) => {
//         return actions.order.capture();
//       }

//     return(
//         <div className="payment">
//             <div className="wrapper">

// <PayPalButton
//         createOrder={(data, actions) => createOrder(data, actions)}
//         onApprove={(data, actions) => onApprove(data, actions)}
//       />
//         </div>
//         </div>
//     );
// }

// export default OrderComplete;

// import StripeCheckout from 'react-stripe-checkout';

// import React from "react";
// import StripeCheckout from 'react-stripe-checkout';

// function OrderComplete() {

//     const onToken = (token) => {
//         console.log(token);
//     }
//     return(
//     <div className="order">
//           <StripeCheckout
//           name="Foodhunter"
//           currency="Inr"
//           amount="totalamount"
//         token={onToken}
//         stripeKey="pk_test_51LBfbhSFFO1G4ZMfdyqdjI2RGEBFPAtVy8CIbUomrAzfQaaKWHqHU396quxsL8MEosqualH5PdGjMmKZXoL3jQUV00lfUxQLVF"
//       />
//     </div>
//     );
// }

// export default OrderComplete;

