
const CustomerList = ({customers}) => {

    const renderCustomers = () => {
        return customers.map((customer, index) => {
            return <li key={index}>{ customer.name }</li>
        })
    }
  return (
      <div>
          <ul>
            {renderCustomers()}
          </ul>
    </div>
  )
}

export default CustomerList