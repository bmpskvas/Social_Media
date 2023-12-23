import { useContext, useEffect, useState } from "react";
import users from '../database/users.json'
import posts from '../database/posts.json'
import { Navigate, useNavigate } from "react-router-dom";
import { useLocation} from "react-router-dom";
import { getDatabase, ref, push, set,onValue } from "firebase/database";
import AuthContext from "../context/AuthContext";
import axios from "axios";
 function Home(){
  // const location = useLocation();
  // const data = location.state;  
    const uid=localStorage.getItem('user');
    const [user,setUser]=useState();
    const [allpost,setAllPost]=useState([]);
    const navigate=useNavigate();
   const [str,setStr]=useState("");
   const contextData=useContext(AuthContext);
  //  let data=[];
    //  allPosts is a list of objects ,looks like:
    //  {
    //   id:user_id;
    //   title: post_title;
    //   content:post_content
    //  }

     useEffect(()=>{
      if(uid===null){
         window.location.href='/'
      }
      async function call(){
        const res= await axios.get('http://localhost:8000/post/postview');
       setAllPost(res.data.data)
      }
      call()
      // const location = useLocation();
      // const data = location.state; 
      // console.log(data);
      //  for (let i = 0; i < users.length; i++) {
      //      if(users[i].id===uid){
      //        setUser(users[i].fullname);
      //      }
      //  }

      //  //object traversal
      //  const keys=Object.keys(posts);
      //  const tmp=[];
      //  keys.map(key=>{
      //      const user_post=posts[key];
      //      user_post.map(post=>{
      //       tmp.push({id:key,title:post.title, content:post.content})
      //      });

      //  });
      //  setAllPost(tmp);
      // const db = getDatabase();
      // onValue(ref(db, 'posts'), (snapshot) => {
      //   const data = snapshot.val();
      //   const usernames = Object.keys(data);
      //   const tmp = [];
  
      //   for (let i = 0; i < usernames.length; i++) {
      //     const posts = data[usernames[i]];
      //     const postValues = Object.values(posts);
      //     postValues.map(p => {
      //       tmp.push({ id: usernames[i], title: p.title, content: p.content })
      //     })
      //   }
      //   setAllPost(tmp);    
        
      });
    //   onValue(ref(db, 'users'), (snapshot) => {
    //     const data = snapshot.val();
    //     const k=Object.keys(data);
    //     const keyvalues = Object.values(data);
       
    //     for(let i=0;i<k.length;i++){
    //       if(k[i]===uid){
           
    //         setStr(keyvalues[i].fullname);
    //       }
    //   }

    // });

      
        
    //  }, []);
     const productStyles = {
      height: "100px", 
      textAlign: "center",
      color: "#fff", 
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "18px", 
      fontWeight: "bold", 
      borderRadius: "5px", 
      cursor: "pointer", 
      transition: "background-color 0.3s ease", 
      
    }
     const centerTextStyle = {
        textAlign: "center",
        fontSize: "24px", 
        margin: "20px 0", 
        color: "black",
        fontWeight: "bold",
        textTransform: "uppercase",
    };

   
    function postinfo(post){
      navigate('/post',{
        state:post 
      })
    }
    return (
        <>
        
        <div style={centerTextStyle}>
                Hello {uid}
         </div>
        <p></p>
        <center>
        <div className="all-post" style={productStyles}>
          {allpost.map(post=>{
            return(
              <div className="posts" style={{height:'50px' , backgroundColor:'grey',width:'100px',border:'2px solid white' ,cursor:'pointer' ,textAlign:'center'}} onClick={()=>postinfo(post)}>
              {post.title}
              </div>
            )
          })}

        </div>
        </center>
        </>
    )
}
export default Home;