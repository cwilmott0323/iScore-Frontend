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
    try {
        console.log(`${process.env.REACT_APP_API_BASE_URL}accounts-login`)
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
        <div className="hero h-screen w-screen bg-base-200">
            <div className="hero-content w-96 align-stretch">
                <div className="card shadow-2xl bg-base-100 w-full h-full align-stretch">
                    <div className="card-body justify-between">
                        {success && <SuccessModal/>}
                        {error && <ErrorModal error={error}/>}
                        <form onSubmit={handleSubmit}>
                        <div className="form-control justify-between" >
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered"
                                   onChange={e => {
                                    setUserName(e.target.value)
                                    console.log("Email: ", email)
                            }}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered"
                                   onChange={e => setPassword(e.target.value)}/>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-[#04aa6d] hover:bg-[#198754] border-[#04aa6d]">Login</button>
                        </div>
                            {openModal && <SignupModal setOpenModal={setOpenModal} setSuccess={setSuccess} openModal={openModal}/>}
                        </form>
                        <div className="form-control mt-6">
                            <label  onClick={() => setOpenModal(true)} className="btn bg-[#04aa6d] hover:bg-[#198754] border-[#04aa6d]" htmlFor="my-modal-4" >Signup</label>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;