import { css } from '@emotion/react';

export const historySectionStyle = css`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1.5rem;
`;

export const historyListStyle = css`
  display: flex;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin: 0;  
  flex-wrap: wrap;
`;

export const historyItemStyle = css`
  display: flex;
  align-items: center;
  font-size: 1rem;
  border: 1px solid #5f77ab;
  border-radius: 1rem;
  padding: 0.5rem;
  gap: 0.3rem;
`;

export const historyItemButtonStyle = css`
  background: none;
  border: none;
  cursor: pointer;
`;

export const historyDeleteButtonStyle = css`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
`;