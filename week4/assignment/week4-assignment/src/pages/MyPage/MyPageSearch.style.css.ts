import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '3rem',
  gap: '3rem',
});

export const title = style({
  fontSize: '2rem',
  fontWeight: 'bold',
});

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  width: '100%',
});

export const searchResultList = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  width: '80%',
});

export const searchResultItem = style({
  width: '100%',
  padding: '10px',
  fontSize: '1rem',
  textAlign: 'center',
  color: '#333',
  backgroundColor: '#f9f9f9',
  borderRadius: '6px',
  transition: 'background-color 0.2s',
  cursor: 'pointer',

  ':hover': {
    backgroundColor: '#e0e0e0',
  },
});
