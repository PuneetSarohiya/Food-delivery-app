import React from "react";
import ReactDOM from "react-dom"
import "./Payment.css";
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function Payment() {

  const createOrder = (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: "0.01",
              },
            },
          ],
        });
      }
 
 const onApprove = (data, actions) => {
        return actions.order.capture();
      }

    return(
      <div className="puneet">
        <div className="payment">
            <div className="wrapper">

<PayPalButton
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
      />
        </div>
        </div>
        </div>
    );
}

export default Payment;