import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import Select from 'react-select';
import "./styles.css";
import { countryCodeList, countryList, courseList, programmingList } from "../applicationOptions/applicationOptions";
import { db } from "../../firebase/firebase-config";
import { query,
getDocs,
collection,
where,
doc,
updateDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import shadows from "@material-ui/core/styles/shadows";
import { Container, IconButton } from "@material-ui/core";

// Application page
export default function Application({applicationId}) {
    const { register, handleSubmit, watch, formState: { errors }, control, reset } = useForm();
    const navigate = useNavigate();
    async function onSubmit(data) {
        // Allow null college minor
        if (!data.collegeMinor) {
            data.collegeMinor = "N/A"
        }

        // Convert programming experience jsons to one string
        let strings = []
        programmingInputs.forEach(function(language) {
            strings.push(JSON.stringify(language))
        })
        data.languageExperience = strings.join(", ")

        console.log("submit")
        console.log(data)
        const userDoc = doc(db, "applications", applicationId);
        await updateDoc(
            userDoc,
            {
                firstName: data.firstName,
                lastName: data.lastName,
                dateOfBirth: data.dateOfBirth,
                email: data.email,
                phoneNumber: data.phoneNumber,

                address: data.address,
                outOfState: data.outOfState,

                highestEducation: data.highestEducation,
                college: data.college,
                collegeYear: data.collegeYear,
                collegeMajor: data.collegeMajor,
                collegeMinor: data.collegeMinor,

                languageExperience: data.languageExperience,
                pastHackathons: data.pastHackathons,

                github: data.github,
                linkedin: data.linkedin,
                personalPortfolio: data.personalPortfolio,

                ethnicity: data.ethnicity,
                dietaryRestrictions: data.dietaryRestrictions,
                sleep: data.sleep,
                autocad: data.autocad,
                teamFormation: data.teamFormation,

                bostonhacks: data.bostonhacks,

                status: "Submitted"
            }
        )
        navigate("/login");
    }
    const [loading, setLoading] = React.useState(true);
    const [collegeOptions, setCollegeOptions] = React.useState([]);
    const [address, setAddress] = React.useState("");
    const [addressOptions, setAddressOptions] = React.useState([]);
    const [programmingInputs, setProgrammingInputs] = React.useState([
        { language: '', experienceLevel: '',},
    ])

    const handleChangeLanguage = (index, event) => {
        const values = [...programmingInputs]
        values[index].language = event.value
        values[index].experienceLevel = values[index].experienceLevel === '' ? "Novice" : values[index].experienceLevel
        setProgrammingInputs(values)
        // console.log(values)
    }

    const handleChangeExperience = (index, event) => {
        const values = [...programmingInputs]
        values[index].experienceLevel = event.target.value
        setProgrammingInputs(values)
        //console.log(values)
    }

    const handleAddInput = () => {
        const values = [...programmingInputs]
        if (values.length === 5) {
            //console.log(values)
            return values
        } else {
        setProgrammingInputs([...programmingInputs, { language: '', experienceLevel: '' }])
        //console.log(values)
        }
  }

    const handleRemoveInput = (index) => {
        const values = [...programmingInputs];
        values.splice(index, 1);
        setProgrammingInputs(values)
        //console.log(values)
    }

    const [currSubForm, setCurrSubForm] = React.useState(0);

    const addressSearch = (e) => {
        const formattedAddress = address.replace(/\s/g, "%20");

        fetch("https://api.geoapify.com/v1/geocode/autocomplete?text=" + formattedAddress + "&format=json&apiKey=" + process.env.REACT_APP_GEOAPIFY_KEY)
            .then(response => {
                response.json()
                .then(data => {
                    setAddressOptions(data.results);
                })
            })
    }


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
        <div className="background" style={{color: "white", background: "transparent"}}>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className={currSubForm !== 0 ? "hide-form" : ""} >
                    <h2>General Information:</h2>
                    <p><i>Fields marked with * are required</i></p>
                    <label>First Name: <i>*</i></label>
                    <input 
                    {...register("firstName",
                    { required: true })} />
                    <br/>
                    {errors.firstName && <span>Please enter a first name</span>}
                    <br/><br/>


                    <label>Last Name: <i>*</i></label>
                    <input 
                    {...register("lastName",
                    { required: true })} />
                    <br/>
                    {errors.lastName && <span>Please enter a last name</span>}
                    <br/><br/>

                    <label>Date of Birth: <i>*</i></label>
                    <input type="date"
                    {...register("dateOfBirth",
                    { required: true })} />
                    <br/>
                    {errors.dateOfBirth && <span>Please enter a value</span>}
                    <br/><br/>

                    <label>Email: <i>*</i></label>
                    <input type="email"
                    placeholder="  john@gmail.com"
                    {...register("email", 
                    { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}/>
                    <br/>
                    {errors.email?.type === "required" && <span>Please enter an email</span>}
                    {errors.email?.type === "pattern" && <span>Please enter a valid email</span>}
                    <br/><br/>

                    <label>Phone Number: <i>*</i></label>
                    <div className="selecter">
                        {/* <div className="phone">
                        <Controller
                            name="phoneCountryCode"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => 
                            <Select 
                                options={ countryCodeList.map((countryCode) => { 
                                    return { label: countryCode, value: countryCode};
                                })
                                }
                                {...field}
                            />}
                        />
                        </div> */}
                        <input 
                        style={{paddingLeft:'60px'}}
                        type="number"
                        {...register("phoneNumber",
                        { required: true})} />
                    </div>
                    <br/>
                    {(errors.phoneNumber?.type === "required" || errors.phoneCountryCode?.type === "required") && <span>Please enter a phone number</span>}
                    <br/><br/>
                </div>
                
                <div className={currSubForm !== 1 ? "hide-form" : ""}>
                    <h2>Current Semester Address Information</h2>
                    <p><i>Fields marked with * are required</i></p>
                    <label>Address: <i>*</i></label>
                    
                    <div  >
                    <Controller
                        style = {{
                            backgroundColor: 'none',
                            border: 'none',
                            background:'none',
                            color:'white',
                            fontWeight:'bold',
                        }}
                        name="address"
                        control={control}
                        defaultValue={null}
                        rules={{ required: true }}
                        render={({ field, fieldState, formState }) => 
                        
                        <input
                            type="text"
                            value={address}
                            onChange={e => {
                                field.onChange(e.target.value);
                                setAddress(e.target.value);
                            }}
                        />}
                        
                    />
                     <div style={{
                        "cursor": "pointer", 
                        display: "none",
                        "backgroundColor": "white", 
                        "width": "45px",
                        }} onClick={() => addressSearch()}>
                        Search
                    </div>
                    </div>
                   
                    {addressOptions.map((option) => {
                        return <div style={{"cursor": "pointer"}} onClick={() => {
                            setAddress(option.formatted);
                            setAddressOptions([]);
                        }}>
                            {option.formatted}
                        </div>
                    })}
                    <br/>
                    {errors.address && <span>Please enter an address</span>}
                    <br/><br/>
                    
                    <label>Out of State?: <i>*</i></label>
                    <div className="field">
                        <select {...register("outOfState", { required:true },)}>
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                    </div>
                    <br/>
                    {errors.outOfState?.type === "required" && <span>Please enter a value</span>}
                </div>
                
                <div className={currSubForm !== 2 ? "hide-form" : ""}>
                    <h2>Education Information</h2>
                    <p><i>Fields marked with * are required</i></p>
                    <label>Highest Education Level: <i>*</i></label>
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
                    {errors.highestEducation?.type === "required" && <span>Please enter a value</span>}
                    <br/><br/>

                    <label>College:</label>
                <div style={{"width":"575px", color: "black", fontSize: "15px"}}>
                    <Controller
                        name="college"
                        control={control}
                        render={({ field }) => 
                        <Select 
                            options={collegeOptions}
                            {...field}
                        />}
                    />
                </div>
                    <br/><br/>

                    <label>Year:</label>
                    <select {...register("collegeYear")} style={{"width":"300px", color: "black", fontSize: "15px"}}>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                    </select>
                    <br/><br/><br/>

                    <label>Major:</label>
                    <div style={{"width":"575px", color: "black", fontSize: "15px"}}>
                    <Controller
                        name="collegeMajor"
                        control={control}
                        render={({ field }) => 
                        <Select 
                            options={ courseList.map((courseName) => { 
                                return { label: courseName, value: courseName};
                            })}
                            {...field}
                        />}
                    />
                    </div>
                    <br/><br/>

                    <label>Minor:</label>
                    <div style={{"width":"575px", color: "black", fontSize: "15px"}}>
                    <Controller
                        name="collegeMinor"
                        control={control}
                        render={({ field }) => 
                        <Select 
                            options={ courseList.map((courseName) => { 
                                return { label: courseName, value: courseName};
                            })
                            }
                            {...field}
                        />}
                    />
                    </div>
                    <br/><br/>
                </div>
                
                <div className={currSubForm !== 3 ? "hide-form" : ""}>
                <div className="questionBreak">
                    <h2>Programming Experience</h2>
                    <p><i>Fields marked with * are required</i></p>
                    <div className="programmingSection">
                    <label style={{"width": "500px", "paddingBottom":"30px"}}>Select the programming languages/technology you have experience with (Add up to 5):</label>
                            <div>
                            {programmingInputs.map((programmingInput, index) => (
                               <div key={index}className="languageExp" name="programmingExperience">
                                    <Controller
                                    name="languageExperience"
                                    control={control}
                                    render={({ field }) =>
                                    <div className="languageSelect"> 
                                    <Select
                                        options={ programmingList.map((languageName) => {
                                            return {label: languageName, value: languageName}
                                        })}
                                        onChange={event => handleChangeLanguage(index, event)}
                                    />
                                    </div>
                                }
                                />
                                <select style={{"marginRight":"20px"}} onChange={event => handleChangeExperience(index, event)}>
                                    <option value="Novice">Novice</option>
                                    <option value="Intermediate">Intermediate</option>
                                    <option value="Expert">Expert</option>
                                </select>

                                <div className="addRemove">
                                    <div className="addRemoveSpace">
                                        <button style={{"width":"100px", "fontSize":"15px",}} onClick={() => handleAddInput()}>+</button>
                                        <button style={{"width":"100px", "fontSize":"20px", "fontWeight":"bold"}} onClick={() => handleRemoveInput()}>-</button>
                                    </div>
                                </div>
                                </div>
                            ))}             
                            </div>
                    </div>
                    </div>
                        
                    <label>Number of Past Hackathons: <i>*</i></label>         
                    <input
                    type="number"
                    {...register("pastHackathons",
                    { required: true})} />
                    <br/>
                    {errors.pastHackathons?.type === "required" && <span>Please enter a value</span>}
                    <br/><br/>
                    
                    <div className="form-group form-check">
                    <div className="field">
                        <label style={{"width":"200px"}} htmlFor="acceptTerms1" className="form-check-label">Email your resume to tech@bostonhacks.io<i>*</i></label>
                        <input style={{"width":"50px"}} name="acceptTerms1" type="checkbox" {...register('acceptTerms1')} id="acceptTerms1" className={`form-check-input ${errors.acceptTerms1 ? 'is-invalid' : ''}`} />
                        <div className="invalid-feedback">{errors.acceptTerms1?.message}</div>
                    </div>
                    </div>
                </div>

                <div className={currSubForm !== 4 ? "hide-form" : ""}>
                <div className="section">
                    <h2 style={{"paddingBottom":"50px"}}>Personal Links (Please submit any links you would like to share)</h2>

                    <div className="questionPage">
                    <div className="link-field">
                    <label>Github Profile: </label>
                    <input 
                    {...register("github",)} />
                    </div>
                    <br/><br/>

                    <div className="link-field">
                    <label>Linkedin Profile: </label>
                    <input 
                    {...register("linkedin",)} />
                    </div>
                    <br/><br/>

                    <div className="link-field">
                    <label>Personal Portfolio: </label>
                    <input 
                    {...register("personalPortfolio",)} />
                    </div>
                    <br/><br/>
                </div>
                </div>
                </div>

                <div className={currSubForm !== 5 ? "hide-form" : ""}>
                    <h2 style={{"paddingBottom":"30px"}}>Miscellaneous Questions</h2>

                    <div className="field">
                    <label>Race/Ethnicity: <i>*</i></label>
                    <select {...register("ethnicity", { required:true })}>
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
                    </div>
                
                    {errors.ethnicity?.type === "required" && <span>Please enter a value</span>}
                   

                    <div className="field">
                    <label>Dietary Restrictions: <i>*</i></label>
                    <select {...register("dietaryRestrictions", { required:true },)}>
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
                  
                    {errors.dietaryRestrictions?.type === "required" && <span>Please enter a value</span>}
                    
                    </div>

                    <div className="field">
                    <label>Need Sleep Accomodations?: <i>*</i></label>
                    <select {...register("sleep", { required:true },)}>
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                    </select>
                    </div>
                   
                    {errors.sleep?.type === "required" && <span>Please enter a value</span>}
                    

                    <div className="field">
                    <label>Autcad Experience?: <i>*</i></label>
                    <select {...register("autocad", { required:true },)}>
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                    </select>
                    </div>
                    {errors.autocad?.type === "required" && <span>Please enter a value</span>}

                <label>Participating in Team Formation?: <i>*</i></label>
                    <div className="field">
                    <select {...register("teamFormation", { required:true },)}>
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                    </select>
                    </div>
                    {errors.teamFormation?.type === "required" && <span>Please enter a value</span>}
                </div> 

                <div className={currSubForm !== 6 ? "hide-form" : ""}>
                    <div className="questionRow">
                    <h2>Why bostonhacks?</h2>
                    <p><i>Fields marked with * are required</i></p>
                    <label style={{"width":"800px"}}>What are you most excited about attending Bostonhacks? (Min 50 Max 200 Characters): <i>*</i></label>
                    <br/><br/>
                    <textarea style={{"width":"50%", "height":"200px", "resize":"none"}}
                    {...register("bostonhacks",
                    { required: true , maxLength: 200, minLength: 50})} />
                    {errors.bostonhacks?.type === "required" && <span>Please enter a value</span>}
                    {errors.bostonhacks?.type === "minLength" && <span>Answer is too short</span>}
                    {errors.bostonhacks?.type === "maxLength" && <span>Answer is too long</span>}
                    <br/><br/>
                    
                    <div className="form-group form-check">
                    <div className="field">
                        <label style={{"width":"200px"}} htmlFor="acceptTerms" className="form-check-label">Do you agree to the <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">MLH Code of Conduct</a>?</label>
                        <input style={{"width":"50px"}} name="acceptTerms" type="checkbox" {...register('acceptTerms')} id="acceptTerms" className={`form-check-input ${errors.acceptTerms ? 'is-invalid' : ''}`} />
                        <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
                    </div>
                    </div>
                    <br/>
                    
                    </div>
                </div>

                <div className="form-pagination-container">
                    {currSubForm > 0 && <button type="button" className="form-pagination-button" onClick={() => setCurrSubForm(currSubForm - 1)}>Previous</button>}
                    {currSubForm < 6 && <button type="button" className="form-pagination-button" onClick={() => setCurrSubForm(currSubForm + 1)}>Next</button>}
                </div>

                <input className={currSubForm !== 6 ? "hide-form" : "submit-button"} type="submit"/>
                {/* {console.log(errors)} */}
            </form>
        </div>
    )
}