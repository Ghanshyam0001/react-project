import * as yup from 'yup'

export const emailschema = yup.
  string().required("email is requierd")
