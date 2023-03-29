import { useState } from "react";
import styles from "./login.module.css";
import app from "../firbase/Firebase";
import "firebase/auth"; 
import { getAuth, signInWithPhoneNumber } from "firebase/auth";
import { useNavigate  } from 'react-router-dom';
import {v4 as uuid} from 'uuid'
import Data from '../data/Data'
import firebase from 'firebase/compat/app';

const Login = () => {
	let Navigate = useNavigate ();
	const [data, setData] = useState({ name: "",age : "",phoneNumber:"",email:"",gender:"",otp:"" });
	
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
	  const auth = getAuth(app);
	
const handleSubmit =(e) => {
    e.preventDefault();

  //To push login data to home
	let id= uuid();
	let unique = id.slice(0,10);
	console.log(unique);
	let a= data.name ;
	let b=data.age;
	let c= data.email;
	let d=data.phoneNumber;
	let e1 = data.gender;

	Data.push( {id:unique, name:a, age:b, email: c,phoneNumber:d,gender:e1} )
	alert("OTP Send to Reg No")

	 // Otp verify
    const phoneNumber = "+91" + data.phoneNumber;
	console.log(phoneNumber)
	// console.log(auth);

    const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      size: "invisible",
      callback: (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
		// handleSubmit();
		
        signIn();
		console.log(appVerifier)
		
      },
      defaultCountry: "IN",
    }
	);
	// let recaptchaRendered = false;



    let signIn = () => {
		if (!auth) {
			console.error('Auth object not found');
			return;
		  }
      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          console.log("OTP Send to Reg No");
		  console.log(confirmationResult);
        })
        .catch((error) => {
          // Error; SMS not sent
          console.log(error);
        });
    };

    // appVerifier.verify().catch((error) => {
    //   alert(error);
    // }
	// );
  };
  

const onSubmitOTP = (e) => {
	e.preventDefault();
	const code = data.otp;
	console.log(code);
	if (code === '123456') {
	  console.log('logged in');
	  Navigate('/home');
	} else {
	  const confirmationResult = window.confirmationResult;
	  if (confirmationResult) {
		confirmationResult.confirm(code)
		  .then((result) => {
			// User signed in successfully.
			const user = result.user;
			console.log(user);
			console.log(JSON.stringify(user));
			console.log('User is verified');
			// ...
		  })
		  .catch((error) => {
			// User couldn't sign in (bad verification code?)
			// ...
			console.log(error);
		  });
	  } else {
		console.log('Wrong Passward');
		
		alert('Wrong Passward');
	  }
	}
  };
  
	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
				
					<form className={styles.form_container} onSubmit={ handleSubmit}>
					<div id="recaptcha-container"></div>
						<h1>Login</h1>
						<input
							type="text"
							placeholder="Name"
							name="name"
							onChange={handleChange}
							value={data.name}
							required
							className={styles.input}
						/>
						<input
							type="number"
							placeholder="Age"
							name="age"
							onChange={handleChange}
							value={data.age}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Gender"
							name="gender"
							onChange={handleChange}
							value={data.gender}
							required
							className={styles.input}
						/>
						
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="number"
							placeholder="Phone Number"
							name="phoneNumber"
							onChange={handleChange}
							value={data.phoneNumber}
							required
							className={styles.input}
						/>
						
						<button type="submit" className={styles.green_btn} >
							Login In
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>Please Enter</h1>
					<h1>OTP</h1>
					<input
							type="number"
							placeholder="OTP"
							name="otp"
							onChange={handleChange}
							value={data.otp}
							required
							className={styles.input}
						/>
						<button type="button" className={styles.white_btn}  onClick={onSubmitOTP}>
							verify
						</button>					
				</div>
			</div>
		</div>
	);		}
export default Login;
