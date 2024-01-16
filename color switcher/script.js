const grayBox = document.querySelector(".gray-box");
const blueBox = document.querySelector(".blue-box");
const greenBox = document.querySelector(".green-box");
const orangeBox = document.querySelector(".orange-box");

// Functions
const onClick = (e) => {
  if (e.target.className === "gray-box") {
    document.body.style.backgroundColor = "gray";
  } else if (e.target.className === "blue-box") {
    document.body.style.backgroundColor = "blue";
  } else if (e.target.className === "green-box") {
    document.body.style.backgroundColor = "green";
  } else {
    document.body.style.backgroundColor = "orange";
  }
};

const onMouseOut = () => {
  document.body.style.backgroundColor = "#e1e1e1";
};
//Event Listeners
grayBox.addEventListener("click", onClick);
blueBox.addEventListener("click", onClick);
greenBox.addEventListener("click", onClick);
orangeBox.addEventListener("click", onClick);
grayBox.addEventListener("mouseout", onMouseOut);
blueBox.addEventListener("mouseout", onMouseOut);
greenBox.addEventListener("mouseout", onMouseOut);
orangeBox.addEventListener("mouseout", onMouseOut);
