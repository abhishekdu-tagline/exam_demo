export default function validate(values) {
  console.log("My Values Object is in Validations Object", values);

  let errors = {};

  // Name validation

  if (!values.name) {
    errors.name = "Please Enter Name...";
  }

  /// Email validation
  if (!values.email) {
    errors.email = "email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  /// PassWord Validation
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be 8 or more characters";
  }

  //// Role Validations
  if (!values.role) {
    errors.role = "Please Enter Role...";
  }

  return errors;
}
