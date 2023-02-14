import React, {useEffect, useState} from 'react';
import SignupModal from "./components/Signup-Modal";
import SuccessModal from "./components/Success-Modal";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import './UseToken'
import UseToken from "./UseToken";
import IsAuth from "./IsAuth";
import ErrorModal from "./components/Error-Modal";

async function loginUser(credentials) {
    console.log("Creds:", credentials)
    try {
        return {
            token: await axios.post(`${process.env.REACT_APP_API_BASE_URL}accounts-login`, JSON.stringify(credentials)),
            error: null
        }

    } catch (e) {
        console.log(`Error! status: ${e}`)
        return {
            token: null,
            error: e
        };
    }
}

function Login() {
    const [openModal, setOpenModal] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState();
    const { token, setToken } = UseToken();
    const x = IsAuth(token);
    const navigate = useNavigate();
    const [email, setUserName] = useState();
    const [password, setPassword] = useState();

    console.log(x)

    useEffect(() => {
        if (x) {
            navigate("/countries");
        }
    }, [navigate, x]);


    const handleSubmit = async e => {
        e.preventDefault();
        const {token, error} = await loginUser({
            email,
            password
        });
        setError(error)
        if(!token) {
            return
        }
        setToken(token.data[0]);
    }

    return (
        <div>
            <div className="App">
                <header className="App-header">
                    {/*<h1 className="App-name">iScore</h1>*/}
                    {success && <SuccessModal/>}
                    {error && <ErrorModal error={error}/>}
                </header>
            </div>

            <div className="Auth-form-container">
                <form className="Auth-form" onSubmit={handleSubmit}>
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Log In</h3>
                        <div className="form-group-both">
                            <div className="form-group mt-3">
                                <label className="email">Email address: </label>
                                <input
                                    type="email"
                                    className="form-control mt-1"
                                    placeholder="Enter email"
                                    onChange={e => {
                                        setUserName(e.target.value)
                                        console.log("Email: ", email)
                                    }
                                        }
                                />
                            </div>
                        </div>
                        <div className="form-group-both">
                            <div className="form-group mt-3">
                                <label>Password: </label>
                                <input
                                    type="password"
                                    className="form-control mt-1"
                                    placeholder="Enter password"
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="popup">
                            <button className="submit"
                            >
                                Log in
                            </button>
                        </div>
                        {openModal && <SignupModal setOpenModal={setOpenModal} setSuccess={setSuccess} openModal={openModal}/>}
                        <p className="forgot-password text-right mt-2">
                            Forgot <a href="#">password?</a>
                        </p>
                        <p className="account">
                            Need an account?
                        </p>
                        <button type="button" className="register" onClick={() => setOpenModal(true)}>
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default Login;