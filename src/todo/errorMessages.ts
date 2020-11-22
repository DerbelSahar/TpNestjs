import { maxLength } from "class-validator";

const ErrorMessage = {
    isNotEmty: `$property is required`,
    minLength: `$property is invalid, it must contain more than $constraint1 caracters`,
    maxLength: `$property is invalid, it must contain less than $constraint1  caracters`,
    invalidStatus: `status can't have $constraint1  as value`
  
}
export default ErrorMessage;