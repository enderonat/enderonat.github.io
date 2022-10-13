document.body.scrollTop = document.documentElement.scrollTop = 0;

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle('show', entry.isIntersecting);
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

var animation = bodymovin.loadAnimation({
  container: document.getElementById("animationContainer"),
  path: "line-chart.json",
  render: "jpeg",
  autoplay: "false",
  name: "animation",
});
