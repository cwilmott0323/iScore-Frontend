import "./Modal.css";
import "../index.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import 'bootstrap/dist/css/bootstrap.min.css';
import {MDBCheckbox} from "mdb-react-ui-kit";


const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
);

const validName = new RegExp(
    '^[A-Za-z ,.\'-]+$'
)

const validPassword = new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
)

async function createUser(credentials) {
    delete Object.assign(credentials, {"name": credentials["signupName"] })["signupName"];
    try {
        return await axios.post(`${process.env.REACT_APP_API_BASE_URL}accounts-create`, JSON.stringify(credentials))
    } catch (e) {
        return {
            incorrect: "Account Creation Failed"
        };
    }
}


function SignupModal({ setOpenModal, setSuccess, openModal }) {
    // Modal Stuff
    const handleClose = () => setOpenModal(false);

    // Modal Stuff
    const [agreement, setAgreement] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordVerify] = useState("");
    const [passwordVerifyBool, setPasswordVerifyBool] = useState(false);
    const [incorrect, setIncorrect] = useState(false);

    const [emailValid, setEmailValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [allowRegister, setAllowRegister] = useState(false);
    const [confirmEmailBool, setConfirmEmailBool] = useState(false);
    const [confirmEmail, setConfirmEmail] = useState("");
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
        function checkName(signupName){
            if (!signupName) {
                setSignupNameBool(true)
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

        emailCheck(email)
        emailConfirmCheck(email, confirmEmail)
        checkName(signupName)
        checkPasswordValid(password)
        checkPasswordMatch(passwordVerify, password)
    }, [confirmEmail, email, password, passwordVerify, signupName]);

    return(
        <Modal show={openModal} onHide={handleClose} contentClassName="modal-outer">
            <Modal.Header closeButton>
                <Modal.Title>Registration</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    incorrect &&
                    <Modal.Dialog className="modal-error" contentClassName="modal-error">
                        Please Try Again
                    </Modal.Dialog>
                }
                {
                    !emailValid &&
                    <Modal.Dialog className="modal-error" contentClassName="modal-error">
                        Please enter a valid email.
                    </Modal.Dialog>
                }
                {
                    !confirmEmailBool &&
                    <Modal.Dialog className="modal-error" contentClassName="modal-error">
                        Emails do not match.
                    </Modal.Dialog>
                }
                {
                    !signupNameBool &&
                    <Modal.Dialog className="modal-error" contentClassName="modal-error">
                        Name is not valid.
                    </Modal.Dialog>
                }
                {
                    !passwordValid &&
                    <Modal.Dialog className="modal-error" contentClassName="modal-error">
                        Password is not valid.
                    </Modal.Dialog>
                }
                {
                    !passwordVerifyBool &&
                    <Modal.Dialog className="modal-error" contentClassName="modal-error">
                        Passwords do not match.
                    </Modal.Dialog>
                }
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            autoFocus
                            onBlur={e => {
                                setEmail(e.target.value)
                            }
                        }
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Confirm email address</Form.Label>
                        <Form.Control
                            type="email"
                            className="form-control mt-1"
                            placeholder="name@example.com"
                            onBlur={e => {
                                setConfirmEmail(e.target.value)
                            }}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="name"
                            className="form-control mt-1"
                            placeholder="First name"
                            onBlur={e => setSignupName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            className="form-control mt-1"
                            placeholder="Password"
                            onBlur={e => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            className="form-control mt-1"
                            placeholder="Confirm Password"
                            onBlur={e => setPasswordVerify(e.target.value)}
                        />
                    </Form.Group>
                    <MDBCheckbox name="terms" label="I agree to the terms and conditions" onChange={handleChange}>
                    </MDBCheckbox>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    className="register"
                    disabled={(!agreement || !allowRegister || !passwordVerifyBool || !signupNameBool || !confirmEmailBool || !passwordValid)}
                    variant="primary" onClick={handleSubmit}>
                    Register
                </Button>
                <Button className="register" variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default SignupModal