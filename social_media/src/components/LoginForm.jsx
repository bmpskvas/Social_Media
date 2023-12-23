import '../static/LoginForm.css'
import { useContext, useEffect, useState } from "react";
import users from '../database/users.json';
import { getDatabase, ref, set, onValue } from "firebase/database";
import AuthContext from '../context/AuthContext';
import { Navigate, useNavigate } from "react-router-dom";
import axios from 'axios';
function LoginForm(){
  const uid=localStorage.getItem('user');
  const contextData= useContext(AuthContext);
  // const navigate=useNavigate();
    const [form,setForm]=useState({
        "username":"",
        "password":""
      })

      const handle = (e) =>{
        const tmp={...form};
        tmp[e.target.name]=e.target.value;
        setForm(tmp);
      }
      
      useEffect(()=>{
        if(uid!==null){
          window.location.href='/home';
        }

      },[])

      function userexist(username,keys){
        for (let i = 0; i < keys.length; i++) {
          if (keys[i] === username) {
              return true;
          }    
      }
      return false;
      }

     async function submit(){
          // const db = getDatabase();
         
          // onValue(ref(db, 'users'), (snapshot) => {
          //     const data = snapshot.val();
          //     const k = Object.keys(data);
          //     if (userexist(form.username, k)) {
          //         const pswd=data[form.username].password;
          //         if(pswd===form.password){
          //           localStorage.setItem('user',form.username);
          //                 window.location.href="/home";
          //                 return ;
          //         }
          //         else{
          //           alert("wrong password");
          //           return;
          //         }
  
          //     }
          //     else{
          //       alert("username doesnt exists")           
          //      }
  
          // });
          try {
            const result = await axios.post('http://localhost:8000/auth/login', form);
            alert(result.data.message);
            localStorage.setItem('user', form.username);
            // const tmp=result.data.data
            // navigate('/home',{
             
            //   state:tmp
            // })
            window.location.href = "/home";
            // console.log(result.data.data)
          }
          catch (error) {
            alert(error.response.data.message);
          }

        }
      
        // for (let i = 0; i < users.length; i++) {
        //  if(users[i].username===form.username){
        //     if(users[i].password===form.password){
        //       alert('logged in');
        //       localStorage.setItem('user',users[i].id);
        //       window.location.href="/home";
        //       return ;
        //     }
        //     else{
        //       alert('wrong password');
        //       return ;
        //     }
        //  }
        // }
        // alert('no such user');
        // }
      
    
    
        return (
          <center>
          <div className="login-form">
            <h1 className="heading">Login Form</h1>
            <div className="fields">
              <input onChange={(e)=>handle(e)} placeholder="username" name="username" type="text" />
              <p />
              <input  onChange={(e)=>handle(e)} placeholder="password" name="password" type="password" />
              <p></p>
              <button onClick={submit}>Login</button>
            </div>
          </div>
        </center>
        )
      
}
export default LoginForm;