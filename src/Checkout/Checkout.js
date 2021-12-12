import React, {useState} from "react";
import Form from "./Form";
import Success from "./Success";


function Checkout(){
    const [success, setSuccess] = useState('');

    if (success)
        return (<Success email={success}/>)

    return (
        <div >
            <div className="row">
                <div className="col-md-4 order-md-2 mb-4">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-muted">Your cart</span>
                    </h4>
                </div>
                <div className="col-md-8 order-md-1">
                    <h4 className="mb-3">Billing address</h4>
                        <Form setSuccess={setSuccess}/>
                </div>
            </div>
        </div>
    );
}

export default Checkout;