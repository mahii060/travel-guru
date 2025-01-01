
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useState } from 'react';
import useAuth from '../../utils/useAuth';
import { useForm } from 'react-hook-form';

const Register = () => {
    // Handling show password
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Auth info
    const { createUser } = useAuth();
    // console.log(createUser);


    // Form validation
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        const { email, password } = data;
        createUser(email, password)
            .then(result => {
                // Created user successfully
                console.log(result.user);
            })
            .catch(error => {
                // Encountered error
                console.error(error)
            })
    }





    return (
        <div className="flex justify-center items-center">
            <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-gray-50 text-gray-800">
                <h2 className="mb-3 text-3xl font-semibold text-center">Register</h2>

                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-8">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="userName" className="block text-sm">User Name</label>
                            <input type="text" name="userName" id="userName" placeholder="Leroy Jenkins" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-indigo-600" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm">Email address</label>
                            <input type="email" id="email" placeholder="leroy@jenkins.com"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,4}$/,
                                        message: "Please enter a valid email address"
                                    }
                                })}
                                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-indigo-600" />
                            {/* errors will return when field validation fails  */}
                            {errors.email && <span className='text-red-600'>{errors.email.message}</span>}
                        </div>
                        <div className="space-y-2 relative">
                            <div className="flex justify-between">
                                <label htmlFor="password" className="text-sm">Password</label>
                            </div>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    placeholder="Password"
                                    {...register("password", { required: "Password is required" })}
                                    className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-indigo-600"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 text-lg right-3 flex items-center text-gray-600 hover:text-indigo-600"
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            {errors.password && <span className='text-red-600'>This field is required</span>}
                        </div>
                        <div className="space-y-2 relative">
                            <div className="flex justify-between">
                                <label htmlFor="confirmPassword" className="text-sm">Confirm Password</label>
                            </div>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    id="confirmPassword"
                                    placeholder="Confirm Password"
                                    {...register("confirmPassword", { required: "Confirm password is required" })}
                                    className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-indigo-600"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute inset-y-0 text-lg right-3 flex items-center text-gray-600 hover:text-indigo-600"
                                    aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                                >
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            {errors.confirmPassword && <span className='text-red-600'>This field is required</span>}
                        </div>
                    </div>
                    <button type="submit" className="btn btn-warning w-full ">Sign Up</button>
                </form>
                <p className="text-sm text-center text-gray-600">Already have account?
                    <Link to="/login" rel="noopener noreferrer" className="btn btn-link">Sign In</Link>
                </p>
                <div className="flex items-center w-full my-4">
                    <hr className="w-full text-gray-600" />
                    <p className="px-3 text-gray-600">OR</p>
                    <hr className="w-full text-gray-600" />
                </div>
                <div className="my-6 space-y-4">
                    <button aria-label="Login with Google" type="button" className="btn btn-primary btn-outline w-full focus:ring-2 focus:ring-offset-1 border-gray-600 focus:ring-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        <p>Login with Google</p>
                    </button>
                    <button aria-label="Login with Facebook" type="button" className="btn w-full btn-secondary btn-outline focus:ring-2 focus:ring-offset-1 border-gray-600 focus:ring-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                            <path d="M22.675 0h-21.35C.595 0 0 .6 0 1.333v21.333C0 23.4.595 24 1.325 24h11.5v-9.294H9.692V11.08h3.134V8.412c0-3.1 1.895-4.787 4.664-4.787 1.325 0 2.463.099 2.795.143v3.24h-1.917c-1.504 0-1.795.714-1.795 1.762v2.31h3.59l-.467 3.627h-3.123V24h6.116c.73 0 1.325-.6 1.325-1.333V1.333C24 .6 23.405 0 22.675 0z" />
                        </svg>
                        <p>Login with Facebook</p>
                    </button>
                    <button aria-label="Login with GitHub" role="button" className="btn btn-success btn-outline w-full focus:ring-2 focus:ring-offset-1 border-gray-600 focus:ring-success">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                        </svg>
                        <p>Login with GitHub</p>
                    </button>
                    <button aria-label="Login with Twitter" role="button" className="btn btn-info btn-outline w-full focus:ring-2 focus:ring-offset-1 border-gray-600 focus:ring-info">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
                        </svg>
                        <p>Login with Twitter</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;