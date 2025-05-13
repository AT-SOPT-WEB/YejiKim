import { style } from '@vanilla-extract/css';

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#3d71ae',
  padding: '20px',
  transition: 'all 0.3s ease',
});

export const navAndMenu = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

export const topWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  width: '100%',
});

export const menuWrapper = style({
  display: 'none',
  '@media': {
    '(max-width: 768px)': {
      display: 'block',
    },
  },
});

export const menuButton = style({
  background: 'none',
  border: 'none',
  cursor: 'pointer',
});

export const menuIcon = style({
  width: '24px',
  height: '24px',
  color: '#fff',
});

export const nav = style({
  overflow: 'hidden',
  maxHeight: '0',
  opacity: 0,
  transform: 'translateY(-10px)',
  transition: 'all 0.3s ease',

  '@media': {
    '(min-width: 769px)': {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      gap: '1rem',
      maxHeight: 'none',
      opacity: 1,
      transform: 'none',
    },
  },
});

export const navOpen = style({
  maxHeight: '300px',
  opacity: 1,
  transform: 'translateY(0)',
});

export const navList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  '@media': {
    '(min-width: 769px)': {
      flexDirection: 'row',
    },
  },
});

export const navItem = style({
  fontSize: '1.2rem',
  color: '#fff',
  cursor: 'pointer',
});

export const userInfo = style({
  display: 'flex',
  alignItems: 'center',
  color: '#fff',
  gap: '0.5rem',
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
