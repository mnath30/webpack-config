import "./main.css";
import icon from "./initials.png";
import _ from "lodash";

const component = () => {
  const container = document.createElement("div");
  const content = document.createElement("div");
  container.classList.add("container");
  content.classList.add("heading");
  const element = document.createElement("h1");
  const button = document.createElement("button");
  const br = document.createElement("br");
  button.innerHTML = "Print to console";
  button.classList.add("btn");
  element.innerText = `Welcome to custom webpack config`;
  content.appendChild(br);

  const logoicon = new Image();
  logoicon.src = icon;
  logoicon.classList.add("logo");

  button.onclick = (e) =>
    import("./print").then((module) => {
      const print = module.default;
      print();
    });

  content.appendChild(logoicon);
  content.appendChild(element);
  container.appendChild(content);
  container.appendChild(button);
  return container;
};

document.body.appendChild(component());
