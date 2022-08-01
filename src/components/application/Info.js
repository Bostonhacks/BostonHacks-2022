import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import Select from 'react-select';

import { countryCodeList, countryList, courseList, programmingList } from "../applicationOptions/applicationOptions";

// Application page
export default function Application() {
    const { register, handleSubmit, watch, formState: { errors }, control, reset } = useForm();
    const onSubmit = (data) => console.log(data);

    const [loading, setLoading] = React.useState(true);
    const [collegeOptions, setCollegeOptions] = React.useState([]);
    const [programmingLanguages, setProgrammingLanguages] = React.useState([]);

    const inputArr = [
        {
          type: "text",
          id: 1,
          value: ""
        }
      ];
    
      const [arr, setArr] = React.useState(inputArr);
    
      const addInput = () => {
        setArr(s => {
          const lastId = s[s.length - 1].id;
          return [
            ...s,
            {
              type: "text",
              value: ""
            }
          ];
        });
      };
    
      const handleChange = e => {
        e.preventDefault();
    
        const index = e.target.id;
        setArr(s => {
          const newArr = s.slice();
          newArr[index].value = e.target.value;
          return newArr;
        });
      };

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

                <h2>Programming Experience</h2>
                <h4>Select the programming languages/technology you have experience with</h4>
                <div>
                    <button onClick={addInput}>+</button>
                    {arr.map((item, i) => {
                        return (
                        <div className="programmingLevel">
                        
                        <input className="programmingLanguages"
                            onChange={handleChange}
                            value={item.value}
                            id={i}
                            type={item.type}
                            size="40"
                        />

                        <select className="experience" {...register("experienceLevel", { required:true },)}>
                            <option value="Novice">Novice</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Expert">Expert</option>
                        </select>
                        </div>
                        );
                    })}
                    </div>
                                


                <h2>Personal Links</h2>
                <label>Github Profile: *</label>
                <input 
                {...register("github",)} />
                <br/>
                <br/><br/>

                <label>Linkedin Profile: *</label>
                <input 
                {...register("linkedin",)} />
                <br/>
                <br/><br/>

                <label>Personal Portfolio: *</label>
                <input 
                {...register("personalPortfolio",)} />
                <br/>
                <br/><br/>

                <h2>Miscellaneous Questions</h2>

                <label>Race/Ethnicity:</label>
                <select {...register("ethinicity", { required:true })}>
                    <option value="Hispanic or Latino">Hispanic or Latino</option>
                    <option value="White">White</option>
                    <option value="Black or African American">Black or African American</option>
                    <option value="American Indian and Alaska Native">American Indian and Alaska Native</option>
                    <option value="Asian alone non-Hispanic">Asian</option>
                    <option value="Native Hawaiian and Other Pacific Islander">Native Hawaiian and Other Pacific Islander</option>
                    <option value="Other">Other</option>
                    <option value="Multiracial non-Hispanic">Multiracial non-Hispanic</option>
                    <option value="Prefer not to answer">Prefer not to answer</option>
                </select>
                <br/><br/>

                <label>Dietary Restrictions:</label>
                <select {...register("ethinicity", { required:true },)}>
                    <option value="None">None</option>
                    <option value="Gluten-free">Gluten-free</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Vegan">Vegan</option>
                    <option value="No Dairy">No dairy</option>
                    <option value="Nut-free">Nut-free</option>
                    <option value="Shellfish-free">Shellfish-free</option>
                    <option value="Kosher">Kosher</option>
                    <option value="No red meat">No red meat</option>
                    <option value="Halal">Halal</option>
                    <option value="Paleo">Paleo</option>
                    <option value="Other">Other</option>
                </select>
                <br/><br/>

                <label>Need Sleep Accomodations?:</label>
                <select {...register("sleep", { required:true },)}>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                </select>
                <br/><br/>

                <label>Autcad Experience?:</label>
                <select {...register("autocad", { required:true },)}>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                </select>
                <br/><br/>

                <h2>Why bostonhacks?</h2>
                <label>Why bostonhacks(include what you believe you will get out of bostonhacks as well as why you want to attend a hackathon): *
                </label>
                <br></br>
                <textarea style={{"width":"50%", "height":"200px", "resize":"none"}}
                {...register("bostonhacks",
                { required: true })} />
                <br/><br/>
                
                <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" 
                target="_blank"
                rel="noreferrer"
                htmlFor="codeOfConduct" 
                {...register("codeOfConudct", {required: true})}
                >Do you agree to the MLH Code of Conduct?</a>
                <input 
                    style={{"marginLeft":"5px"}}
                    type="checkbox"
                    {...register("codeOfConduct")}
                    id="codeOfConduct"
                />
                <br/>
                <br></br>


                <input type="Submit"/>
            </form>
        </div>
    )
}