/** @jsxImportSource @emotion/react */

import { textInputStyle } from './TextInput.style';

function TextInput({ placeholder, value, onChange, maxLength}) {
  return (
    <input
      css={textInputStyle}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      aria-label={placeholder}
      {...(maxLength && { maxLength })}
    />
  );
}

export default TextInput;
