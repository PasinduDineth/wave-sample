export interface ICustomer {
  id: number;
  name: string;
  email: string;
  channel: string;
  address: string;
  postal: string;
  city: string;
  province: string;
  country: string;
}

export interface ICustomerList {
  customers: ICustomer[];
}