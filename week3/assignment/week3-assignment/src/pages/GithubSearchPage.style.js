import { css } from '@emotion/react';

export const githubSearchPageWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding-top: 5rem;
`;

export const formStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

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

export const userInfoCardStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
 
  background-color:#718bbf;
  padding: 2rem;
  border-radius: 0.5rem;
`;

export const userInfoAnchorStyle = css`
  color: inherit;
  text-decoration: none;
`;

export const userInfoImageStyle = css`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #003092;
`;

export const userInfoTextStyle = css`
  text-align: center;
`;

export const clearButtonStyle = css`
  display: flex;
  align-self: flex-end;
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
`;

export const userFollowWrapperStyle = css`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

export const userFollowStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  border: 1px solid #003092;
  background-color: #3d71ae;
  color: #fff;
  font-weight: 400;
  padding: 1rem 0.5rem;
  gap: 0.5rem;
`;

export const userFollowTextStyle = css`
  font-size: 1.2rem;
  font-weight: 700;
`;
