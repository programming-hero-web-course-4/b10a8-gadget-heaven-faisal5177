import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar'; 
import Footer from '../Footer/Footer'; 

const Root = () => {
  return (
    <div className="container mx-auto mt-5">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
