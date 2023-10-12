import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form,Spinner} from 'react-bootstrap';

import * as styles from './Login.css'
import authService from '../../services/authService';
import useAuth from '../../hooks/useAuth';

import Card  from '../../components/common/Card/Card'
import MyBtn from '../../components/common/Button/MyBtn';

const Login = () => {
  const {loginSaveUser} = useAuth()
  const navigate = useNavigate();

    // HOOK: SETTING COMPONENT STATE (& init values)
    const [user, setUser] = useState({
      email: '',
      password: ''
    });
    const [loading, setLoading] = useState(false);

      // Destructure data state nested object properties
  const { email, password } = user;

  // function 1 Handle state Value change on input 
  const handleTextChange = (e) =>{
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
   }


  const handleSubmit = async (e) =>{
    e.preventDefault();
    setLoading(true);

     // API Call to Write User Data
     try {
      const response = await authService.login(user);
      loginSaveUser(response.data);
      navigate('/dashboard');
    } catch(err) {
      console.log(err?.response);
      // toast.error(err.response.data);
      setTimeout(() => {setLoading(false)}, 1000);
    }
  }
  
  

  return (
    <Card title="Log In" className={styles.container} authform >
       <Form  onSubmit={handleSubmit}>
        {/* GROUP 1: EMAIL */}
        <Form.Group className="mb-3" controlId="email">
          <Form.Control type="email" placeholder="Email" name="email" value={email} onChange={ handleTextChange }     required  className="text-center" />
        </Form.Group>

        {/* GROUP 2: PASSWORD */}
        <Form.Group className="mb-3" controlId="password">
          <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={ handleTextChange }   required className="text-center"/>
        </Form.Group>

        {/* SUBMIT BUTTON */}
        <MyBtn loadingState={loading} >
          {loading ? <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />: 'submit'}
        </MyBtn>
    
        <div className={styles.userNav}>
        <span>Not a member? &nbsp;
          <Link to="/signup">Sign Up</Link>
        </span>
      </div>
      </Form>

    </Card>
  )
}

export default Login