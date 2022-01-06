const skillImages = ['images/android.png', 'images/kotlin.png', 'images/java.png', 'images/django.png'];
const skillTexts = ['Android Development using...', 'Kotlin', '& Java', 'Web Backend Development using Django']
const altTexts = ['Android', 'Kotlin', 'Java', 'Django']
let widthAndHeight = 26
if (screen.width <= 600) {
  widthAndHeight = 20
  console.log(screen.width)
}
slideSkill(0);

function slideSkill(index) {
  var skillSet = document.querySelector(".skill-set");
  skillSet.innerHTML = ""
  skillSet.innerHTML = `<div class="skills"> <img src="${skillImages[index]}" alt="${altTexts[index]} Icon" width="48px" height="48px"> <p>${skillTexts[index]}</p></div>`
  index++
  if (index === skillImages.length) { index = 0 }
  setTimeout(function () { slideSkill(index); }, 2000);
}


/*
    Sidebar
*/
const sidebarButton = document.getElementById("sidebarButton")
const projects = document.querySelector(".projects")
var sidebar = true
function toggleSidebarValue() {
  sidebar = !(sidebar)
}

function toggleSlidebar() {

  console.log(widthAndHeight)
  if (sidebar) {
    console.log("Open")
    sidebarButton.innerHTML = ""
    sidebarButton.innerHTML = `<img src="images/cross.svg" width="${widthAndHeight}" height="${widthAndHeight}" alt="Menu Button">`
    sidebarButton.style.zIndex = 9999999
    projects.style.display = "block"
    toggleSidebarValue()
  }
  else {
    console.log("Close")
    sidebarButton.innerHTML = ""
    sidebarButton.innerHTML = `<img src="images/menu.svg" width="${widthAndHeight}" height="${widthAndHeight}" alt="Menu Button">`
    projects.style.display = "none"
    toggleSidebarValue()
  }
}

sidebarButton.addEventListener("click", toggleSlidebar)
