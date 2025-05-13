import { style } from '@vanilla-extract/css';

export const wrapper = style({
  position: 'relative',
  width: '80%',
});

export const input = style({
  width: '100%',
  padding: '12px 40px 12px 12px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  fontSize: '1rem',
  boxSizing: 'border-box',
});

export const toggleButton = style({
  position: 'absolute',
  top: '50%',
  right: '12px',
  transform: 'translateY(-50%)',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  color: '#495870',
});

export const icon = style({
  width: '18px',
  height: '18px',
});
