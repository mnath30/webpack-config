import "./main.css";
import icon from "./initials.png";

const component = () => {
  const container = document.createElement("div");
  container.classList.add("container");
  const element = document.createElement("h1");
  element.innerText = `Welcome to custom webpack config`;

  const logoicon = new Image();
  logoicon.src = icon;
  logoicon.classList.add("logo");

  container.appendChild(logoicon);
  container.appendChild(element);
  return container;
};

document.body.appendChild(component());
