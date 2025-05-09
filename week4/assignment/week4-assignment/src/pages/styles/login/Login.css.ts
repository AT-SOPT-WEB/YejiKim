import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  padding: '3rem',
});

export const title = style({
  fontSize: '2rem',
  fontWeight: 'bold',
});

export const link = style({
  color: '#3D90D7',
  fontSize: '1rem',
  fontWeight: 'bold',
  borderBottom: '1.5px solid #3D90D7',
  cursor: 'pointer',
});
