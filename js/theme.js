const btn = document.getElementById("themeBtn");

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
}

btn.onclick = () => {
  document.body.classList.toggle("light");
  const mode = document.body.classList.contains("light") ? "light" : "dark";
  localStorage.setItem("theme", mode);
};
