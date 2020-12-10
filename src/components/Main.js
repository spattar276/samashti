import React, { Component } from 'react';
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation, FullpageContext} from '@ap.cx/react-fullpage';
import Menu from "./Menu";
import {MENU, PAGES} from "../constants/constants";
import mainLogo from'../images/samastilogo.png';

class Main extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.StrictMode>

        <Fullpage>
          <div className="header">
            <div className="logo">
              <img className="logo-img" src={mainLogo} alt="samasti" />
            </div>
            <div className="navigation">
              <Menu menuItems = {MENU}/>
            </div>
          </div>
          <FullpageNavigation/>
          <FullPageSections>
          {
            PAGES.map((item, key) => {
              const {styles, component, ...rest} = item;
              const SelectedComponent = component;
              return(
                <FullpageSection key={key} style={styles} {...rest}>
                  <SelectedComponent />
                </FullpageSection>
              )
            })
          }
          </FullPageSections>
        </Fullpage>
      </React.StrictMode>
    );
  }
}

export default Main;
