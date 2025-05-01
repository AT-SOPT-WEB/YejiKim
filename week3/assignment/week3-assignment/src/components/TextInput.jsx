/** @jsxImportSource @emotion/react */

import { textInputStyle } from './TextInput.style';

function TextInput({ placeholder, value, onChange }) {
  return (
    <input
      css={textInputStyle}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default TextInput;
