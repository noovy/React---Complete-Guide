import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLast,
    isValid: enteredLastIsValid,
    hasError: lastInputHasError,
    valueChangeHandler: lastChangeHandler,
    inputBlurHandler: lastBlurHandler,
    reset: resetLastInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (enteredNameIsValid && enteredLastIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid && !enteredLastIsValid && !enteredEmailIsValid) {
      return;
    }
    console.log(enteredName);
    console.log(enteredEmail);

    resetNameInput();
    resetLastInput();
    resetEmailInput();
  };

  const nameInnputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const lastInnputClasses = lastInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInnputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={nameInnputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
        </div>
        {nameInputHasError && (
          <p className="error-text">Name must not be empty</p>
        )}
        <div className={lastInnputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastChangeHandler}
            onBlur={lastBlurHandler}
            value={enteredLast}
          />
          {lastInputHasError && (
            <p className="error-text">Name must not be empty</p>
          )}
        </div>
      </div>
      <div className={emailInnputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && <p className="error-text">Email is not valid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
