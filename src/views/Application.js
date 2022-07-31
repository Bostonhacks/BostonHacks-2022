import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import Select from 'react-select';

import { countryCodeList, countryList, courseList } from "../components/applicationOptions/applicationOptions";

// Application page
export default function Application() {
    const { register, handleSubmit, watch, formState: { errors }, control, reset } = useForm();
    const onSubmit = (data) => console.log(data);

    const [loading, setLoading] = React.useState(true);
    const [collegeOptions, setCollegeOptions] = React.useState([]);

    React.useEffect(() => {
        // Get List of Colleges.
        fetch("https://raw.githubusercontent.com/MLH/mlh-policies/master/schools.csv")
            .then((res) => res.text())
            .then((resText) => {
                let collegeOptions = resText.split("\n").map(item => {
                    let schoolName = item.startsWith('"')
                      ? item.substring(1, item.length - 1)
                      : item;
                    
                    let schoolOption = { label: schoolName, value: schoolName};
                    return schoolOption;
                });

                collegeOptions.splice(0, 1);
                collegeOptions.push({ label: "Other", value: "Other"});

                setCollegeOptions(collegeOptions);
                setLoading(false);
            })
    }, []);
      
    if (loading) {
        return;
    }

    return (
        <div>
            <h1>Application (Private)</h1>
            <p><i>Fields marked with * are required</i></p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>General Information:</h2>
                <label>First Name: *</label>
                <input 
                {...register("firstName",
                { required: true })} />
                <br/>
                {errors.firstName && <span>First Name is required.</span>}
                <br/><br/>

                <label>Last Name: *</label>
                <input 
                {...register("lastName",
                { required: true })} />
                <br/>
                {errors.lastName && <span>Last Name is required.</span>}
                <br/><br/>

                <label>Date of Birth: *</label>
                <input type="date"
                {...register("dateOfBirth",
                { required: true })} />
                <br/>
                {errors.dateOfBirth && <span>Date of Birth is required.</span>}
                <br/><br/>

                <label>Email: *</label>
                <input type="email"
                placeholder="john@gmail.com"
                {...register("email", 
                { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}/>
                <br/>
                {errors.email?.type === "required" && <span>Email is required.</span>}
                {errors.email?.type === "pattern" && <span>Input a valid email.</span>}
                <br/><br/>

                <label>Phone Number: *</label>
                <Controller
                    name="phoneCountryCode"
                    control={control}
                    defaultValue={null}
                    rules={{ required: true }}
                    render={({ field, fieldState, formState }) => 
                    <Select 
                        options={ countryCodeList.map((countryCode) => { 
                            return { label: countryCode, value: countryCode};
                        })
                        }
                        onChange={val => field.onChange(val.value)}
                    />}
                />
                <input
                type="number"
                {...register("phoneNumber",
                { required: true})} />
                <br/>
                {(errors.phoneNumber?.type === "required" || errors.phoneCountryCode?.type === "required") && <span>Phone number is required.</span>}
                <br/><br/>

                <h2>Address Information</h2>
                <label>Address: *</label>
                <input 
                {...register("address",
                { required: true })} />
                <br/>
                {errors.address && <span>Address is required.</span>}
                <br/><br/>

                <label>Country: *</label>
                <Controller
                    name="country"
                    control={control}
                    defaultValue={null}
                    rules={{ required: true }}
                    render={({ field, fieldState, formState }) => 
                    <Select 
                        options={ countryList.map((countryName) => { 
                            return { label: countryName, value: countryName};
                        })
                        }
                        onChange={val => field.onChange(val.value)}
                    />}
                />
                <br/>
                {errors.country && <span>Country is Required</span>}
                <br/><br/>

                <label>City: *</label>
                <input 
                {...register("city",
                { required: true })} />
                <br/>
                {errors.city && <span>City is required.</span>}
                <br/><br/>

                <label>State:</label>
                <input 
                {...register("state")} />
                <br/>
                <br/><br/>

                <label>Zip Code: *</label>
                <input 
                {...register("zipCode",
                { required: true })} />
                <br/>
                {errors.zipCode && <span>Zip Code is required.</span>}
                <br/><br/>

                <input
                    type="checkbox"
                    {...register("outOfState")}
                    id="outOfState"
                />
                <label htmlFor="outOfState">
                    Out of State?
                </label>
                <br/>
                {errors.zipCode && <span>Zip Code is required.</span>}
                <br/><br/>

                <h2>Education Information</h2>
                <label>Highest Education Level: *</label>
                <select 
                {...register("highestEducation",
                { required: true })}>
                    <option value="High School">High School</option>
                    <option value="College Freshman">College Freshman</option>
                    <option value="College Sophomore">College Sophomore</option>
                    <option value="College Junior">College Junior</option>
                    <option value="College Senior">College Senior</option>
                    <option value="Masters">Masters</option>
                    <option value="PhD">PhD</option>
                </select>
                <br/>
                {errors.highestEducation?.type === "required" && <span>Highest Education Level is required.</span>}
                <br/><br/>

                <label>College:</label>
                <Controller
                    name="college"
                    control={control}
                    defaultValue={null}
                    render={({ field, fieldState, formState }) => 
                    <Select 
                        options={collegeOptions}
                        onChange={val => field.onChange(val.value)}
                    />}
                />
                <br/><br/>

                <label>Year:</label>
                <select {...register("collegeYear")}>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                </select>
                <br/><br/>

                <label>Major:</label>
                <Controller
                    name="collegeMajor"
                    control={control}
                    defaultValue={null}
                    render={({ field, fieldState, formState }) => 
                    <Select 
                        options={ courseList.map((courseName) => { 
                            return { label: courseName, value: courseName};
                        })
                        }
                        onChange={val => field.onChange(val.value)}
                    />}
                />
                <br/><br/>

                <label>Minor:</label>
                <Controller
                    name="collegeMinor"
                    control={control}
                    defaultValue={null}
                    render={({ field, fieldState, formState }) => 
                    <Select 
                        options={ courseList.map((courseName) => { 
                            return { label: courseName, value: courseName};
                        })
                        }
                        onChange={val => field.onChange(val.value)}
                    />}
                />
                <br/><br/>

                <input type="Submit"/>
            </form>
        </div>
    )
}