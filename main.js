const parallaxImg1 = document.querySelector(".baner");
const parallaxImg2 = document.querySelector(".support");

function parallax() {
  let offset = window.pageYOffset;
  parallaxImg1.style.backgroundPositionY = offset * -0.5 + "px";
  parallaxImg2.style.backgroundPositionY = offset * -0.3 + "px";
}
window.addEventListener("scroll", parallax);

const logo = document.querySelector(".logo");
const goAbout = document.querySelector(".goAbout");
const goGallery = document.querySelector(".goGallery");
const goAboutUs = document.querySelector(".goAboutUs");
const goSupport = document.querySelector(".goSupport");
const goContact = document.querySelector(".goContact");
const centerBtn = document.querySelector(".centerBtn");
const li = document.querySelector("li");
const list = Array.from(li);

const goTo = function () {
  if (this.classList.contains("logo")) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else if (this.classList.contains("goAbout")) {
    window.scrollTo({
      top: 600,
      behavior: "smooth",
    });
  } else if (this.classList.contains("goGallery")) {
    window.scrollTo({
      top: 1050,
      behavior: "smooth",
    });
  } else if (this.classList.contains("goAboutUs")) {
    window.scrollTo({
      top: 3700,
      behavior: "smooth",
    });
  } else if (this.classList.contains("goSupport")) {
    window.scrollTo({
      top: 3750,
      behavior: "smooth",
    });
  } else if (this.classList.contains("goContact")) {
    window.scrollTo({
      top: 3800,
      behavior: "smooth",
    });
  } else if (this.classList.contains("centerBtn")) {
    window.scrollTo({
      top: 630,
      behavior: "smooth",
    });
  }
};

logo.addEventListener("click", goTo);
goAbout.addEventListener("click", goTo);
goGallery.addEventListener("click", goTo);
goAboutUs.addEventListener("click", goTo);
goSupport.addEventListener("click", goTo);
goContact.addEventListener("click", goTo);
centerBtn.addEventListener("click", goTo);

const artOne = document.querySelector(".one");
const artFive = document.querySelector(".five");
const artNine = document.querySelector(".nine");
const artFour = document.querySelector(".four");
const artEight = document.querySelector(".eight");
const artTwelve = document.querySelector(".twelve");
const showArticle = () => {
  const scrollValue = window.scrollY;
  const artOneFromTop = artOne.offsetTop;
  const artOneHeight = artOne.offsetHeight;
  const artFiveFromTop = artFive.offsetTop;
  const artFiveHeight = artFive.offsetHeight;
  const artNineFromTop = artNine.offsetTop;
  const artNineHeight = artNine.offsetHeight;
  const artFourFromTop = artFour.offsetTop;
  const artFourHeight = artFour.offsetHeight;
  const artEightFromTop = artEight.offsetTop;
  const artEightHeight = artEight.offsetHeight;
  const artTwelveFromTop = artTwelve.offsetTop;
  const artTwelveHeight = artTwelve.offsetHeight;

  if (scrollValue > artOneFromTop + artOneHeight) {
    artOne.classList.add("active");
  }
  if (scrollValue > artFiveFromTop + artFiveHeight) {
    artFive.classList.add("active");
  }
  if (scrollValue > artNineFromTop + artNineHeight) {
    artNine.classList.add("active");
  }
  if (scrollValue > artFourFromTop + artFourHeight) {
    artFour.classList.add("active");
  }
  if (scrollValue > artEightFromTop + artEightHeight) {
    artEight.classList.add("active");
  }
  if (scrollValue > artTwelveFromTop + artTwelveHeight) {
    artTwelve.classList.add("active");
  }
};
window.addEventListener("scroll", showArticle);
