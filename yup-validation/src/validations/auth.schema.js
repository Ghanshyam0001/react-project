import * as yup from 'yup'
import { passwordschems } from './fields/password.schema.js'
import { emailschema } from './fields/Email.schema.js'

export const loginschema = yup.object({
  email:emailschema,
  password:passwordschems
})

export const registerschema = yup.object({
  name:yup.string().required("name is required"),
  email:emailschema,
  password:passwordschems
})

