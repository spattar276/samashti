import Home from "../pages/home";
import AboutUs from "../pages/aboutUs";
import ContactUs from "../pages/contactUs";
import OurWork from "../pages/ourWork";
import Faq from "../pages/faq";
import Collaborators from "../pages/collaborators";

const MENU = ["Home", "Our Work", "About Us", "FAQ", "Collaborators", "Contact us"];

const PAGES = [
  {
    component: Home,
    styles:{
      height: "100vh",
      backgroundColor: "rgb(65 130 63)",
      color: "#FFFFFF",
      overflowY: "auto",
      paddingTop: "100px",
    }
  },
  {
    component: OurWork,
    styles:{
      height: "100vh",
      backgroundColor: "#0E5518",
      color: "#FFFFFF",
      overflowY: "auto",
      paddingTop: "100px",
    }
  },
  {
    component: AboutUs,
    styles:{
      height: "100vh",
      backgroundColor: "#90B232",
      color: "#FFFFFF",
      overflowY: "auto",
      paddingTop: "100px",
    }
  },
  {
    component: Faq,
    styles:{
      height: "100vh",
      backgroundColor: "#D4DF3C",
      color: "#FFFFFF",
      overflowY: "auto",
      paddingTop: "100px",
    }
  },
  {
    component: Collaborators,
    styles:{
      height: "100vh",
      backgroundColor: "#D4DF3C",
      color: "#FFFFFF",
      overflowY: "auto",
      paddingTop: "100px",
    }
  },
  {
    component: ContactUs,
    styles:{
      height: "100vh",
      backgroundColor: "#4F9646",
      color: "#FFFFFF",
      overflowY: "auto",
      paddingTop: "100px",
    }
  },
] 

export {MENU, PAGES};
