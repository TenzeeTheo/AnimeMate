import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form,Spinner} from "react-bootstrap";
import { toast } from 'react-toastify';


import * as  styles from './Signup.css'
import authService from '../../services/authService'
import useAuth from '../../hooks/useAuth'

import Card  from '../../components/common/Card/Card'
import MyBtn from '../../components/common/Button/MyBtn';


const SignUp = () => {
    const {loginSaveUser} =useAuth()
    const navigate = useNavigate()
    const passwordConfirm = useRef();

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
      });
    const [ loading, setLoading] = useState(false);


  // destructure state object 
  const { username, email, password} = user;

// function 1 Handle state Value change on input 
  const handleTextChange = (e) =>{
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
   }
   const handleSubmit = async (e) =>{
    e.preventDefault();
    setLoading(true)
    console.log('hi')

     // Early Validation - Error Check First
     if(password !== passwordConfirm.current.value){
        toast.error("Passwords do not match");
        setLoading(false);
        return;
      }
   
      // API calling 
  try {
    const response = await authService.register(user);
    loginSaveUser(response.data);
    //  navigate to the dashboard page
    navigate('/dashboard');
   } catch (err) {
     console.log(err?.response);
    //  toast.error(err.response.data);
     setTimeout (() =>{setLoading(false)},1000)
   }
}

  return (
    <Card title=' Create Account' authform>
         <Form onSubmit={handleSubmit} >
        {/* Input 1 Username */}
            <Form.Group className="mb-3" controlId="username">
                <Form.Control
                type="text" 
                placeholder="Username"
                name="username" 
                className="text-center"
                value={username}
                onChange={handleTextChange}
                />
            </Form.Group>
             {/* Input 2 eamil */}
            <Form.Group className="mb-3" controlId="email">
                <Form.Control
                type="text" 
                placeholder="email"
                name="email" 
                className="text-center"
                value={email}
                onChange={handleTextChange}
                />
            </Form.Group>
            {/* Input 3 Password */}
                <Form.Group className="mb-3" controlId="password">
                    <Form.Control
                    type="password" 
                    placeholder="Password"
                    name="password"
                    className="text-center"
                    value={password}
                    onChange={handleTextChange}

                     />
                </Form.Group>
                {/* Input 4 Password Confirm */}
                <Form.Group className="mb-3" controlId="password-confirm">
                    <Form.Control
                    type="password" 
                    placeholder="Confirm-Password"
                    className="text-center"
                    ref={passwordConfirm}
                    />
                </Form.Group>
                <MyBtn loadingState={loading}>
                     {loading ? <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          /> : 'submit'}
                </MyBtn>
                <div className={styles.userNav}>
                    <span>
                    already a memeber?&nbsp;
                    <Link to='/LogIn'>Log in Here</Link>

                    </span>
                    </div>

         </Form>
    </Card>
  )
}
export default SignUp