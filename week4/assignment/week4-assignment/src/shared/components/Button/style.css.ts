import { style } from '@vanilla-extract/css';

export const button = style({
  width: '80%',
  borderRadius: '0.5rem',
  backgroundColor: '#495870',
  color: '#fff',
  fontSize: '1rem',
  textAlign: 'center',
  fontWeight: 'bold',
  cursor: 'pointer',
  padding: '15px 30px',
  transition: 'background-color 0.3s ease',

  selectors: {
    '&:disabled': {
      backgroundColor: '#A0A6B8',
      cursor: 'not-allowed',
      opacity: 0.5,
    },
  },
});
