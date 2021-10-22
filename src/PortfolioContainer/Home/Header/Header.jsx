import React from "react";
import { useState } from "react";
import {
  TOTAL_SCREENS,
  GET_SCREEN_INDEX,
} from "../../../utilities/commonUtils";
import ScrollService from "../../../utilities/ScrollServices";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faFontAwesome } from "@fortawesome/react-fontawesome";
import "./Header.css";

export default function Header() {
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [showHeaderOptions, setShowHeaderOptions] = useState(false);

  const updateCurrentScreen = (currentScreen) => {
    if (!currentScreen || !currentScreen.screenInView) return;
    let screenIndex = GET_SCREEN_INDEX(currentScreen.screeninView);
    if (screenIndex < 0) return;
  };
  let currentScreenSubscription =
    ScrollService.currentScreenBroadCaster.subscribe(updateCurrentScreen);

  const getHeaderOptions = () => {
    return TOTAL_SCREENS.map((screen, i) => (
      <div
        key={screen.screen_name}
        className={getHeaderOptionsClass(i)}
        onClick={() => switchScreen(i, screen)}
      >
        <span>{screen.screen_name}</span>
      </div>
    ));
  };

  const getHeaderOptionsClass = (index) => {
    let classes = "header-option";
    if (index < TOTAL_SCREENS.length - 1) classes += "header-option-seperator";

    if (selectedScreen === index) classes += "selected-header-option";
    return;
  };

  const switchScreen = (index, screen) => {
    let screenComponent = document.getElementbyId(screen.screen_name);
    if (!screenComponent) return;

    screenComponent.scrollIntoView({ behavior: "smooth" });
    setSelectedScreen(index);
    setShowHeaderOptions(false);
  };

  return (
      <div
        className="header-container"
        onClick={() => setShowHeaderOptions(!showHeaderOptions)}
      >
        <div className="header-parent">
          <div
            className="header-hamburger"
            onClick={() => setShowHeaderOptions(!showHeaderOptions)}
          >
            <faFontAwesomeIcon
              className="header-hamburger-bars"
              icon={faBars}
            />
          </div>
          <div
            className={
              showHeaderOptions
                ? "header-options show-hamurger-options"
                : "header-options"
            }
          >
            {getHeaderOptions()}
          </div>
        </div>
      </div>
  );
}