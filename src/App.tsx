import { Routes, Route } from "react-router-dom";
import CustomerList from './pages/CustomerList/CustomerList';
import CustomerDetails from './pages/CustomerDetails/CustomerDetails';
import Layout from "./components/Layout/Layout";
import NotFound from "./pages/NotFound/404";
import './App.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CustomerList />} />
        <Route
          path="customer/:customerId"
          element={<CustomerDetails />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;