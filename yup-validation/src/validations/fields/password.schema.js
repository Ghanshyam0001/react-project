import * as yup from 'yup'


export const passwordschems = yup.
  string().min(6,"password must 6 characters")
  .matches(/[A-Z]/,"password must contain at Least one uppercase Letter")
  .matches(/[0-9]/,"at least one number")
  .required("passowrd is required");