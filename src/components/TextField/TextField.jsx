import React from "react";
import PropTypes from "prop-types";
import { uuid } from "uuidv4";

//* Styles
import "./TextField.scss";

//* HOC
import withFormat from "../../hoc/withFormat";

//* Building blocks
import FloatingLabel from "../FloatingLabel";
import InputBase from "../InputBase";

const TextField = React.forwardRef(function TextField(props, ref) {
  const uuidv4 = uuid();

  const { label } = props;

  const {
    name,
    placeholder,
    onBlur,
    onFocus,
    onChange,
    defaultValue,
    value,
    inputRef,
    as
  } = props;

  const inputProps = {
    name,
    placeholder,
    onBlur,
    onFocus,
    onChange,
    defaultValue,
    value,
    id: `user-${uuidv4}`
  };

  return (
    <div className="MaterialUI-TextField__input-container" ref={ref}>
      <InputBase inputRef={inputRef} as={as} inputProps={inputProps} />
      {label && <FloatingLabel htmlFor={`user-${uuidv4}`} label={label} />}
    </div>
  );
});

TextField.propTypes = {
  /*
   * This is the TextField label
   */
  label: PropTypes.string,
  /*
   * This is the input placeholder
   */
  placeholder: PropTypes.string,
  /*
   * This `prop` will be forwarded to the inner `input`
   */
  inputRef: PropTypes.func,
  /*
   * This prop will determine how the `input` will look like
   */
  as: PropTypes.oneOf(["input", "textarea"])
};

const FormattedTextField = withFormat(TextField);

export { TextField as default, FormattedTextField };
