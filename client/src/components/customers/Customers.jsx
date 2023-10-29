import { useEffect, useState } from "react";
import CustomerForm from "./CustomerForm";
import CustomerList from "./CustomerList";
import { URL } from "../../main";
import axios from "axios";

const Customers = () => {
    const url = `${URL}/customer/`;
    const [customers, setCustomers] = useState([]);

    const getCustomers = async () => {
        const customersRes = await axios.get(url);
        setCustomers(customersRes.data);
    };

    useEffect(() => {
        getCustomers();
    }, []);

    return (
        <div>
            <CustomerForm getCustomers={getCustomers} />
            <hr />
            <CustomerList customers={customers} />
        </div>
    );
};

export default Customers;
