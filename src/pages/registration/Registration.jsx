// Deze app werkt met de volgende files: App.jsx, Registration.jsx
// https://www.npmjs.com/package/react-hook-form
// https://react-hook-form.com/get-started/
// Registreren. Zie pattern bij Password: https://www.freecodecamp.org/news/add-form-validation-in-react-app-with-react-hook-form/
// Password matchen validatie: https://stackoverflow.com/questions/70480928/how-to-validate-password-and-confirm-password-in-react-hook-form-is-there-any-v
// Voorbeeld: https://codesandbox.io/s/react-hook-form-password-match-check-standard-validation-eo6en?file=/src/index.js:601-711

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import InputComponent from '../../components/input/InputComponent';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import './Registration.css';

export default function Registration() {
  const [success, setSuccess] = useState(false);

  const {
    getValues,
    reset,
    handleSubmit,
    formState: { errors, isValid },
    register,
  } = useForm({
    mode: 'onChange',
    defaultValues: {},
  });

  function handleFormSubmit(data) {
    console.table(data);
    console.table('Email: ', data.email);
    setSuccess(true);
    reset();
  }

  return (
    <>
      <section className="outer-container">
        <div className="inner-container">
          <h1>Registration</h1>

          {success ? (
            <p style={{ color: 'green' }}>
              You have successfully registered an account
            </p>
          ) : (
            <p>Register a new account</p>
          )}

          <form
            className="registration-form"
            name="registration-form"
            id="registration-form"
            method="POST"
            onSubmit={handleSubmit(handleFormSubmit)}
          >
            <input type="hidden" name="form-name" value="signinForm" />
            {/* E-mail component*/}
            <InputComponent
              iconName={faEnvelope}
              inputType="text"
              inputName="email"
              inputId="email-field"
              placeholder="E-mail"
              validationRules={{
                required: 'This field is required',
                pattern: {
                  value: /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm,
                  message: 'Enter a valid e-mail address',
                },
              }}
              register={register}
              errors={errors}
              autoFocus
            />

            {/* Password component*/}
            <InputComponent
              iconName={faLock}
              inputType="password"
              inputName="password"
              inputId="password-field"
              placeholder="Password"
              validationRules={{
                required: 'You must specify a password',
                minLength: {
                  value: 3,
                  message: 'Passwords must have at least 3 characters',
                },
                maxLength: {
                  value: 10,
                  message: 'Passwords may not exceed 10 characters',
                },
                pattern: {
                  value: /[A-Za-z0-9]/,
                  message: 'Passwords may not contain special characters'
                }
              }}
              register={register}
              errors={errors}
            />

            <InputComponent
              iconName={faLock}
              inputType="password"
              inputName="password2"
              inputId="password-field2"
              placeholder="Repeat password"
              validationRules={{
                required: 'You must specify a password',
                validate: (value) => {
                  const { password } = getValues();
                  return password === value || 'Passwords do not match';
                },
              }}
              register={register}
              errors={errors}
            />

            <button type="submit" title="Create account" disabled={!isValid}>
              Create Account
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
