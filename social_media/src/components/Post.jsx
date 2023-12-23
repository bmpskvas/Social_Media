import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import users from '../database/users.json'
import AuthContext from "../context/AuthContext";
const Post =()=>{
    const location = useLocation();
    const data = location.state;
    const uid=localStorage.getItem('user');
    const [authordata,setAuthordata] =useState([]);
   const authdata=useContext(AuthContext);
    useEffect(()=>{
        if(uid===null  ){
            window.location.href='/'
        }
        for (let i = 0; i < users.length; i++) {
            if(users[i].id==data.id)   {
                setAuthordata(users[i]);
            }
        }
       
    },[])

    return(
        <>
      { uid!=null ? <> author: {data.author_id}
        <p> </p>
        title: {data.title}
        <p></p>
        content: {data.content}
        <p></p> </> : <></>}
        </>
    )
}
export default Post;