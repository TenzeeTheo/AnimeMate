import { useState } from 'react';
import useAuth from '../../hooks/useAuth'
import Card from '../../components/common/Card/Card'
import MyBtn from '../../components/common/Button/MyBtn'
import { ToastContainer, toast } from 'react-toastify';

import { Link } from 'react-router-dom';



const Dashboard = () => {
  // HOOK: CONTEXT FOR AUTH
  const { user, logout } = useAuth();
  const [showUserInfo, setShowUserInfo] = useState(false);

  const handleProfileClick = () => {
    setShowUserInfo(!showUserInfo);
  };

  // CONDITIONAL LOAD: USER ERROR [POSSIBLY REPLACE WITH LOADING STATE]
  if (!user) {
    return (
      <Card title="Profile" authform>
        <div className="text-center mb-4">
          Cannot Retrieve User
        </div>
      </Card>
    )
  }

  return (

   < div>
  
   <Card title="My Information" authform>
   <div className="text-center mb-4">
  {user && (
    <>
      {user.isAdmin ? (
        <>
          <h1>Welcome Back Sir</h1>
          <p>Let's Dive into the World of Stories!</p>
        </>
      ) : (
        <h1>Welcome {user.username}</h1>
      )}
    </>
  )}
</div>
      <Link onClick={handleProfileClick} >Profile</Link>
        {showUserInfo && (
            <div className="userInfo">
                      <div className="justify-content-center">
                        <p className="text-center mb-4">First Name: {user.firstName}</p>
                        <p className="text-center mb-4">Last Name: {user.lastName}</p>
                        <p className="text-center mb-4">User Name: {user.username}</p>
                        <p className="text-center mb-4">Email: {user.email}</p>
                        {user.isAdmin && (<p className="text-center mb-4">isAdmin: Yes</p>)}                        {/* Log Out & Forces a Redirect */}
                        {user && (
                          <div className="mt-5">
                            <MyBtn onClick={() => { logout() }}>
                              Log Out
                            </MyBtn>
                          </div>
                        )}
                      </div>
            </div>
        )}

   </Card>
   </div>
 
  );
}

export default Dashboard;
