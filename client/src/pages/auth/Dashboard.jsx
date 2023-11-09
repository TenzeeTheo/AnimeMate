import useAuth from '../../hooks/useAuth'
import Card from '../../components/common/Card/Card'
import MyBtn from '../../components/common/Button/MyBtn'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import * as styles from './Dashboard.css'


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

//     <Card title="Profile" authform>
//     <div className="text-center mb-4">
//       <h1>Welcome {user.username}</h1>
//       <p></p>
//     </div>
//     { user.isAdmin && 
//     <>
//       <p>
//         Let's Dive into the World of Stories!
//       </p>  
//     </>
//     }
// {/* Log Out & Forces a Redirect */}
// { user &&
//   <div className="mt-5">
//     <MyBtn onClick={() => { logout() }}>
//       Log Out
//     </MyBtn>
//   </div>
// }
//   </Card>

<div className={styles.parent}>
      <Row>
        <Col>
        
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
      
        </Col>
        <Col>
       
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
        </Col>
        <Col>

    <Card title="My Information" authform>
    <p>FirstName: {user.firstName}</p>
    <p>Last Name: {user.lastName}</p>
    <p>User Name: {user.username}</p>
    <p>Email: {user.email}</p>
  



  </Card>
        </Col>
      </Row>
</div>
  )
}

export default Dashboard






