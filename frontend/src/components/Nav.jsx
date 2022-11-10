import React from "react";
import { Link } from "react-router-dom";
import "./style/nav.css";
import HomeLink from "./HomeLink";
import CheeseLink from "./CheeseLink";
import RecipeLink from "./RecipeLink";
import iconeAccueil from "../assets/iconeAccueil.png";
import iconeFromage from "../assets/iconeFromage.png";
import iconeCuisine from "../assets/iconeCuisine.png";
import iconeAccueilSelected from "../assets/iconeAccueilSelected.png";
import iconeFromageSelected from "../assets/iconeFromageSelected.png";
import iconeCuisineSelected from "../assets/iconeCuisineSelected.png";

function Nav() {
  const [isCheeseOn, setIsCheeseOn] = React.useState(false);
  const [isRecipeOn, setIsRecipeOn] = React.useState(false);
  const [isHomeOn, setIsHomeOn] = React.useState(true);

  const cheeseOn = () => {
    setIsCheeseOn(true);
    setIsRecipeOn(false);
    setIsHomeOn(false);
  };
  const recipeOn = () => {
    setIsHomeOn(false);
    setIsCheeseOn(false);
    setIsRecipeOn(true);
  };
  const homeOn = () => {
    setIsRecipeOn(false);
    setIsCheeseOn(false);
    setIsHomeOn(true);
  };
  return (
    <div className="navbar">
      <nav className="navbarMobile">
        <ul className="listNav">
          <CheeseLink
            cheeseOn={cheeseOn}
            cheeseURL={isCheeseOn ? iconeFromageSelected : iconeFromage}
          />
          <HomeLink
            homeOn={homeOn}
            homeURL={isHomeOn ? iconeAccueilSelected : iconeAccueil}
            homeClass={isHomeOn ? "linkNav selected" : "linkNav"}
          />
          <RecipeLink
            recipeOn={recipeOn}
            recipeURL={isRecipeOn ? iconeCuisineSelected : iconeCuisine}
          />
        </ul>
      </nav>
      <nav className="navbarDesktop">
        <div className="logo">
          <a href="/" className="desktopHome">
            <img src="" alt="logo" className="logoImg" />
          </a>
        </div>
        <ul className="desktopLinks">
          <li className="desktopLi">
            <Link to="/Fromages" className="desktopLink">
              Nos Fromages
            </Link>
          </li>
          <li className="desktopLi">
            <Link to="/Recettes" className="desktopLink">
              Nos Recettes
            </Link>
          </li>
          <li className="desktopLi">
            <Link to="/" className="desktopLink">
              Nous Contacter
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
