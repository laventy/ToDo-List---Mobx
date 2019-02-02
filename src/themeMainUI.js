import React from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { blueGrey, grey, blue, red } from '@material-ui/core/colors';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: blue[600],
      main: blue[700],
      dark: blue[800]
    },
    secondary: {
      light: red[600],
      main: red[700],
      dark: red[800]
    }
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: blueGrey[900],
        height: '70px'
      }
    },
    MuiTableCell: {
      root: {
        padding: '4px 24px 4px 24px'
      }
    },
    MuiInput: {
      underline: {
        '&:before': {
          borderBottom: `1px solid ${grey[300]}`
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: `1px solid ${grey[300]}`
        }
      }
    },
    MuiTab: {
      root: {
        maxWidth: 'unset'
      }
    },
    MuiTooltip: {
      popper: {
        zIndex: 1
      }
    }
  }
});

// Expose the theme as a global variable so people can play with it.
if (process.browser) {
  window.theme = theme;
}

function muiTheme(Component) {
  function muiTheme(props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return muiTheme;
}

export default muiTheme;
