const form = document.getElementById("item-form");
const listItems = document.querySelectorAll("li");
const list = document.querySelector("ul");
const clearBtn = document.querySelector("#clear");

// Functions
const onSubmit = (e) => {
  e.preventDefault();
  const itemInput = document.getElementById("item-input");
  const itemText = itemInput.value.trim();
  if (itemText === "") {
    alert("Please enter a todo...");
    return;
  }

  //Create a new list item
  const newItem = document.createElement("li");
  newItem.textContent = itemText;

  const button = document.createElement("button");
  button.className = "remove-item btn-link text-red";

  const icon = document.createElement("i");
  icon.className = "fa-solid fa-xmark";

  button.appendChild(icon);

  //Add todo to the list of todos
  newItem.appendChild(button);
  document.querySelector(".items").appendChild(newItem);

  //Clear the input field
  itemInput.value = "";
};
const onClick = () => {
  const itemList = document.querySelector("ul");
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
};

// Event Listneres
form.addEventListener("submit", onSubmit);

//Delete todo
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-xmark")) {
    e.target.parentNode.parentNode.remove();
  }
});
clearBtn.addEventListener("click", onClick);
