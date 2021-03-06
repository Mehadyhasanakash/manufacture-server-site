import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../Components/useFirebaseHook/useFirebaseHook';


const Navber = () => {

    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
      };
    const myItem =
        <>
            <li> <Link to="/home"> Home </Link>  </li>
            <li> <Link to="/purchase"> Purchase </Link>  </li>
            
            <li> {
                    
                    user && <Link to='/dashboard'>Dashboard </Link>
                    
                    }     </li>

            <li> <Link to="/MyPortfolio"> MyPortfolio </Link>  </li>
            <li> <Link to="/myprofile"> MyProfile </Link>  </li>

            
            <li> <Link to="/blogs"> BLogs </Link>  </li>

            <li>{
                user ? <button class="btn btn-ghost" onClick={logout}>Sign out</button>
                : <Link to="/login"> Login</Link>
                
                }</li>

                
        </>
    return (
        <div className="navbar fixed top-0 z-50 px-10  bg-base-100 ">
            <div className="navbar-start  ">
                <div className="dropdown ">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52   ">
                        {myItem}
                    </ul>
                </div>
                <p className=" normal-case text-2xl ">Manufacturer</p>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {myItem}
                </ul>

            </div>
            <div className='navbar-end'>

        <label for="my-drawer-2" tabIndex="1" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
               

        </div>


        </div>
    );
};

export default Navber;
