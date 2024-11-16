import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  
  return (
    <Tabs>
      <TabList className="text-center border rounded-lg bg-[#9538E2] py-14">
        <h2 className="text-4xl text-white font-bold">Dashboard</h2>
        <p className="text-gray-200 mb-5">
          <small>
            Explore the latest gadgets that will take your experience to the next level. From smart devices to
            <br /> the coolest accessories, we have it all!
          </small>
        </p>
        <TabList className="flex justify-center space-x-4 mb-5">
        <Tab>
          <Link to="/cartItem">
            <button type="button" className="btn btn-sm font-bold text-[#9538E2]  bg-white hover:bg-[#9538E2] hover:text-white">Cart</button>
          </Link>
        </Tab>
        <Tab>
          <Link to="/wishlistItem">
            <button type="button" className="btn btn-sm font-bold text-[#9538E2]  bg-white hover:bg-[#9538E2] hover:text-white">Wishlist</button>
          </Link>
        </Tab>
      </TabList>
      </TabList>
      <TabPanel className='px-10'>
        <h3 className=' font-bold'>Cart</h3>
      </TabPanel>
      <TabPanel>
        <h3 className='font-bold'>Wishlist</h3>
      </TabPanel>
    </Tabs>
  );
};

export default Dashboard;
