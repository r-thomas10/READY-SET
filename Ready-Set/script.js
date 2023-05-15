function main() {
  let grow = document.getElementById("grow-me");
  grow.classList.add("big");

  document.querySelector("#shrink-me").classList.remove("big");

  const listItems = document.querySelectorAll("li");

  listItems.forEach((item) => {
    console.log(item.textContent);
  });

  let link = document.getElementById("a");
}
