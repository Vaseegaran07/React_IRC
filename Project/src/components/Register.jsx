import '../components/Register.css';
import pic from '../components/V.png';
import { Link } from 'react-router-dom';

function Register(){

  return (
    <div className="register-container1">
      <div className='container1'>
      <center><form className="register-form1">
        <h4 className='heading'>VLance</h4>
        <h2>Register</h2>
        <label htmlFor="firstName">First Name</label>
        <input className='infocollection'
          type="text"
          id="firstName"
        />
        <label htmlFor="lastName">Last Name</label>
        <input className='infocollection'
          type="text"
          id="lastName"
        />
        <label htmlFor="email">Email</label>
        <input className='infocollection'
          type="email"
          id="email"
        />
        <label htmlFor="password">Password</label>
        <input className='infocollection'
          type="password"
          id="password"
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input className='infocollection'
          type="password"
          id="confirmPassword"
        />
        <Link to = "/Login">
        <button type="button">
          Register
        </button>
        </Link>
        <p class = "linkbtn">I'm already a member! <Link to="/login">Sign In</Link></p>
      </form></center>
      <div className='picside'>
        <img src={`images/${pic}`} alt="" />
      </div>
      </div>
    </div>
  );
};

export default Register;
