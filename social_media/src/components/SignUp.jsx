import '../static/LoginForm.css'
import { useEffect, useState } from "react";
import users from '../database/users.json';
import { getDatabase, ref, set, onValue } from "firebase/database";
import axios from 'axios';
function SignUp() {
    const uid = localStorage.getItem('user');
    const [keys, setKeys] = useState([]);
    const [form, setForm] = useState({
        "username": "",
        "password": "",
        "fullname": ""
    })
    const handle = (e) => {
        const tmp = { ...form };
        tmp[e.target.name] = e.target.value;
        setForm(tmp);
    }
    const userexist = (username, keys) => {
        for (let i = 0; i < keys.length; i++) {
            if (keys[i] === username) {
                return true;
            }    
        }
        return false;
    }
   async function signup() {
       
        // const db = getDatabase();
        // onValue(ref(db, 'users'), (snapshot) => {
        //     const data = snapshot.val();
        //     const k = Object.keys(data);
        //     if (userexist(form.username, k)) {
        //         alert("username already exists")
        //     }
        //     else{
        //         set(ref(db, 'users/' + form.username), {
        //             fullname:form.fullname,
        //             password:form.password
        //           });
        //     }

        // });
        // const present = checkUser(form.username, keys);
    //endpoint: localhost:8000/auth/signup
    try{
        const res= await axios.post('http://localhost:8000/auth/signup',form);
        alert(res.data.message)
    }
    catch(error){
        alert(error.response.data.message);
    }
   
//    console.log(res);                           
    }
    return (
        <center>
            <div className="login-form">
                <h1 className="heading">Create Your Account</h1>
                <div className="fields">
                    <input onChange={(e) => handle(e)} placeholder="username" name="username" type="text" />
                    <p></p>
                    <input onChange={(e) => handle(e)} placeholder="Full name" name="fullname" type="text" />
                    <p></p>
                    <input onChange={(e) => handle(e)} placeholder="password" name="password" type="password" />
                    <p></p>
                    <button onClick={signup}>SignUp</button>
                </div>
            </div>
        </center>
    )

}
export default SignUp;