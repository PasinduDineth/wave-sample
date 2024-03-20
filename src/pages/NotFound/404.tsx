import './404.scss';
import Button from '../../components/Reusable/Button/Button';
import { useNavigate  } from 'react-router-dom';

function NotFound(): JSX.Element {
    const navigate = useNavigate();
    const goBack = () => {
        navigate('/');
    }
  return (
    <div className='notfound-container'>
      <h3>Page not found</h3>
      <Button onClick={goBack}>Go Back</Button>
    </div>
  );
}

export default NotFound;
