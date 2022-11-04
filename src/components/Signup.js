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

    const handleLoginWithPassword =async (e)=>{
        e.preventDefault();

        let {data, error} = await supabase.auth.signUp({
            email: emailInput.current.value, password: passwordInput.current.value
        });

        if (data.user) {
            navigate('/')
            console.log(data.user)
        }
        if(error){
            console.log(error)
        }
    }



    return (

        <div className="page update">

            <form onSubmit={handleLoginWithPassword}>

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

                {errorMessage && <p className="error">{errorMessage}</p>}

            </form>
            <form>
                {/*<a href="" className="account" onClick={<Create/>}>Arleady have an account</a>*/}
                <Link  to='/loginPage'>Arleady have an account</Link>
            </form>


        </div>
    );
};

export default LoginPage;