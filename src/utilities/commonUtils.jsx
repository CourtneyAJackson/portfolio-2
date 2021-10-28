import Home2 from "../PortfolioContainer/Home/Home2";
import Resume from "../PortfolioContainer/Resume/Resume";
import AboutMe from "../PortfolioContainer/AboutMe/AboutMe";

export const TOTAL_SCREENS = [
  {
    screen_name: "Home2",
    component: Home2,
  },
  {
    screen_name: "AboutMe",
    component: AboutMe
  },
  {
    screen_name: "Resume",
    component: Resume
  }
]
export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1
  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }
  return -1;
}