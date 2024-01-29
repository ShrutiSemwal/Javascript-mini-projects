const form = document.getElementById("form-input");
const verifyBtn = document.getElementById("verifyBtn");
const copyBtn = document.getElementById("copyBtn");
const otp = document.querySelectorAll("span");

const generateOTP = () => {
  otp.forEach((code) => {
    code.textContent = Math.floor(Math.random() * 10);
  });
};

const onSubmit = (e) => {
  e.preventDefault();
  const emailInput = document.getElementById("email-input").value;
  if (emailInput === "") {
    alert("Please fill out email field..");
  } else {
    generateOTP();
  }
};

const onVerifyClick = () => {
  generateOTP();
};

const onCopyClick = () => {
  const otpText = Array.from(otp)
    .map((code) => code.textContent)
    .join("");
  navigator.clipboard.writeText(otpText);
  alert("OTP copied to clipboard!");
};

//Event Listeners
form.addEventListener("submit", onSubmit);
verifyBtn.addEventListener("click", onVerifyClick);
copyBtn.addEventListener("click", onCopyClick);
