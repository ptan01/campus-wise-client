import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {

    const {createUser} = useContext(AuthContext)

    // asdfF#

    const handleRegister = (e)=>{
        e.preventDefault()
        const name = e.target.name.value ;
        const photo = e.target.photo.value ;
        const email = e.target.email.value ;
        const pass = e.target.password.value ;

        createUser(email, pass)
        .then(result => {
            updateProfile(result.user, {displayName: name, photoURL: photo})
            .then(()=>{
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Register Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            })
            console.log(result.user)
        })
        .catch(err =>{
            console.log(err.message)
        })

   
    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="w-full max-w-sm">
                
                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                <h1 className="text-5xl font-bold p-4">Register now!</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;