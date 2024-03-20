import './CustomerList.scss';
import CustomerItem from '../../components/CustomerItem/CustomerItem';
import { useQuery, useQueryClient } from 'react-query';
import { getCustomers } from '../../services/CustomerServices';
import { ICustomerList } from "../../interfaces/CustomerInterface"
import Loader from '../../components/Reusable/Loader/Loader';
import ErrorNotification from '../../components/Reusable/Error/Error';

function CustomerList(): JSX.Element {
  const queryClient = useQueryClient();
  const { isError, data, isLoading, error } = useQuery<ICustomerList>('GET_CUSTOMERS', getCustomers);

  if (isLoading) {
    return <Loader/>;
  }

  if (isError) {
    return <ErrorNotification>Error loading customers: {(error as Error).message}</ErrorNotification>
  }

  const customers = data?.customers ?? [];

  // Store the customer list in the global query client
  queryClient.setQueryData('customerList', customers);


  return (
    <div className='customer-list-container'>
      <h3>Customer List</h3>
      <p>Customer list and details are shown below. You can Edit them by selecting one of them.</p>
      {customers.map((customer) => (
        <CustomerItem key={customer.id} customer={customer} />
      ))}
    </div>
  );
}

export default CustomerList;
