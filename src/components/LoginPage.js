import React, {useRef, useState} from 'react';
import {useNavigate,Link} from 'react-router-dom';
import supabase from "../config/supabaseClient.";
import Create from "../pages/Create";

const LoginPage = () => {
    // useRef
    const emailInput = useRef();
    const passwordInput = useRef();

    // useNavigate
    const navigate = useNavigate();

    // useState  | useEffect
    const [errorMessage, setErrorMsg] = useState();

    const cacheCurrentUser = (data) => {
        localStorage.setItem('currentUserId', data.user.id);
        localStorage.setItem('currentUserSession', JSON.stringify(data.session));
        localStorage.setItem('currentUserObj', JSON.stringify(data.user));
    };

    const handleLoginWithPassword =async (e)=>{
        e.preventDefault();

        const {data, error} = await supabase.auth.signInWithPassword({
            email: emailInput.current.value, password: passwordInput.current.value
        });

        if (data.user) {
            navigate('/')
            cacheCurrentUser(data)
            console.log(data.user)
        }
        if(error){
            console.log(error)
            setErrorMsg('Incorrect Email or Password')
        }
    }



    return (

         <div className="page update">
            <form onSubmit={handleLoginWithPassword}>
                {errorMessage && <p className="error">{errorMessage}</p>}
                <label htmlFor="Email">Email:</label>
                <input
                    type="text"
                    id="Email"
                    ref={emailInput}
                />

                <label htmlFor="password">Password:</label>
                <input type="password"
                    id="password"
                    ref={passwordInput}
                />

                <button>Signup</button>



            </form>
             <form>
                 {/*<a href="" className="account" onClick={<Create/>}>Arleady have an account</a>*/}
                 <Link  to='/signup'>Don't have an account</Link>
             </form>


         </div>
    );
};

export default LoginPage;