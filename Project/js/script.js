let navbar = document.querySelector(".header .navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};

document
  .querySelectorAll(".about .image-container .controls .control-btn")
  .forEach((btn) => {
    btn.onclick = () => {
      let src = btn.getAttribute("data-src");
      document.querySelector(".about .image-container .image").src = src;
    };
  });
//dropdown

function toggleDropdown(dropdownId) {
  const dropdownContent = document.getElementById(dropdownId + "Dropdown");
  dropdownContent.classList.toggle("show");
}

// Close the dropdowns when clicking outside of them
window.onclick = function (event) {
  const dropdowns = document.getElementsByClassName("dropdown-content");
  for (let i = 0; i < dropdowns.length; i++) {
    const openDropdown = dropdowns[i];
    if (
      event.target.matches(".dropbtn") &&
      !event.target.nextElementSibling.classList.contains("show")
    ) {
      // If the clicked element is a dropbtn and the dropdown is closed, open it
      openDropdown.classList.remove("show");
      if (
        event.target.nextElementSibling.id === openDropdown.id &&
        !event.target.nextElementSibling.classList.contains("show")
      ) {
        openDropdown.classList.add("show");
      }
    } else if (
      !event.target.matches(".dropbtn") &&
      openDropdown.classList.contains("show")
    ) {
      // If the clicked element is not a dropbtn and the dropdown is open, close it
      openDropdown.classList.remove("show");
    }
  }
};
