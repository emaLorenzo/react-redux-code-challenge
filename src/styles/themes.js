import { createMuiTheme } from '@material-ui/core/styles';

export const originalTheme = createMuiTheme({
  name: 'dark',
  palette: {
    type: 'light',
    border: '#CBCBCB',
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none'
      }
    }
  },
  typography: {
    fontFamily: '"Product Sans", serif',
    useNextVariants: true,
  },
});

export const customTheme = createMuiTheme({
  name: 'light',
  palette: {
    type: 'light',
    border: '#CBCBCB',
  },
  typography: {
    fontFamily: '"Product Sans", serif',
    useNextVariants: true,
  },
});
