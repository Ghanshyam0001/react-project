import * as yup from 'yup'

const registerSchema = yup.object({
  name:yup.string().required("Name is required").trim().lowercase().test("no-admin","Name must not be admin",(value)=>{return value  !== "admin"}),
  // email:yup.string().email("Email is invalid").required("Email is required").test("no-email","Email already exists",async(value)=>{
  //   const response = await fetch(`https://jsonplaceholder.typicode.com/users?email=${value}`);
  //   const data = await response.json();
  //   return data.length === 0;
  // }),
email: yup.string().when("age", {
  is: (age) => age >= 25,
  then: (schema) => schema.required("Email is required"),
  otherwise: (schema) => schema.notRequired(),
}),
  password:yup.string().min(4,"password must be at least 4 characters").max(20,"paswowrd must be less then 20 characters").required("passowrd is required"),
    confirmpassword:yup.string().oneOf([yup.ref("password")],"passowrd must match").required("confirm password is required"),
    age:yup.number().required("age is required").positive("age must be a positive number").integer("age must be an integer").min(18,"age must be at Last 18"),

    skills:yup.array().of(yup.string()).min(1,"at least one skill is required").required("skills kis required")
})

export default registerSchema;