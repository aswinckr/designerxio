const brightred60 = `#F35242`;
const grey90 = `#232129`;
const black80 = `#1c1d25`;
const white = `#fff`;
const lightWhite = `rgba(255, 255, 255, 0.86)`;
const opaqueLightYellow = `rgba(255, 229, 100, 0.2)`;
const opaqueLightWhite = `hsla(0, 0%, 100%, 0.2)`;
const lightGray = `hsla(0, 0%, 0%, 0.2)`;
const beautFrom = `#FBFAF6`;

export default {
  text: grey90,
  background: white,
  primary: brightred60,
  secondary: black80,
  muted: lightGray,
  input: beautFrom,
  highlight: opaqueLightYellow,
  heading: grey90,
  nav: lightWhite,
  prism: {
    background: `#011627`,
    comment: `#809393`,
    string: `#addb67`,
    var: `#d6deeb`,
    number: `#f78c6c`,
    constant: `#82aaff`,
    punctuation: `#c792ea`,
    className: `#ffc98b`,
    tag: `#ffa7c4`,
    boolean: `#ff5874`,
    property: `#80cbc4`,
    namespace: `#b2ccd6`,
    highlight: `hsla(207, 95%, 15%, 1)`,
  },
  modes: {
    dark: {
      text: lightWhite,
      background: grey90,
      primary: brightred60,
      secondary: lightWhite,
      muted: opaqueLightWhite,
      highlight: brightred60,
      heading: white,
    },
  },
};
