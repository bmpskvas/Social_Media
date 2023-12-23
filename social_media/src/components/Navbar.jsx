import '../static/Navbar.css';

const Navbar = ({login}) => {
  const uid=localStorage.getItem('user');
  function profile(){
    window.location.href='/profile';
  }
  
  function friends(){
    window.location.href='/friends';
  }
  function logout(){
    localStorage.removeItem('user');
    window.location.href='/';
  }
  
function my(){
  window.location.href='/myposts';
}
  return (
    <div className="topnav">
      <a className="active"  >Home</a>
      {uid===null ?<a href="/signup">Sign-Up</a> : <></>}
      {uid!==null ? <a href='/profile' onClick={profile} >Profile </a> : <></> }
      {uid!==null ? <a href='/myposts' onClick={my} >My_Posts </a> : <></> }
      {/* {login!==null ? <a href='/friends' onClick={friends} >My_Friends </a> : <></> } */}
      {uid!==null ? <a href='/upload'  >Upload</a> : <></> }
      {uid!==null ? <a  onClick={logout} >Logout </a> : <></> }
    </div>
  )
}

export default Navbar;