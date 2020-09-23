import constants from "../constants";

export function validation(type, value) {
  const {
    inputType: { email },
    regex
  } = constants;

  switch (type) {
    case email:
      return regex.email.test(value);

    default:
      return false;
  }
}
