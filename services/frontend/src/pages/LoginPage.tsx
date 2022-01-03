import "bulma/css/bulma.css";
import { useState } from "react";
import "./styles.css"

const LoginPage = (): JSX.Element => {

    const [username, setUsername] = useState<string>()
    const [password, setPassword] = useState<string>()

    const handleUsernameChange = (event: any) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value)
    }

    return (<>
        <div className="card signup-card">
            <header className="card-header">
                <p className="header">
                    Login
                </p>
            </header>
            <div className="card-content">
                <div className="content">
                    <div className="form-input">
                        <input type="text" value={username} onChange={handleUsernameChange} required />
                        <label htmlFor="">Username</label>
                    </div>
                    <div className="form-input">
                        <input type="password" value={password} onChange={handlePasswordChange} required />
                        <label htmlFor="">Password</label>
                    </div>
                    <input className="signup-button" type="button" value={"Log in"} />
                </div>
            </div>
        </div>
    </>)
}

export default LoginPage