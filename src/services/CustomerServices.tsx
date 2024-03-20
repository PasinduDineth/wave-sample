  import { ICustomerList } from "../interfaces/CustomerInterface"
  const BASE_URL = import.meta.env.VITE_BASE_ENDPOINT || '';
  
  export const getCustomers = async (): Promise<ICustomerList> => {
    const response = await fetch(BASE_URL);
    
    if (!response.ok) {
      throw new Error(`Something Went Wrong. ${response.statusText}`);
    }
    return response.json();
  };