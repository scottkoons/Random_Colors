// 1. Select the section with an id of container without using querySelector.
const selectContainerId = document.getElementById("container");

// 2. Select the section with an id of container using querySelector.
const selectContainer = document.querySelector("#container");

// 3. Select all of the list items with a class of “second”.
const selectSecond = document.querySelectorAll(".second");

// 4. Select a list item with a class of third, but only the list item inside of the ol tag.
const selectThirdOl = document.querySelector("ol > .third");

// 5. Give the section with an id of container the text “Hello!”.
selectContainerId.append((document.createElement.innerHTML = "Hello!"));

// 6. Add the class main to the div with a class of footer.
const addClass = document.querySelector(".footer").classList.add("main");

// 7. Remove the class main on the div with a class of footer.
const removeClass = document.querySelector(".footer").classList.remove("main");

// 8. Create a new li element.
const newLi = document.createElement("li");

// 9. Give the li the text “four”.
newLi.innerText = "four";

// 10. Append the li to the ul element.
document.querySelector("ul").append(newLi);

// 11. Loop over all of the lis inside the ol tag and give them a background color of “green”.
const makeGreen = document.querySelectorAll("ol > li");
for (let i = 0; i < makeGreen.length; i++) {
  makeGreen[i].style.backgroundColor = "green";
}

// 12. Remove the div with a class of footer
const removeFooter = document.querySelector(".footer");
removeFooter.remove();
