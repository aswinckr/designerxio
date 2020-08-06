import merge from 'deepmerge';
import typography from './typography';
import colors from './colors';
import styles from './styles';
import prism from './prism';

export default merge(typography, {
  initialColorMode: `light`,
  colors,
  fonts: {
    heading: `Fugaz One, sans-serif`,
    body: `Barlow, sans-serif`,
    monospace: `Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
  },
  sizes: {
    container: 672,
  },
  radii: [8],
  transition: {
    hover: '0.2s',
  },
  fontWeights: {
    normal: 400,
    bold: 600,
  },
  forms: {
    label: {
      pb: 2,
      fontFamily: 'body',
      fontWeight: 'bold',
    },
    input: {
      backgroundColor: 'input',
      border: 'none',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
    select: {
      borderColor: 'gray',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
    textarea: {
      borderColor: 'gray',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
    slider: {
      bg: 'muted',
    },
  },

  styles,
  prism,
});
