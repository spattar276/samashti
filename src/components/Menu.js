import React from 'react';
import FullpageContext from  '@ap.cx/react-fullpage';

class Menu extends FullpageContext {

  constructor(props) {
    super(props);
  }

  render() {
    const {
      menuItems = []
    } = this.props;

    const {
      number, slides, transitionTiming,
    } = this.context;

    const gotoSlide = (slide) => {
      const { goto } = this.context;
      goto(slide);
    };

    if(!slides.length)
      return null;

    return (
      <ul>
        {
          slides.map((slide, i) => (
            <li
              key={i.toString()}
              style={{
                transition: `all 3ms ease-out`,
              }}
              onClick={() => gotoSlide(slide)}
              onKeyPress={() => gotoSlide(slide)}
              aria-label={`Slide ${i}`}
              className={number === i ? "active" : ""} >
              { menuItems[i] }
            </li>
          ))
        }
      </ul>
    );
  }
}

export default Menu;
