import React,{useState} from "react";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";



const Login = ({Loguser}) =>{
    const [luser,setluser] = useState({})

    return(
        <>

        <div style={{background:"silver",minHeight:"662px"}} className="input-div">
            <form onSubmit={(e) =>e.preventDefault()} style={{maxWidth: "600px"}} className="container-fluid log-inp">
                
                
                <h3 style={{color: "black"}}>LOGIN</h3>
                <div>
                    <input
                     type="text"
                     name="email"
                     placeholder="E-mail"
                     onChange={(e) =>setluser({...luser,email: e.target.value})}
                     /><br /><br />
                </div>
                <div>
                    <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) =>setluser({...luser,password: e.target.value})}
                    /><br/><br/>
                </div>
                <br />
                <Button variant="secondary" onClick={() =>Loguser(luser.email, luser.password)} >Login</Button><br /><br />
                <span> New user ? <Link to={'/Register'}>Click Here</Link></span>
                </form>
                </div>
            
        </>
    )
}
export default Login;