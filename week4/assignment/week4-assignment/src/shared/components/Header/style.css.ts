import { style } from '@vanilla-extract/css';

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '30px 20px',
  backgroundColor: '#3d71ae',
});

export const navList = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  cursor: 'pointer',
});

export const navItem = style({
  fontSize: '1.2rem',
  color: '#fff',
});

export const userInfo = style({
  display: 'flex',
  alignItems: 'center',
});

export const userIcon = style({
  width: '24px',
  height: '24px',
  color: '#fff',
});

export const userName = style({
  fontSize: '1.2rem',
  color: '#fff',
});
