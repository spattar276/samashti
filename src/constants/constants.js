import Home from "../pages/home";
import AboutUs from "../pages/aboutUs";
import ContactUs from "../pages/contactUs";
import HowItWorks from "../pages/howItWorks";
import OurProjects from "../pages/ourProjects";

const MENU = ["Home", "How it works", "Our Mission", "About us", " Contact us"];

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
    component: HowItWorks,
    styles:{
      height: "100vh",
      backgroundColor: "#0E5518",
      color: "#FFFFFF",
      overflowY: "auto",
      paddingTop: "100px",
    }
  },
  {
    component: OurProjects,
    styles:{
      height: "100vh",
      backgroundColor: "#90B232",
      color: "#FFFFFF",
      overflowY: "auto",
      paddingTop: "100px",
    }
  },
  {
    component: AboutUs,
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
