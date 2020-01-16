import React, { useState, useEffect } from "react";

const useCheckInputValue = inputName => {
  const [hasValue, setHasValue] = useState(false);

  useEffect(() => {
    const el = document.querySelector(`[id="${inputName}"]`);
    if (el.value.length > 0) setHasValue(true);
    el.addEventListener("input", () => {
      if (el.value.length > 0) {
        setHasValue(true);
      } else {
        setHasValue(false);
      }
    });
  }, [inputName]);

  return [hasValue, setHasValue];
};
const FloatingLabel = props => {
  const { label, htmlFor } = props;

  const [hasValue] = useCheckInputValue(htmlFor);

  return (
    <label
      className={
        hasValue
          ? "MaterialUI-TextField__label MaterialUI-TextField__label--active "
          : "MaterialUI-TextField__label"
      }
      htmlFor={htmlFor}>
      {label}
    </label>
  );
};

export default FloatingLabel;
