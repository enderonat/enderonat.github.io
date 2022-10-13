document.body.scrollTop = document.documentElement.scrollTop = 0;

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

var animation = bodymovin.loadAnimation({
  container: document.getElementById("animationContainer"),
  path: "line-chart.json",
  render: "svg",
  autoplay: "false",
  name: "animation",
});

const ctx = animation.getContext("2d", { willReadFrequently: true });
