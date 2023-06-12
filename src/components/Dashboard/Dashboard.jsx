import React from 'react';
import Navbar from '../Shared/Navbar/Navbar'
import Footer from '../Shared/Footer/Footer'

const Dashboard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h3>Dashboard page</h3>
            {/* Side bar section */}
            {
                isAdmin ? <>
                    <li><NavLink to="/dashboard/home" ><FaHome></FaHome> Admin Home</NavLink></li>
                    <li><NavLink to="/dashboard/addItem"><FaUtensils></FaUtensils> Add an Item</NavLink></li>
                    <li><NavLink to="/dashboard/manageitems"><FaWallet></FaWallet> Manage Items</NavLink></li>
                    <li><NavLink to="/dashboard/mycart"><FaBook></FaBook> Manage Bookings </NavLink></li>
                    <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li>
                </> : <>
                    <li><NavLink to="/dashboard/home" ><FaHome></FaHome> User Home</NavLink></li>
                    <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                    <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
                    <li>
                        <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                            <span className="badge badge-secondary">+{cart?.length || 0}</span>
                        </NavLink>
                    </li>
                </>
            }

            <Footer></Footer>
        </div>
    );
};

export default Dashboard;