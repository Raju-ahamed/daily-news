import React, { useContext } from 'react';
import { Link } from 'react-router';
import NavBar from '../NavBar/NavBar';
import { AuthContext } from '../Context/AuthProvider';


const Register = () => {
    const { creatUser } = useContext(AuthContext)
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = form.get('name');
        const photo = form.get('photo');
        console.log(name, photo, email, password);
        creatUser(email, password)
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <NavBar></NavBar>
            <div className="card mt-20 bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <form onSubmit={handleRegister} className='md:w-3/4 fieldset'>
                        <label className="label">Name</label>
                        <input type="text" required name='name' className="input" placeholder="Name" />
                        <label className="label">Photo URL</label>
                        <input type="text" required name='photo' className="input" placeholder="Photo URL" />
                        <label className="label">Email</label>
                        <input type="email" required name='email' className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" required name='password' className="input" placeholder="Password" />
                        <button className="btn btn-neutral mt-4">Sgin Up</button>
                    </form>
                    <p>Already have an account <Link to="/login" className='text-blue-500 font-bold'>Login</Link></p>
                </div>

            </div>
        </div>
    );
};

export default Register;