export const theme = Object.freeze({
  colors: {
    black: '#000',
    greyDark: '#424442',
    greyLight: '#a8baa6',
    // mainBackground: [
    //   'linear-gradient(350deg,rgb(6, 112, 10) 26%,rgb(20, 147, 5) 53%,rgb(24, 235, 1) 80%, rgb(11, 65, 4) 100%)',
    // ],
    modalWrapper: 'rgba(0, 0, 0, 0.5)',
  },
  fontSizes: {
    small: '18px',
    medium: '20px',
    large: '22px',
    xl: '24px',
    xxl: '26px',
    xxxl: '28px',
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    bold: 600,
  },
  spacing: value => `${4 * value}px`,
  shadows: {
    headerBorder: '0px 2px 4px -1px #00000066, 0px 1px 10px 0px #0000007f',
    small: '0px 1px 2px -1px #a8baa6, 0px 1px 5px 0px #424442',
    inHover: '0px 2px 4px -1px #a8baa6, 0px 1px 10px 0px #424442',
  },
  animation: {
    boxShadow: 'box-shadow 150ms linear',
  },
});
