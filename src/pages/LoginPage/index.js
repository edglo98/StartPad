import React from 'react'
import "./styles.css"

function LoginPage( { history } ) {

    const handleLogin = () => {
        history.replace("/")
    }

    return (
        <div>
            <h1>Login</h1>
            <hr/>

            <button
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Login
            </button>
        </div>
    )
}

export default LoginPage

