import * as React from "react";
import { useForm } from "react-hook-form";

// Application page
export default function Application() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div>
            <h1>Application (Private)</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>General Information:</h2>
                <label>First Name:</label>
                <input 
                {...register("firstName",
                { required: true })} />
                <br/>
                {errors.firstName && <span>First Name is required.</span>}
                <br/><br/>

                <label>Last Name:</label>
                <input 
                {...register("lastName",
                { required: true })} />
                <br/>
                {errors.lastName && <span>Last Name is required.</span>}
                <br/><br/>

                <label>Date of Birth:</label>
                <input type="date"
                {...register("dateOfBirth",
                { required: true })} />
                <br/>
                {errors.dateOfBirth && <span>Date of Birth is required.</span>}
                <br/><br/>

                <label>Email:</label>
                <input 
                placeholder="john@gmail.com"
                {...register("email", 
                { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}/>
                <br/>
                {errors.email?.type === "required" && <span>Email is required.</span>}
                {errors.email?.type === "pattern" && <span>Input a valid email.</span>}
                <br/><br/>

                <label>Phone Number:</label>
                <input
                placeholder="000-000-0000"
                {...register("phoneNumber",
                { required: true, pattern: /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/ })} />
                <br/>
                {errors.phoneNumber?.type === "required" && <span>Phone number is required.</span>}
                {errors.phoneNumber?.type === "pattern" && <span>Input a valid number.</span>}
                <br/><br/>

                <input type="Submit"/>
            </form>
        </div>
    )
}