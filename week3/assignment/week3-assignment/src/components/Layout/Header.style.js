import { css } from '@emotion/react';

export const headerWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #9fb3df;
  padding: 1rem;
  gap: 1rem;
`;

export const headerTitle = css`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
`;

export const tabButtonWrapper = css`
  display: flex;
  gap: 2rem;
`;

export const tabButton = (active) => css`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.2s ease;
  background-color: ${active ? '#7386b5' : '#d0dfff'};
  color: ${active ? '#fff' : '#000'};
  border: ${active ? '2px solid #213448' : 'none'};
  cursor: pointer;

  &:hover {
    background-color: #d0dfff;
  }
`;
