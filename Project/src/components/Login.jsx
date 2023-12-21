import '../components/Login.css';
import pic from '../components/V.png';
import { Link } from 'react-router-dom';

function Login(){
  return (
    <div className="login-container">
      <div className='container2'>
      <form className="login-form2">
        
        <h4 className='heading'>VLance</h4>
        <h2>Login</h2>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
        />
        <br />
        <Link to="/">Forgot Password?</Link>
        <Link to="/">
        <button type="button" >
          Login
        </button>
        </Link>
        <p class = "linkbtn">New customer? <Link to="/register">Create your account</Link></p>
      </form>
      <div>
        <img src={pic} alt="" />
      </div>
      </div>
    </div>
  );
};

export default Login;
