const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

checkButton.addEventListener("click", () => {
  const inputValue = textInput.value.trim();
  const replaced = inputValue.toLowerCase().replace(/[^a-z0-9]/g, ""); 

  
  if (inputValue === "") {
    alert("Please input a value");
  } else if (replaced === [...replaced].reverse().join("")) {
    result.innerText = `${inputValue} is a palindrome`;
  } else {
    result.innerText = `${inputValue} is not a palindrome`;
  }
});

