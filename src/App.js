import React, { Component } from 'react';
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation, FullpageContext} from '@ap.cx/react-fullpage';
import Main from "./components/Main";
import "./styles/index.scss";

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.StrictMode>
        <Main />
      </React.StrictMode>
    );
  }
}

export default App;
