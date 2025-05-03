import { css } from "@emotion/react";

export const container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
`;

export const titleStyle = css`
  font-weight: 800;
  font-size: 5rem;
  color: #f7c605;
  text-shadow: -1px 0px #3361a8, 0px 1px #3361a8, 2px 0px #3361a8,
    0px -1px #3361a8;
`;

export const navStyle = css`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const linkStyle = css`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: semi-bold;
`;
