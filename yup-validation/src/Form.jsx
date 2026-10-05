import { useForm }  from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import registerSchema from './schema.jsx';
export function Form(){

  const {register, handleSubmit, formState:{errors}} = useForm({
    resolver: yupResolver(registerSchema),
      defaultValues: {
    skills: [],
    age:0,  
  }
  });
  const onSubmit = (data) =>{
    console.log(data);
  }
   return(
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Enter Name"{...register("name")}/>
      <p className='error'>{errors.name?.message}</p>
      <input type="email" placeholder="Enter Email"{...register("email")}/>
      <p className='error'>{errors.email?.message}</p>
      <input type="password" placeholder="Enter Password"{...register("password")}/>
      <p className='error'>{errors.password?.message}</p>
        <input type="password" placeholder="Enter confirm Password"{...register("confirmpassword")}/>
      <p className='error'>{errors.confirmpassword?.message}</p>
         <input type="number" placeholder="Enter age"{...register("age")}/>
      <p className='error'>{errors.age?.message}</p>
      <label htmlFor="skills">Skills</label>
      <input type="checkbox" value="React" id="React"{...register('skills')}/>React
      <input type="checkbox" value="node" id="node"{...register('skills')}/>node
      <input type="checkbox" value="laravel" id="laravel"{...register('skills')}/>laravel
      <p className='error'>{errors.skills?.message}</p>

      <br></br>

        
  
      <button type="submit">Submit</button>


    </form>
    
    </>
   )


}