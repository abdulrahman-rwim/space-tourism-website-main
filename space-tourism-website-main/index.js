"use strict";

const toggleBtn = document.querySelector(".mobile-nav-toggle");
const navigation = document.querySelector(".primary-navigation");

const destinationTabs = document.querySelectorAll(".destination__tabs button");
const destinationTabsContainer = document.querySelector(".destination__tabs");
const destinationImg = document.querySelector(".destination__image img");
const destinationPlanet = document.querySelector(".destination__info h2");
const destinationInfo = document.querySelector(".destination__info p");
const destinationDistance = document.querySelector(".distance");
const destinationTravelTime = document.querySelector(".travel-time");

const dotIndicatorsContainer = document.querySelector(".dot-indicators");
const dotIndicators = document.querySelectorAll("[data-indicator]");

const crewInfoTitle = document.querySelector(".crew__info--title");
const crewInfoSubtitle = document.querySelector(".crew__info--subtitle");
const crewInfoDsecription = document.querySelector(".crew__info--dsecription");
const crewImage = document.querySelector(".crew__image");

const numberedIndicatorsContainer = document.querySelector(
  ".numbered-indicators"
);
const numberedIndicators = document.querySelectorAll("[data-number]");
const technologyType = document.querySelector(".technology__type");
const technologyInfo = document.querySelector(".technology__info");
const technologyImage = document.querySelector(".technology__image");
const technologyImagePortrait = document.querySelector(
  ".technology__image--portrait"
);

toggleBtn.onclick = function () {
  navigation.classList.toggle("active");
  this.classList.toggle("active");
  this.classList.contains("active")
    ? this.setAttribute("aria-expanded", true)
    : this.setAttribute("aria-expanded", false);
};

fetch("data.json")
  .then((response) => {
    return response.json();
  })
  .then((object) => {
    const { crew, destinations, technology } = object;

    destinations.forEach((destination) => {
      const switchPlanet = () => {
        destinationImg.setAttribute("src", destination.images.png);
        destinationInfo.textContent = destination.description;
        destinationPlanet.textContent = destination.name;
        destinationDistance.textContent = destination.distance;
        destinationTravelTime.textContent = destination.travel;
      };
      destinationTabsContainer?.addEventListener("click", function (e) {
        destinationTabs.forEach((tab) =>
          tab.setAttribute("aria-selected", false)
        );
        e.target.setAttribute("aria-selected", true);
        const planet = e.target.textContent;
        if (planet === destination.name)
          switch (planet) {
            case "Moon":
              switchPlanet();
              break;
            case "Mars":
              switchPlanet();
              break;
            case "Europa":
              switchPlanet();
              break;
            case "Titan":
              switchPlanet();
              break;
          }
      });
    });
    crew.forEach((crew) => {
      const switchCrew = () => {
        crewImage.setAttribute("src", crew.images.png);
        crewInfoTitle.textContent = crew.role;
        crewInfoSubtitle.textContent = crew.name;
        crewInfoDsecription.textContent = crew.bio;
      };

      dotIndicatorsContainer?.addEventListener("click", function (e) {
        dotIndicators.forEach((dot) =>
          dot.setAttribute("aria-selected", false)
        );
        e.target.setAttribute("aria-selected", true);
        const crewIndex = e.target.dataset.indicator;
        if (crewIndex == crew.index) {
          switch (crewIndex) {
            case "0":
              switchCrew();
              break;
            case "1":
              switchCrew();
              break;
            case "2":
              switchCrew();
              break;
            case "3":
              switchCrew();
              break;
          }
        }
      });
    });
    technology.forEach((tech) => {
      const switchTech = () => {
        technologyImage.setAttribute("src", tech.images.landscape);
        technologyImagePortrait.setAttribute("src", tech.images.portrait);
        technologyInfo.textContent = tech.description;
        technologyType.textContent = tech.name;
      };
      numberedIndicatorsContainer?.addEventListener("click", function (e) {
        numberedIndicators.forEach((indicator) =>
          indicator.setAttribute("aria-selected", false)
        );
        e.target.setAttribute("aria-selected", true);
        const number = e.target.textContent;
        if (number == tech.index) {
          switch (number) {
            case "1":
              switchTech();
              break;
            case "2":
              switchTech();
              break;
            case "3":
              switchTech();
              break;
          }
        }
      });
    });
  });
