import { useNavigate } from 'react-router-dom';
import './CustomerItem.scss';
import Badge from '../Reusable/Badge/Badge';
import { GrEdit } from "react-icons/gr";
import { ICustomer } from '../../interfaces/CustomerInterface';

function CustomerItem({ customer }: Readonly<{ customer: ICustomer }>): JSX.Element {
  const { name, address, postal, city, province, country, channel, id } =  customer;
  const navigate = useNavigate();


  const editCustomer = () => {
    navigate(`/customer/${id}`);
  }

  return (
    <div className='customer-item-container'>
      <div className='customer-details-content'>
        <div>
        <h5>{name}</h5>
        <Badge channel={channel} />
        </div>
        <p>{`${address} ${postal} ${city} ${province} ${country}`}</p>
      </div>
      <GrEdit className='customer-edit-icon' onClick={editCustomer}/>
    </div>
  );
}

export default CustomerItem;