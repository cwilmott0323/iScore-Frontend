import "./Modal.css";
import React, {useEffect, useState} from "react";
import axios from "axios";

async function createUser(credentials) {
    delete Object.assign(credentials, {["name"]: credentials["signupName"] })["signupName"];
    try {
        return await axios.post('https://pbhzcdqx4c.execute-api.us-east-2.amazonaws.com/test/accounts-create', JSON.stringify(credentials))
    } catch (e) {
        return {
            incorrect: "Account Creation Failed"
        };
    }
}
function SignupModal({ setOpenModal, setSuccess }) {
    const [agreement, setAgreement] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordVerify] = useState("");
    const [passwordVerifyBool, setPasswordVerifyBool] = useState(false);
    const [incorrect, setIncorrect] = useState(false);

    const [emailValid, setEmailValid] = useState();
    const [passwordValid, setPasswordValid] = useState(false);
    const [allowRegister, setAllowRegister] = useState(false);
    const [confirmEmailBool, setConfirmEmailBool] = useState(false);
    const [confirmEmail, setConfirmEmail] = useState(false);
    const [signupName, setSignupName] = useState("");
    const [signupNameBool, setSignupNameBool] = useState(true);

    const handleSubmit = async e => {
        e.preventDefault();
        const resp = await createUser({
            email,
            password,
            signupName
        });

        if (resp.status !== 200) {
            setIncorrect(true)
        } else {
            setOpenModal(false)
            setSuccess(true)
        }
    }

    const handleChange = (event) => {
        setAgreement(event.target.checked);
    }


    const validEmail = new RegExp(
        '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
    );

    const validName = new RegExp(
        '^[A-Za-z ,.\'-]+$'
    )

    const validPassword = new RegExp(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
    )
    function emailCheck(userEmail) {

        if (!email) {
            setEmailValid(true)
            setAllowRegister(false)
            return
        }

        if (validEmail.test(userEmail)) {
            setEmailValid(true)
            setAllowRegister(true)
        } else {
            setEmailValid(false)
            setAllowRegister(false)
        }
    }

    function emailConfirmCheck(email, confirmEmail) {
        if (!confirmEmail) {
            setConfirmEmailBool(true)
            setAllowRegister(false)
            return
        }
        if (email !== confirmEmail){
            setConfirmEmailBool(false)
        } else {
            setConfirmEmailBool(true)
        }
    }

    function checkName(signupName){
        if (!signupName) {
            setSignupName(true)
            setAllowRegister(false)
            return
        }
        if (validName.test(signupName)) {
            setSignupNameBool(true)
            setAllowRegister(true)
        } else {
            setSignupNameBool(false)
            setAllowRegister(false)
        }
    }

    function checkPasswordValid(password) {
        if (!password) {
            setPasswordValid(true)
            setAllowRegister(false)
            return
        }
        if (validPassword.test(password)) {
            setPasswordValid(true)
            setAllowRegister(true)
        } else {
            setPasswordValid(false)
            setAllowRegister(false)
        }
    }

    function checkPasswordMatch(passwordVerify, password) {
        if (!passwordVerify) {
            setPasswordVerifyBool(true)
            setAllowRegister(false)
            return
        }
        if (passwordVerify !== password) {
            setPasswordVerifyBool(false)
            setAllowRegister(false)
        } else {
            setPasswordVerifyBool(true)
            setAllowRegister(true)
        }
    }

    useEffect(() => {
        emailCheck(email)
        emailConfirmCheck(email, confirmEmail)
        checkName(signupName)
        checkPasswordValid(password)
        checkPasswordMatch(passwordVerify, password)
    }, [checkName, checkPasswordValid, confirmEmail, email, emailCheck, password, signupName, checkPasswordMatch, passwordVerify]);

    return(
        <div className="modalBackground">
            <div className="modalContainer">
            <article>
                <button className="Close" onClick={() => setOpenModal(false)}> &times; </button>
                    {/*<form>*/}
                        <div className="Auth-form-content">
                            <h3 className="Auth-form-title">Register</h3>
                            {incorrect && <div>Please Try Again</div>}
                            <div className="form-group mt-3">
                                <div>
                                    {!emailValid && <div>Please enter a valid email.</div>}
                                    {!confirmEmailBool && <div>Emails do not match.</div>}
                                    {!signupNameBool && <div>Name is not valid.</div>}
                                    {!passwordValid && <div>Password is not valid.</div>}
                                    {!passwordVerifyBool && <div>Passwords do not match.</div>}
                                </div>
                                <label className="email">Email address: </label>
                                <input
                                    type="email"
                                    className="form-control mt-1"
                                    placeholder="Enter email"
                                    onBlur={e => {
                                        setEmail(e.target.value)
                                    }
                                    }
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Confirm Email: </label>
                                <input
                                    type="email"
                                    className="form-control mt-1"
                                    placeholder="Enter email again"
                                    onBlur={e => setConfirmEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>First Name: </label>
                                <input
                                    type="name"
                                    className="form-control mt-1"
                                    placeholder="Enter first name"
                                    onBlur={e => setSignupName(e.target.value)}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Password: </label>
                                <input
                                    type="password"
                                    className="form-control mt-1"
                                    placeholder="Enter password"
                                    onBlur={e => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Confirm Password: </label>
                                <input
                                    type="password"
                                    className="form-control mt-1"
                                    placeholder="Enter password again"
                                    onBlur={e => setPasswordVerify(e.target.value)}
                                />
                            </div>
                            <div>
                                <input type="checkbox" name="terms" value="yes" onChange={handleChange}/>
                                    <label htmlFor="terms"> I agree to the terms and conditions</label>
                            </div>
                        </div>
                    {/*</form>*/}
            </article>
            <footer>
                <button disabled={(!agreement || !allowRegister || !passwordVerifyBool || !signupNameBool || !confirmEmailBool || !passwordValid)} onClick={handleSubmit}>Register</button>
                <button onClick={() => setOpenModal(false)} >Close</button>
            </footer>
            </div>
        </div>
    )
}

export default SignupModal