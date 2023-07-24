import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaGoogle } from 'react-icons/fa';
import Swal from "sweetalert2";

const Login = () => {

    const { loginUser, googleLogin } = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const pass = e.target.password.value;
        loginUser(email, pass)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            })
            .catch(err => {
                console.log(err.message)
            })
        console.log(email, pass)
    }

    const handleGoogleLogin =(e)=>{
        e.preventDefault()
        googleLogin()
        .then(result => {
            console.log(result)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Google Login Successfully',
                showConfirmButton: false,
                timer: 1500
              })
        })
        .catch(err => {
            console.log(err.message)
        })
    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="w-full max-w-sm">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl p-4 font-bold">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <label className="label">
                                <p className="label-text-alt">New here please <Link className="link link-hover" to="/register">Register</Link></p>

                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <button onClick={handleGoogleLogin} className="btn mt-5 gap-2">
                            With Google
                            <FaGoogle />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;