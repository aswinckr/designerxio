export default {
  root: {
    fontFamily: `body`,
    fontWeight: 'normal',
  },
  h1: {
    fontSize: '4em',
    fontFamily: `heading`,
  },
  h2: {
    fontFamily: `heading`,
  },
  h3: {
    fontFamily: `heading`,
    lineHeight: 1.7,
  },
  h4: {
    fontFamily: `heading`,
  },
  pre: {
    variant: `prism`,
    fontFamily: `monospace`,
    tabSize: 4,
    hyphens: `none`,
    marginBottom: 2,
    color: `white`,
    bg: `prism.background`,
    overflow: `auto`,
    borderRadius: 10,
    p: 3,
  },
  code: {
    fontFamily: `monospace`,
    // from typography overrideThemeStyles
    // "h1 code, h2 code, h3 code, h4 code, h5 code, h6 code"
    fontSize: `inherit`,
  },
  inlineCode: {
    borderRadius: `0.3em`,
    color: `secondary`,
    bg: `highlight`,
    paddingTop: `0.15em`,
    paddingBottom: `0.05em`,
    paddingX: `0.2em`,
  },
  // from typography overrideThemeStyles
  a: {
    color: `primary`,
    textDecoration: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  hr: {
    borderColor: `muted`,
  },
  p: {
    fontFamily: 'body',
    fontSize: 2,
    lineHeight: 1.7,
    code: {
      fontSize: `inherit`,
    },
  },
  li: {
    fontFamily: `body`,
    code: {
      fontSize: `inherit`,
    },
  },
  blockquote: {
    color: `inherit`,
    borderLeftColor: `inherit`,
    opacity: 0.8,
    '&.translation': {
      fontSize: `1em`,
    },
  },
  navLink: {
    textDecoration: 'none',
    fontFamily: 'body',
    fontWeight: 'normal',
    color: 'nav',
    transition: 'hover',
    opacity: .9,
    '&:hover': {
      color: 'primary',
      opacity: 1,
    },
  },

  small: {
    fontFamily: 'body',
  },
  header: {
    backgroundColor: 'heading',
    py: 1,
  },
};
