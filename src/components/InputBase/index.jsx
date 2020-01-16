import React from "react";

const InputBase = props => {
  const { inputRef, as = "input", inputProps } = props;

  const InputComponent = as;

  return (
    <InputComponent
      className="MaterialUI-TextField__input MaterialUI-TextField__input"
      ref={inputRef}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...inputProps}
    />
  );
};

export default InputBase;
