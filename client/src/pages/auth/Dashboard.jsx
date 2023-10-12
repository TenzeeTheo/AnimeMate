import useAuth from '../../hooks/useAuth'
import Card from '../../components/common/Card/Card'
import MyBtn from '../../components/common/Button/MyBtn'




const Dashboard = () => {
  // HOOK: CONTEXT FOR AUTH
  const { user, logout } = useAuth();

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
    <Card title="Profile" authform>
      <div className="text-center mb-4">
        <h1>Welcome {user.username}</h1>
        <p></p>
      </div>
      { user.isAdmin && 
      <>
         <p>
          Let's Dive into the World of Stories!
        </p>  
      </>
}

      {/* Log Out & Forces a Redirect */}
      { user &&
        <div className="mt-5">
          <MyBtn onClick={() => { logout() }}>
            Log Out
          </MyBtn>
        </div>
      }
    </Card>
  )
}

export default Dashboard






