import React from "react";
import "./styles.css";

import TextField, { FormattedTextField } from "./components/TextField";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, errors, handleSubmit } = useForm();

  const submitForm = data => console.log(data);

  return (
    <div className="App">
      <form onSubmit={handleSubmit(submitForm)}>
        <TextField
          name="standardTextField"
          inputRef={register({
            required: "This field is required"
          })}
          label="TextField"
        />
        {errors.standardTextField && (
          <p className="error">This field is required</p>
        )}
        <FormattedTextField
          name="formattedTextField"
          defaultValue="44444444424242422"
          inputRef={register({ required: true })}
          label="Formatted"
          format="#### ##### #### ####"
        />
        {errors.formattedTextField && (
          <p className="error">This field is required</p>
        )}
        <button className="styledButton" type="submit">
          Submit form!
        </button>
      </form>
    </div>
  );
}
