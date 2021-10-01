export default function validate(values, login) {
  console.log("My Values Object is in Validations Object", values);
  console.log("login is valid", login);

  let errors = {};

  // Name validation

  if (!values.name && login == undefined) {
    errors.name = "Please Enter Name...";
  }

  /// Email validation
  if (!values.email && login == undefined) {
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
  if (!values.role && login == undefined) {
    errors.role = "Please Enter Role...";
  }

  return errors;
}
