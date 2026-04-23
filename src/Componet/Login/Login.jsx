import { Link, useLocation, useNavigate } from 'react-router';
import NavBar from '../NavBar/NavBar';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const Login = () => {
    const { userLogIn } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        userLogIn(email, password)
            .then(data => {
                console.log(data);
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <NavBar></NavBar>
            <div className="card mt-20 bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <form onSubmit={handleLogin} className='md:w-3/4 fieldset'>
                        <label className="label">Email</label>
                        <input type="email" required name='email' className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" required name='password' className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </form>
                    <p>Don't have any account <Link to="/register" className='text-blue-500 font-bold'>Register</Link></p>
                </div>

            </div>

        </div>

    );
};

export default Login;