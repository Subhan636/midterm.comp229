
import React from 'react';
import { useForm } from 'react-hook-form';

function SignUpUser() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        if (data.password !== data.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        alert(JSON.stringify(data, null, 2));
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>First Name: </label>
                <input {...register('firstName', { required: "First name is required" })} />
                {errors.firstName && <p>{errors.firstName.message}</p>}
            </div>
            <div>
                <label>Last Name: </label>
                <input {...register('lastName', { required: "Last name is required" })} />
                {errors.lastName && <p>{errors.lastName.message}</p>}
            </div>
            <div>
                <label>User Name: </label>
                <input {...register('userName', { required: "User name is required" })} />
                {errors.userName && <p>{errors.userName.message}</p>}
            </div>
            <div>
                <label>Email: </label>
                <input {...register('email', { required: "Email is required", pattern: /^\S+@\S+$/i })} />
                {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>
                <label>Password: </label>
                <input type="password" {...register('password', { required: "Password is required" })} />
                {errors.password && <p>{errors.password.message}</p>}
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" {...register('confirmPassword', { required: "Please confirm your password" })} />
                {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
            </div>
            <div>
                <button type="submit">Sign Up</button>
            </div>
        </form>
    );
}

export default SignUpUser;
