import "bulma/css/bulma.css";
import { useState } from "react";
import Navbar from "../components/Navbar";
import "./styles.css"

const SignupPage = (): JSX.Element => {

    const [username, setUsername] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()
    const [confirmPassword, setConfirmPassword] = useState<string>()

    const handleUsernameChange = (event: any) => {
        setUsername(event.target.value)
    }
    const handleEmailChange = (event: any) => {
        setEmail(event.target.value)
    }
    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value)
    }

    const handleConfirmPasswordChange = (event: any) => {
        setConfirmPassword(event.target.value)
    }

    return (<>
        <Navbar />
        <div className="card signup-card">
            <header className="card-header">
                <p className="header">
                    Register
                </p>
            </header>
            <div className="card-content">
                <div className="content">
                    <div className="form-input">
                        <input type="text" value={username} onChange={handleUsernameChange} required />
                        <label htmlFor="">Username</label>
                    </div>
                    <div className="form-input">
                        <input type="text" value={email} onChange={handleEmailChange} required />
                        <label htmlFor="">Email</label>
                    </div>
                    <div className="form-input">
                        <input type="password" value={password} onChange={handlePasswordChange} required />
                        <label htmlFor="">Password</label>
                    </div>
                    <div className="form-input">
                        <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} required />
                        <label htmlFor="">Confirm Password</label>
                    </div>
                    <span className="flex">
                        <input type="checkbox" />
                        <p className="p">I accept the <a href="https://google.com">{"Terms & Conditions"}</a></p>
                    </span>
                    <input className="signup-button" type="button" value={"Sign up"} />
                </div>
            </div>
        </div>
    </>)
}

export default SignupPage