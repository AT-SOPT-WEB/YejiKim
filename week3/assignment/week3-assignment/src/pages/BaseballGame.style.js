import { css } from '@emotion/react';

export const baseballGameWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding-top: 5rem;

`;

export const formStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  border: none;
`;

export const messageStyle = css`
  font-size: 1rem;
  font-weight: bold;
  color: #000;
`;

export const historyStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  gap: 0.5rem;
  width: 50%;
  padding: 0;
  margin: 0 auto;
`;

export const historyItemStyle = css`
  font-size: 1rem;
  text-align: center;
  color: #000;
  border: 1px solid #5f77ab;
  border-radius: 0.5rem;
  padding: 0.5rem;
  width: 100%;
`;
