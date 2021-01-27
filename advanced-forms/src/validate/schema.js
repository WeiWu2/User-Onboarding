
import * as Yup from "yup";

export default Yup.object().shape({
    name: Yup.string()
    .required("Name is required.")
    .min(3,"Name must be atleast 3 characters long"),
    email: Yup.string()
    .email("Must be a valid email address.")
    .required("Email is required"),
    password: Yup.string()
    .min(3,"Password must be atleast 3 characters long")
    .required('Password is required'),
    tos: Yup.boolean()
    .oneOf([true], "You must agree to the Terms of Service.")
    .required('You must agree to the Terms of Service'),




})