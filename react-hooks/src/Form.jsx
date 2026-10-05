import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

export default function Form() {
  const { register, handleSubmit, control, formState, watch, getValues, setValue, reset,trigger } = useForm({
    defaultValues:{
      name:'',
      email:'',
      age:'',
      social:{
        facebook:'',
        twitter:'',
      },
      phoneNumbers:["",""],
      dob:new Date()
      // mode is use for validation trigger
    },mode:'onBlur'
  });
  const { errors, dirtyFields, touchedFields, isDirty, isValid, isSubmitting, isSubmitSuccessful, isSubmitted, submitCount } = formState;
  // console.log({dirtyFields,touchedFields,isDirty})
   console.log(isSubmitting,isSubmitted,isSubmitSuccessful,submitCount);
  const onSubmit = (data) => {
    console.log(data);
  };

// real time get data
  // const watchname = watch(["name","email"]); 
  //  const watchname = watch();

  // click button then get data
  // const getvalues = () =>{
  //   //  only get email value
  //   // const values = getValues("email");

  //   const values = getValues();
  //   console.log(values);
  //   // only show name values
  //   console.log(values.name);
    
  // }

    const setformvalues = () =>{
     setValue("name","Ghanshyam Patel k",{
      // run validation after changing the value
      shouldValidate:true,
      // Form that the field should be considered changed from its default value.
      shouldDirty:true,
      // Form that the user has interacted with/touched the field.
      // when touch then show error mesage
      shouldTouch:true
    });
  }
  const onError = (errors) =>{
    console.log(errors);
  }

  return (
    <div>
     {/* <p>{JSON.stringify(watchname)}</p> */}
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <label htmlFor="name">Name</label>
        <br />

        <input type="text" id="name" {...register("name",{required:'Name Is Required'})} />
        <br />
        {errors.name && <p className="error">{errors.name?.message}</p>}
        <label htmlFor="email">Email</label>
        <br />
        <input type="email" id="email" {...register("email",{disabled:watch("name") === "",required:'Email Is Required',pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Please enter a valid email address",
    },validate:{
      notAdminEmail:(value)=>{
     return(
     value  !== 'admin@example.com' || 'Enter A Different Email Address'
     )

    }, notBlankListAdminEmail:(value)=>{
    return (  !value.endsWith("@blacklists.com") || "This domain is not allowed");
    },
    avalibleemail: async(value)=>{
      const response = await fetch(`https://jsonplaceholder.typicode.com/users?email=${value}`)
      const data = await response.json();
      return data.length === 0 || 'Email Already Exists';
    }
    }})} />
         {errors.email && <p className="error">{errors.email?.message}</p>}
        <br />
        <label htmlFor="age">Age</label>
        <br />
        <input type="number" id="age" {...register("age",{required:'Age Is Required',valueAsNumber:true,min:{
          value:18,
          message:'Age Must Be Greater Then 18'
        },max:{
          value:60,
          message:'Age Must Be Greater Then 60'
        }})} />
        <br />
        <br />
         <label htmlFor="country">Country</label>
        <select id="country" {...register("country",{required:'country is required'})}>
          <option value="india">india</option>
          <option value="pakistan">pakistan</option>
          <option value="africe">africe</option>
        </select>
        <br />
         <label htmlFor="gender">Gender</label>
         <label htmlFor="gender">
          <input type="radio" name="gender" value="male" {...register("gender",{required:true})}/>
                  Male </label>
           <label htmlFor="gender"><input type="radio" name="gender" value="female"/> Female </label>
         {errors.gender && <p className="error">Gender Is Required</p>}
        <br/>
        <br/>
         <label htmlFor="skills">Skills</label>
         <label htmlFor="skills">
          <input type="Checkbox" name="skills" value="react" {...register("skills")}/>
                  react </label>
           <label htmlFor="skills"><input type="Checkbox" name="skills" value="nodjs" {...register,("skills")}/> node </label>
           <label htmlFor="skills"><input type="Checkbox" name="skills" value="mongodb" {...register("skills")}/> mongodb </label>

         <br/>



             <label htmlFor="dob">Date Of Birth</label>
        <br/>
          <input type="date" id="dob" {...register("dob",{valueAsDate:true})} />
        <br/>

        <label htmlFor="facebook">Facebook</label>
        <br />
        <input type="text" id="facebook" {...register("social.facebook")} />
        <br />
        {errors.social?.facebook && (<p className="error"> {errors.social.facebook.message}
        </p> )}

          <label htmlFor="Twitter">Twitter</label>
        <br />
        <input type="text" id="Twitter" {...register("social.Twitter")} />
        <br />
        <label htmlFor="primary-phonenumber">primary-phonenumber</label>
        <br />
        <input type="text" id="secondry-phonenumber" {...register("phoneNumbers.0")} />
        <br />
        <label htmlFor="secondary-phonenumber">primary-phonenumber</label>
        <br/>
          <input type="text" id="secondary-phonenumber" {...register("phoneNumbers.1")} />
        <button type="submit">Submit</button>
        {/* if data is not valid then button dasable */}
        {/* <button type="submit" disabled={!isValid}>Submit</button> */}

        {/* <button type="button" onClick={getvalues}>Get Values</button> */}
        <button type="button" onClick={setformvalues}>set Values</button>
        {/* click then validate form not submit */}
        <button type="button" onClick={()=> trigger()}>validate</button>

        <button type="button" onClick={()=>reset({
          name:"gk",
          email:"gk@gmail.com"
        })} reset>Reset</button>
        

      </form>

      <DevTool control={control} placement="top-left" />
    </div>
  );
}