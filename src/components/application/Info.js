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

// Application page
export default function Application({applicationId}) {
    const { register, handleSubmit, watch, formState: { errors }, control, reset } = useForm();
    const navigate = useNavigate();
    async function onSubmit(data) {
        const userDoc = doc(db, "applications", applicationId);
        await updateDoc(
            userDoc,
            {
                firstName: data.firstName,
                lastName: data.lastName,
                dateOfBirth: data.dateOfBirth,
                email: data.email,
                phoneCountryCode: data.phoneCountryCode,
                phoneNumber: data.phoneNumber,

                address: data.address,
                outOfState: data.outOfState,

                highestEducation: data.highestEducation,
                college: data.college,
                collegeYear: data.collegeYear,
                collegeMajor: data.collegeMajor,
                collegeMinor: data.collegeMinor,

                pastHackathons: data.pastHackathons,
                resume: data.resume,

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

    const inputArr = [
        {
          type: "text",
          id: 1,
          value: ""
        }
      ];
    
      const [arr, setArr] = React.useState(inputArr);
    
      const addInput = (e) => {
        e.preventDefault()
        setArr(s => {
            if (s.length == 5){
                return s
            }
            else {
          const lastId = s[s.length - 1].id;
          return [
            ...s,
            {
              type: "text",
              value: ""
            }
          ];
        };
    });
  };

  const removeInput = (e) => {
    e.preventDefault()
    setArr(s => {
        if (s.length == 1){
            return s
        }
        else {
      const lastId = s[s.length - 1].id;
      return s.slice(0, s.length-1)
        };
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
        <div className="background">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={currSubForm !== 0 ? "hide-form" : ""}>
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
                        <div className="phone">
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
                        </div>
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
                    <div style={{"cursor": "pointer", "backgroundColor": "grey"}} onClick={() => addressSearch()}>
                        Search
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
                <div style={{"width":"500px"}}>
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
                    <select {...register("collegeYear")}>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                    </select>
                    <br/><br/>

                    <label>Major:</label>
                    <div style={{"width":"400px"}}>
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
                    <div style={{"width":"400px"}}>
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
                    <label style={{"width": "500px", "paddingBottom":"30px"}}>Select the programming languages/technology you have experience with(Add up to 5)</label>
                        {arr.map((item, i) => {
                            return (
                            <div className="languageSelect">
                            
                            <Controller
                                name="language"
                                control={control}
                                defaultValue={null}
                                render={({ field, }) => 
                                <div className="language" >
                                <Select 
                                    options={ programmingList.map((language) => { 
                                        return { label: language, value: language};
                                    })
                                    }
                                    onChange={val => field.onChange(val.value)}
                                />
                                </div>
                            }
                            />

                            <select className="experienceLevel"
                            {...register("experienceLevel", { required:true },)}>
                                <option value="Novice">Novice</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Expert">Expert</option>
                            </select>
                            </div>
                            );
                        })}
                        
                        <div className="addRemove">
                        <div className="addRemoveSpace">
                        <button onClick={addInput} style={{"width":"300px"}}>Add</button>

                        </div>
                        <button onClick={removeInput} style={{"width":"300px"}}>Remove</button>
                        </div>
                    </div>
                    </div>

                    <div className="questionBreak">
                        
                    <label>Number of Past Hackathons: <i>*</i></label>         
                    <input
                    type="number"
                    {...register("pastHackathons",
                    { required: true})} />
                    <br/>
                    {errors.pastHackathons?.type === "required" && <span>Please enter a value</span>}
                    <br/><br/>
                    </div>
                    
                    <label>Upload Resume: <i>*</i></label>
                    <input
                    type="file"
                    {...register("resume",
                    { required: true})} />
                    <br/>
                    {errors.resume?.type === "required" && <span>Please select a file</span>}
                </div>

                <div className={currSubForm !== 4 ? "hide-form" : ""}>
                <div className="section">
                    <h2 style={{"paddingBottom":"50px"}}>Personal Links(Please submit any links you would like to share)</h2>

                    <div className="questionPage">
                    <div className="field">
                    <label>Github Profile: </label>
                    <input 
                    {...register("github",)} />
                    </div>
                    <br/>
                    <br/><br/>

                    <div className="field">
                    <label>Linkedin Profile: </label>
                    <input 
                    {...register("linkedin",)} />
                    </div>
                    <br/>
                    <br/><br/>

                    <div className="field">
                    <label>Personal Portfolio: </label>
                    <input 
                    {...register("personalPortfolio",)} />
                    </div>
                    <br/>
                    <br/><br/>
                </div>
                </div>
                </div>

                <div className={currSubForm !== 5 ? "hide-form" : ""}>
                
                <div className="section">
                    <h2 style={{"paddingBottom":"30px"}}>Miscellaneous Questions</h2>

                    <div className="field">
                    <label>Race/Ethnicity: *</label>
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
                    <label>Autcad Experience?: *</label>
                    <select {...register("autocad", { required:true },)}>
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                    </select>
                    </div>
                    
                    {errors.autocad?.type === "required" && <span>Please enter a value</span>}
                    
                  
                    
                   
                    
                    {errors.teamFormation?.type === "required" && <span>Please enter a value</span>}
                   
                </div>
                <label>Participating in Team Formation?: <i>*</i></label>
                    <div className="field">
                    <select {...register("teamFormation", { required:true },)}>
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                    </select>
                    </div>
                </div> 

                <div className={currSubForm !== 6 ? "hide-form" : ""}>
                    <div className="questionRow">
                    <h2>Why bostonhacks?</h2>
                    <p><i>Fields marked with * are required</i></p>
                    <div className="field">
                    <label style={{"width":"500px"}}>What are you most excited about attending Bostonhacks? (Min 50 Max 200 Characters): *</label>
                    <br/><br/>
                    <textarea style={{"width":"50%", "height":"200px", "resize":"none"}}
                    {...register("bostonhacks",
                    { required: true , maxLength: 200, minLength: 50})} />
                    </div>
                    {errors.bostonhacks?.type === "required" && <span>Please enter a value</span>}
                    {errors.bostonhacks?.type === "minLength" && <span>Answer is too short</span>}
                    {errors.bostonhacks?.type === "maxLength" && <span>Answer is too long</span>}
                    <br/><br/>
                    
                    <div className="form-group form-check">
                    <div className="field">
                        <label style={{"width":"200px"}} htmlFor="acceptTerms" className="form-check-label">Do you agree to the <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">MLH Code of Conduct</a>?</label>
                        <input name="acceptTerms" type="checkbox" {...register('acceptTerms')} id="acceptTerms" className={`form-check-input ${errors.acceptTerms ? 'is-invalid' : ''}`} />
                        <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
                    </div>
                    </div>
                    <br/>
                    <br></br>
                    </div>
                </div>

                <div className="form-pagination-container">
                    {currSubForm > 0 && <button type="button" style={{     
                    padding: '15px',
                    position: 'flex',
                    left: '25%',
                    top: '97%'

                    }} onClick={() => setCurrSubForm(currSubForm - 1)}>Previous</button>}

                    {currSubForm < 6 && <button type="button" style={{
                    padding: '15px',
                    position: 'flex',
                    left: '60%',
                    top: '97%'
                    }}onClick={() => setCurrSubForm(currSubForm + 1)}>Next</button>}
                </div>


            </form>
        </div>
    )
}