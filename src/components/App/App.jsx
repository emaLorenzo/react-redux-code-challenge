import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from 'styles/themes';
import HomePage from 'components/HomePage';
import DetailsPage from 'components/DetailsPage';
import './styles.less';

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <React.Fragment>
        <Route exact path="/" component={HomePage} />
        <Route path="/overview/:id" component={DetailsPage} />
      </React.Fragment>
    </Router>
  </MuiThemeProvider>
);

export default App;
