import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import TextField, { FormatedTextField } from '../TextField';

describe('Testing FormattedTextField Component', () => {
  const TextFieldOptions = {
    format: '#### #### #### ####',
    expectedValue: '4242 4242 4242 4242',
    value: '4242424242424242',
    label: 'Credit Card',
    placeholder: 'Credit Card',
  };

  const NumericTextFieldOptions = {
    value: 1000,
    prefix: '$',
    suffix: 'USD',
  };

  test('Should display a FormattedTextField element with label Credit Card', () => {
    const { getByText } = render(
      <FormatedTextField
        name="emptyInput"
        label="Credit Card"
        placeholder="Credit Card"
      />,
    );

    expect(getByText(TextFieldOptions.label)).toHaveTextContent(
      TextFieldOptions.label,
    );
  });

  test('Should display a formatted value and have a floating label', () => {
    const { getByDisplayValue, getByText } = render(
      <FormatedTextField
        name="floatingLevelFormatted"
        format="#### #### #### ####"
        label={TextFieldOptions.label}
        value={TextFieldOptions.value}
      />,
    );

    expect(getByDisplayValue(TextFieldOptions.expectedValue)).toHaveValue(
      TextFieldOptions.expectedValue,
    );

    expect(getByText('Credit Card')).toHaveClass(
      'MaterialUI-TextField__label MaterialUI-TextField__label--active',
    );
  });

  test.skip('Should change label class when input is focused', () => {
    const { getByLabelText, getByText } = render(
      <FormatedTextField label={TextFieldOptions.placeholder} />,
    );

    const input = getByLabelText('Credit Card');
    const label = getByText('Credit Card');

    fireEvent.focus(input);

    expect(label).toHaveClass(
      'MaterialUI-TextField__label MaterialUI-TextField__label--active',
    );
  });

  test('Should display TextField with formatted number & thousand separator', () => {
    const { getByDisplayValue } = render(
      <FormatedTextField
        name="thousandFormatted"
        thousandSeparator
        value={NumericTextFieldOptions.value}
        prefix={NumericTextFieldOptions.prefix}
      />,
    );

    const formattedTextField = getByDisplayValue('$1,000');

    expect(formattedTextField).toHaveValue('$1,000');
  });
});

describe('Testing TextField Component', () => {
  /*
   * TODO: Improve text cases for TextField component
   */
  test.skip('Should render a textarea instead of an input', () => {
    const { getByDisplayValue } = render(
      <TextField
        name="asTextArea"
        label="Example text area"
        placeholder="Example text area"
        as="textarea"
        value="Text Area"
        onChange={({ target }) => console.log(target.value)}
      />,
    );

    const textField = getByDisplayValue('Text Area');

    expect(textField).toHaveValue('Text Area');
  });
});
