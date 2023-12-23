import { useContext, useEffect, useState } from "react";
import { getDatabase, ref, push, set, onValue } from "firebase/database";
import '../static/Mypost.css'
import AuthContext from "../context/AuthContext";
import axios from "axios";
const My_Posts =()=>{
    const uid=localStorage.getItem('user');
    const[myposts,setMyposts]=useState([]);
    const contextData=useContext(AuthContext);
    useEffect(()=>{
        if(uid===null){
            window.location.href='/'
         }
        //  const db = getDatabase();
        // onValue(ref(db, 'posts'), (snapshot) => {
        //     const data = snapshot.val();
        //     const keys=Object.keys(data);
        //     for(let i=0;i<keys.length;i++){
        //       if(uid===keys[i]){
        //         const values=Object.values(Object.values(data[keys[i]]));
        //        setMyposts(values);
        //       }
        //     }
        // });
        async function call(){
          const res= await axios.get('http://localhost:8000/post/postview');
            const data=res.data.data;
            // console.log(data)
          setMyposts(data.filter(item => item.author_id === uid))

        }
        call()
    },[])
    return (
        <>
          {myposts.map((post)=>{
            return(
             <>
            <div className="post" style={{display:'flex', flexDirection:'column',backgroundColor:'aliceblue',width:'50%' , border:'1px solid black'}}>
                <div className="title">
              title: {post.title}
                </div>
                <div className="content">
              content: {post.content}
                </div>

            </div>
             </>

            )
          })}

        </>
    )
}
export default My_Posts;