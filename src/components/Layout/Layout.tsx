import { Outlet } from 'react-router-dom';
import Topbar from '../Topbar/Topbar';
import './Layout.scss';

export default function Layout(): JSX.Element {
  return (
    <>
      <Topbar />
      <div className="layout-container">
        <Outlet/>
      </div>
    </>
  );
}
