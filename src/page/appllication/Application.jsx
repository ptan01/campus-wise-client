import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const Application = () => {

    const { user } = useContext(AuthContext)
    const appliedCollage = useLoaderData()

    const handleSubmit = (e)=>{
        e.preventDefault()

        const from = e.target ;
        const name = from.name.value ;
        const subject = from.subject.value ;
        const email = from.email.value ;
        const number = from.number.value ;
        const address = from.address.value ;
        const photo = from.photo.value ;
        const date = from.date.value ;
        const admissionData = {
            name,
            subject,
            email,
            number,
            address,
            photo,
            date,
            collage: appliedCollage.name ,
            collageLoaction: appliedCollage.location
        }
        axios.post('https://campus-wise-server-ptan01.vercel.app/submitApplication', admissionData)
        .then(res =>{
            if(res.data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
            from.reset()
        })
        .catch(err =>{
            console.log(err.message)
        })
        
    }
    console.log(appliedCollage)


    return (
        <div className="">
            <h1 className="text-center text-3xl font-bold text-blue-500">Please Provide your information to admission {appliedCollage.name}</h1>
            <form onSubmit={handleSubmit} className="grid lg:grid-cols-2 gap-5 shadow-2xl w-full max-w-[1000px] mx-auto p-5 rounded-lg">
                <div>
                    <label htmlFor="text" className="font-semibold">Name</label>
                    <br />
                    <input type="text" name="name" placeholder="Name" defaultValue={user?.displayName} className="input border-b-2 border-b-blue-500 border-0 input-ghost w-full max-w-xs" />
                </div>
                <div>
                    <label htmlFor="text" className="font-semibold">Subject</label>
                    <br />
                    <input type="text" name="subject" placeholder="Subject" className="input border-b-2 border-b-blue-500 border-0 input-ghost w-full max-w-xs" />
                </div>
                <div>
                    <label htmlFor="text" className="font-semibold">Email</label>
                    <br />
                    <input type="email" name="email" placeholder="Email" defaultValue={user?.email} className="input border-b-2 border-b-blue-500 border-0 input-ghost w-full max-w-xs" />
                </div>
                <div>
                    <label htmlFor="text" className="font-semibold">Phone Number</label>
                    <br />
                    <input type="text" name="number" placeholder="Phone Number" className="input border-b-2 border-b-blue-500 border-0 input-ghost w-full max-w-xs" />
                </div>
                <div>
                    <label htmlFor="text" className="font-semibold">Address</label>
                    <br />
                    <input type="text" name="address" placeholder="Address" className="input border-b-2 border-b-blue-500 border-0 input-ghost w-full max-w-xs" />
                </div>
                <div>
                    <label htmlFor="text" className="font-semibold">Photo img</label>
                    <br />
                    <input type="text" name="photo" placeholder="Url" className="input border-b-2 border-b-blue-500 border-0 input-ghost w-full max-w-xs" />
                </div>
                <div>
                    <label htmlFor="text" className="font-semibold">Date of Birth</label>
                    <br />
                    <input type="date" name="date" placeholder="Url" className="input border-b-2 border-b-blue-500 border-0 input-ghost w-full max-w-xs" />
                </div>
                <div>
                    <input type="submit" value="Submit" className="btn w-full max-w-xs btn-primary" />
                </div>
            </form>
        </div>
    );
};

export default Application;