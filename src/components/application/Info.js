import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import Select from 'react-select';
import "./Info.css";
import { courseList, programmingList } from "./applicationOptions";
import { db } from "../../firebase/firebase-config";
import { doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import schoolCSV from "./schools.csv"

// Application page
export default function Application({applicationId}) {
    const { register, handleSubmit, watch, formState: { errors }, control, reset } = useForm();
    const navigate = useNavigate();

    const onError = (errors, e) => alert("Skipped " + Object.keys(errors) + " questions! Please go back and anwser all required questions, then submit.");

    async function onSubmit(data) {
        console.log("inside submit")
        // Allow null college major
        if (!data.collegeMajor) {
            data.collegeMajor = "N/A"
        }
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

        const userDoc = doc(db, "applications", applicationId);
        await updateDoc(
            userDoc,
            {
                dateOfBirth: data.dateOfBirth,
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
                gender: data.gender,
                pronoun: data.pronoun,
                dietaryRestrictions: data.dietaryRestrictions,
                sleep: data.sleep,
                autocad: data.autocad,
                teamFormation: data.teamFormation,
                bostonhacks: data.bostonhacks,
                mlhNewsletter : data.acceptTerms3,
                phase: "Phase 2",
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
    }

    const handleChangeExperience = (index, event) => {
        const values = [...programmingInputs]
        values[index].experienceLevel = event.target.value
        setProgrammingInputs(values)
    }

    const handleAddInput = () => {
        const values = [...programmingInputs]
        if (values.length === 5) {
            return values
        } else {
        setProgrammingInputs([...programmingInputs, { language: '', experienceLevel: '' }])
        }
  }

    const handleRemoveInput = (index) => {
        const values = [...programmingInputs];
        values.splice(index, 1);
        setProgrammingInputs(values)
    }

    const [currSubForm, setCurrSubForm] = React.useState(0);

    const addressSearch = (e) => {
        const formattedAddress = address.replace(/\s/g, "%20");

        fetch("https://api.geoapify.com/v1/geocode/autocomplete?text=" + formattedAddress + "&format=json&apiKey=" + process.env.REACT_APP_GEOAPIFY_KEY)
            .then(response => {
                response.json()
                .then(data => {
                    if (data.results) {
                        setAddressOptions(data.results);
                    }
                })
            })
    }


    React.useEffect(() => {
        // Get List of Colleges.
        fetch(schoolCSV)
            .then((res) => res.text())
            .then((resText) => {
                let collegeOptions = resText.split("\n").map(item => {
                    let schoolName = item.startsWith('"')
                        ? item.substring(1, item.length - 1)
                        : item;

                    schoolName = schoolName.endsWith('"')
                        ? schoolName.substring(0, schoolName.length - 1)
                        : schoolName;
                    
                    let schoolOption = { label: schoolName, value: schoolName};
                    return schoolOption;
                });

                collegeOptions = collegeOptions.filter((schoolOption) => {
                    return !(
                        schoolOption.label.includes("High School") || 
                        schoolOption.label.includes("High Schoo") ||
                        schoolOption.label.includes("Highschool") || 
                        schoolOption.label.includes("Middle School")
                    )
                })

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
        <div className="background">
            <form onSubmit={handleSubmit(onSubmit, onError)} >
                <div className={currSubForm !== 0 ? "hide-form" : "show-form"} >
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

                    <label>Gender: <i>*</i></label>
                    <select 
                    {...register("gender", { required:true })}>
                        <option value="Man">Man</option>
                        <option value="Woman">Woman</option>
                        <option value="Non-binary">Non-binary</option>
                        <option value="Prefer not to answer">Prefer not to answer</option>
                    </select>
                    {errors.gender?.type === "required" && <span>Please enter a value</span>}
                    <br/><br/>

                    <label>Pronouns: <i>*</i></label>
                    <select 
                    {...register("pronoun", { required:true })}>
                        <option value="He/Him/His">He/Him/His</option>
                        <option value="She/Her/Hers">She/Her/Hers</option>
                        <option value="They/Them/Theirs">They/Them/Theirs</option>
                        <option value="Other">Other</option>
                        <option value="Prefer not to answer">Prefer not to answer</option>
                    </select>
                    {errors.pronoun?.type === "required" && <span>Please enter a value</span>}
                    <br/><br/>

                    <label>Phone Number: <i>*</i></label>
                    <input 
                    {...register("phoneNumber",
                    { required: true})} />
                    <br/>
                    {(errors.phoneNumber?.type === "required" || errors.phoneCountryCode?.type === "required") && <span>Please enter a phone number</span>}
                    <br/><br/>
                </div>
                
                <div className={currSubForm !== 1 ? "hide-form" : "show-form"}>
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
                                addressSearch()
                            }}
                        />}
                        
                    />
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
                    
                    <label>Outside of Massachusetts: <i>*</i></label>
                    <div className="field">
                        <select {...register("outOfState", { required:true },)}>
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                    </div>
                    <br/>
                    {errors.outOfState?.type === "required" && <span>Please enter a value</span>}
                </div>
                
                <div className={currSubForm !== 2 ? "hide-form" : "show-form"}>
                    <h2>Education Information</h2>
                    <p><i>Fields marked with * are required</i></p>
                    <label>Current Education Level: <i>*</i></label>
                    <select 
                    {...register("highestEducation",
                    { required: true })}>
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

                    <label>College: <i>*</i></label>
                    <div className="react-selecter">
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
                    {errors.college?.type === "required" && <span>Please enter a value</span>}
                    <br/><br/>

                    <label>Year: <i>*</i></label>
                    <select {...register("collegeYear", { required: true })}>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                    </select>
                    {errors.collegeYear?.type === "required" && <span>Please enter a value</span>}
                    <br/><br/><br/>

                    <label>Major:</label>
                    <div className="react-selecter">
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
                    <div className="react-selecter">
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
                
                <div className={currSubForm !== 3 ? "hide-form" : "show-form"}>
                <div className="questionBreak">
                    <h2>Programming Experience</h2>
                    <p><i>Fields marked with * are required</i></p>
                    <div className="programmingSection">
                    <label style={{"paddingBottom":"30px"}}>Select the programming languages/technology you have experience with (Add up to 5):</label>
                            <div>
                            {programmingInputs.map((programmingInput, index) => (
                               <div key={index} className="languageExp" name="programmingExperience">
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
                                <select onChange={event => handleChangeExperience(index, event)}>
                                    <option value="Novice">Novice</option>
                                    <option value="Intermediate">Intermediate</option>
                                    <option value="Expert">Expert</option>
                                </select>

                                <div className="addRemove">
                                    <button className="add-remove-buttons" onClick={() => handleAddInput()}>+</button>
                                    <button className="add-remove-buttons" onClick={() => handleRemoveInput()}>-</button>
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
                    
                    <div className="field">
                        <label style={{"width":"200px"}} htmlFor="emailResume" className="form-check-label">Email your resume to tech@bostonhacks.io<i>*</i></label>
                        <input style={{"width":"50px", "height":"30px"}} name="emailResume" type="checkbox" {...register('emailResume', { required: true})} id="emailResume" className={`form-check-input ${errors.emailResume ? 'is-invalid' : ''}`} />
                        {errors.emailResume?.type === "required" && <span>Please check the box</span>}
                    </div>
                </div>

                <div className={currSubForm !== 4 ? "hide-form" : "show-form"}>
                <div className="section">
                    <h2>Personal Links (Please submit any links you would like to share)</h2>
                    <p><i>Fields marked with * are required</i></p>

                    <label>Github Profile: </label>
                    <input 
                    {...register("github",)} />
                    <br/><br/>

                    <label>Linkedin Profile: </label>
                    <input 
                    {...register("linkedin",)} />
                    <br/><br/>

                    <label>Personal Portfolio: </label>
                    <input 
                    {...register("personalPortfolio",)} />
                    <br/><br/>
                </div>
                </div>

                <div className={currSubForm !== 5 ? "hide-form" : "show-form"}>
                    <h2>Miscellaneous Questions</h2>
                    <p><i>Fields marked with * are required</i></p>

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
                    <label>Autocad Experience: <i>*</i></label>
                    <select {...register("autocad", { required:true },)}>
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                    </select>
                    </div>
                    {errors.autocad?.type === "required" && <span>Please enter a value</span>}

                <label>Would Like to Participate in Team Formation Events: <i>*</i></label>
                    <div className="field">
                    <select {...register("teamFormation", { required:true },)}>
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                    </select>
                    </div>
                    {errors.teamFormation?.type === "required" && <span>Please enter a value</span>}
                </div> 

                <div className={currSubForm !== 6 ? "hide-form" : "show-form"}>
                    <div className="questionRow">
                    <h2>Why bostonhacks?</h2>
                    <p><i>Fields marked with * are required</i></p>
                    <label>What are you most excited about attending Bostonhacks? (Min 50 Max 400 Characters): <i>*</i></label>
                    <br/><br/>
                    <textarea style={{"width":"70%", "height":"200px", "resize":"none"}}
                    {...register("bostonhacks",
                    { required: true , maxLength: 400, minLength: 50})} />
                    {errors.bostonhacks?.type === "required" && <span>Please enter a value</span>}
                    {errors.bostonhacks?.type === "minLength" && <span>Answer is too short</span>}
                    {errors.bostonhacks?.type === "maxLength" && <span>Answer is too long</span>}
                    <br/><br/>
            
                    </div>
                    <br></br>
                </div>

                <div className={currSubForm !== 7 ? "hide-form" : "show-form"}>
                    
                    <h2>MLH Terms and Conditions</h2>
                    <p><i>Fields marked with * are required</i></p>
                    <br/>
                    <div className="form-group form-check">
                        <div className="field">
                            <label style={{"width":"200px"}} htmlFor="acceptTerms" className="form-check-label">Do you agree to the <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">MLH Code of Conduct</a><i>*</i></label>
                            <input style={{"width":"50px", "height":"30px"}} name="acceptTerms" type="checkbox" {...register('acceptTerms', { required: true})} id="acceptTerms" className={`form-check-input ${errors.acceptTerms ? 'is-invalid' : ''}`} />
                            {errors.acceptTerms?.type === "required" && <span>Please check the box</span>}
                        </div>
                    </div>
                    <div className="form-group form-check">
                    <div className="field">
                            <label style={{"width":"300px"}} htmlFor="acceptTerms2" className="form-check-label">I authorize you to share my application/registration information with Major League Hacking for event administration, ranking, and MLH administration in-line with the <a href="https://mlh.io/privacy">MLH Privacy Policy.</a> I further agree to the terms of both the <a href="https://github.com/MLH/mlh-policies/blob/main/contest-terms.md">MLH Contest Terms and Conditions</a> and the <a href="https://mlh.io/privacy">MLH Privacy Policy.</a> <i>*</i></label>
                            <input style={{"width":"50px", "height":"30px", "display":"flex", "alignContent":"center"}} name="acceptTerms2" type="checkbox" {...register('acceptTerms2', { required: true})} id="acceptTerms2" className={`form-check-input ${errors.acceptTerms2 ? 'is-invalid' : ''}`} />
                            {errors.acceptTerms2?.type === "required" && <span>Please check the box</span>}
                    </div>
                    </div>
                    <br/>
                    <br/>
                    <div className="form-group form-check">
                    <div className="field">
                            <label style={{"width":"300px"}} htmlFor="acceptTerms3" className="form-check-label">I authorize MLH to send me an email where I can further opt into the MLH Hacker, Events, or Organizer Newsletters and other communications from MLH.</label>
                            <input style={{"width":"50px", "height":"30px"}} name="acceptTerms3" type="checkbox" {...register('acceptTerms3')} id="acceptTerms3" className={`form-check-input ${errors.acceptTerms3 ? 'is-invalid' : ''}`} />
                    </div>
                    </div>
                    <br/>
                </div>

                <div className="form-pagination-container">
                    {currSubForm > 0 && <button type="button" className="form-pagination-button" onClick={() => setCurrSubForm(currSubForm - 1)}>Previous</button>}
                    {currSubForm < 7 && <button type="button" className="form-pagination-button" onClick={() => setCurrSubForm(currSubForm + 1)}>Next</button>}
                </div>

                <input className={currSubForm !== 7 ? "hide-form" : "submit-button"} type="submit" label="here"/>
                {/* {console.log(errors)} */}
            </form>
        </div>
    )
}