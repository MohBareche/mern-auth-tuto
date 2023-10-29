import { useState } from "react";
import { URL } from "../../main";
import axios from "axios";

const CustomerForm = ({ getCustomers }) => {
    const [customerName, setCustomerName] = useState("");

    const saveCustomer = async (e) => {
        e.preventDefault();
        const url = `${URL}/customer`;
        try {
            const customerData = { name: customerName };
            await axios.post(url, customerData);
            getCustomers();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <form onSubmit={saveCustomer}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Customer Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-success">
                    Save Customer
                </button>
            </form>
        </div>
    );
};

export default CustomerForm;
