import React, {useEffect, useState} from "react";
import axios from "axios";

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


function SignupModal({setOpenModal, openModal, setSuccess}){

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

    const handleSubmitSignUp = async e => {
        console.log("Handle Submit")
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
   return (

       <div>
       <input type="checkbox" id="my-modal-4" className="modal-toggle" />
   <label htmlFor="my-modal-4" className="modal cursor-pointer">
      <label className="modal-box">
          {
              incorrect &&
              <div className="modal-error" >
                  Please Try Again
              </div>
          }
          {
              !emailValid &&
              <div className="modal-error" >
                  Please enter a valid email.
              </div>
          }
          {
              !confirmEmailBool &&
              <div className="modal-error" >
                  Emails do not match.
              </div>
          }
          {
              !signupNameBool &&
              <div className="modal-error" >
                  Name is not valid.
              </div>
          }
          {
              !passwordValid &&
              <div className="modal-error" >
                  Password is not valid.
              </div>
          }
          {
              !passwordVerifyBool &&
              <div className="modal-error" >
                  Passwords do not match.
              </div>
          }
              <div className="form-control justify-between" >
                  <label className="label">
                      <span className="label-text">Email</span>
                  </label>
                  <input type="text" placeholder="email" className="input input-bordered"
                         onBlur={e => {
                             setEmail(e.target.value)
                             console.log("Email: ", email)
                         }}
                  />
              </div>
              <div className="form-control">
                  <label className="label">
                      <span className="label-text">Confirm Email</span>
                  </label>
                  <input type="email" placeholder="email" className="input input-bordered"
                        onBlur={e => {
                        setConfirmEmail(e.target.value)
                        }}/>

                  <label className="label">
                      <span className="label-text">First Name</span>
                  </label>
                  <input type="text" placeholder="First Name" className="input input-bordered"
                         onBlur={e => setSignupName(e.target.value)}/>

                  <label className="label">
                      <span className="label-text">Password</span>
                  </label>
                  <input type="password" placeholder="password" className="input input-bordered"
                         onBlur={e => setPassword(e.target.value)}/>

                  <label className="label">
                      <span className="label-text">Confirm Password</span>
                  </label>
                  <input type="password" placeholder="password" className="input input-bordered"
                         onBlur={e => setPasswordVerify(e.target.value)}/>

                  <div className="form-control">
                      <label className="cursor-pointer label">
                          <span className="label-text">I agree to the terms</span>
                          <input onChange={handleChange} type="checkbox" className="checkbox checkbox-success" />
                      </label>
                  </div>

                  <div className="form-control mt-6">
                      <button disabled={(!agreement || !allowRegister || !passwordVerifyBool || !signupNameBool || !confirmEmailBool || !passwordValid)} onClick={handleSubmitSignUp} className="btn bg-[#04aa6d] hover:bg-[#198754] border-[#04aa6d]">Submit</button>
                  </div>
                  <div className="form-control mt-6">
                      <label htmlFor="my-modal-4" className="btn bg-[#04aa6d] hover:bg-[#198754] border-[#04aa6d]">Close</label>
                  </div>
              </div>
      </label>
   </label>

       </div>
   );
}

export default SignupModal
