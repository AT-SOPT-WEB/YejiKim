import { css } from "@emotion/react";

/** @jsxImportSource @emotion/react */

const searchContainerStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const buttonStyle = css`
  border-radius: 0.375rem;
  background-color: #3b82f6;
  padding: 0.5rem 1rem;
  font-weight: 700;
  color: white;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #2563eb;
  }
`;

const inputStyle = css`
  width: 40rem;
  border-radius: 0.375rem;
  border: 1px solid #d1d5db;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #374151;
`;

const Search = ({ search, searchHandler, searchButtonHandler }) => {
  return (
    <div css={searchContainerStyle}>
      <input
        css={inputStyle}
        type="text"
        placeholder="검색어를 입력하세요"
        value={search}
        onChange={searchHandler}
      />
      <button css={buttonStyle} onClick={searchButtonHandler}>
        검색
      </button>
    </div>
  );
};

export default Search;
