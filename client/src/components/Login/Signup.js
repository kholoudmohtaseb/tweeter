import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from "@material-ui/lab/Alert";

function Signup(props) {
    const [state, setState] = useState({
        email: "",
        password: "",
        username: "",
        name: "",
        confirmPassword: "",
        successMessage: null,
        value: '',
        alert: false

    })
    const handleChange = (e) => {
        const { id, value } = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }
    const sendDetailsToServer = () => {
        if (state.email && state.password) {
            const payload = {
                "email": state.email,
                "password": state.password,
                "username": state.username,
                "name": state.name
            }
            axios.post('/signup', payload)
                .then(function (response) {
                    if (response.status === 200) {
                        console.log('user created')
                        localStorage.setItem('token', response.data)
                        window.location.href = '/home'
                    }
                    else if (response.status === 201) {
                        setState({
                            value: "already existed username",
                            alert: true,
                        });
                    }
                    else if (response.status === 206) {
                        setState({
                            value: "already used email",
                            alert: true,
                        });
                    }

                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            console.log('Please enter valid username and password')
        }

    }
    const handleSubmitClick = (e) => {
        e.preventDefault();
        if (state.password === state.confirmPassword) {
            sendDetailsToServer()
        } else {
            setState({
                value: "Password not matching",
                alert: true,
            });
        }
    }
    return (
        <div className="signup-form">
            <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
                <form>
                    <nav className="navbar navbar-dark bg-primary">
                        <div className="row col-12 d-flex justify-content-center text-white">
                            <span className="h3">Register</span>
                        </div>
                    </nav>
                    <div className="form-group text-left">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input type="email"
                            className="form-control"
                            id="email"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            value={state.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group text-left">
                        <label >username</label>
                        <input
                            className="form-control"
                            id="username"
                            placeholder="username"
                            value={state.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group text-left">
                        <label >name</label>
                        <input
                            className="form-control"
                            id="name"
                            placeholder="name"
                            value={state.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            value={state.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="exampleInputPassword1">Confirm Password</label>
                        <input type="password"
                            className="form-control"
                            id="confirmPassword"
                            placeholder="Confirm Password"
                            value={state.confirmPassword}
                            onChange={handleChange}
                        />
                    </div>
                    {state.alert && (
                        <>
                            <br></br>
                            <Alert severity="error">{state.value}</Alert>
                        </>
                    )}
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={handleSubmitClick}
                    >
                        Register
                </button>
                </form>
                <div className="alert alert-success mt-2" style={{ display: state.successMessage ? 'block' : 'none' }} role="alert">
                    {state.successMessage}
                </div>
                <div className="mt-2">
                    <span>Already have an account? </span>
                    {/* <span className="loginText" onClick={() => redirectToLogin()}>Login here</span> */}
                </div>

            </div>
        </div>

    )
}

export default Signup;