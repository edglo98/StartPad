import React from 'react'
import "./styles.css"

function LoginPage( { history } ) {

    const handleLogin = () => {
        history.replace("/")
    }

    return (
        <div className="login-card" >
            <h1 className="login-title" >Start Pad</h1>
            <h4 className="login-subtitle" >Iniciar sesion</h4>
            <hr/>
            
            <div className="login-form">

                <h6 style={{margin: "0px 10px"}}>Correo o usuario</h6>
                <input type="text" className="input-text" />
                <h6 style={{margin: "0px 10px"}}>Contraseña</h6>
                <input type="password" className="input-text" />
                <h6 style={{margin: "0px 10px"}}>Repite contraseña</h6>
                <input type="password" className="input-text" />

                <button
                    className="btn btn-primary"
                    onClick={ handleLogin }
                >
                    Login
                </button>
                <p style={{textAlign: "center"}}>
                    ¿Haz olvidado tu password?
                </p>
            </div>
        </div>
    )
}

export default LoginPage

