
import * as Yup from "yup";

export default Yup.object().shape({
    name: Yup.string().
    required("name is required.")
    .min(3,"name must be atleast 3 characters long"),
    email: Yup.string()
    .email("Must be a valid email address.")
    .required("Email is required"),
    password: Yup.string()
    .min(3,"password must be atleast 3 characters long")
    .required('Role is required'),
    tos: Yup.boolean()
    .required('You must agree to the Terms of Service'),




})