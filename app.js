// DOM Elements
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const valueEl = document.querySelector(".value");

const acEl = document.querySelector(".ac");
const pmEl = document.querySelector(".pm");
const percentEl = document.querySelector(".percent");

const additionEl = document.querySelector(".addition");
const subtractionEl = document.querySelector(".subtraction");
const multiplication = document.querySelector(".multiplication");
const division = document.querySelector(".division");
const equal = document.querySelector(".equal");

const decimalEl = document.querySelector(".decimal");
const number0El = document.querySelector(".number-0");
const number1El = document.querySelector(".number-1");
const number2El = document.querySelector(".number-2");
const number3El = document.querySelector(".number-3");
const number4El = document.querySelector(".number-4");
const number5El = document.querySelector(".number-5");
const number6El = document.querySelector(".number-6");
const number7El = document.querySelector(".number-7");
const number8El = document.querySelector(".number-8");
const number9El = document.querySelector(".number-9");

const numberElArray = [
  number0El,
  number1El,
  number2El,
  number3El,
  number4El,
  number5El,
  number6El,
  number7El,
  number8El,
  number9El,
];

// Functions
const getValueWithoutComma = () => {
  const currentValueStr = valueEl.textContent;
  return currentValueStr.split(",").join("");
};

const getValueAsNum = () => {
  return parseFloat(getValueWithoutComma());
};

const setStrAsValue = (valueStr) => {
  const [wholeNumStr, decimalStr] = valueStr.split(".");
  if (decimalStr) {
    valueEl.textContent =
      parseFloat(wholeNumStr).toLocaleString() + "." + decimalStr;
  } else {
    return (valueEl.textContent = parseFloat(valueStr).toLocaleString());
  }
};

const handleNumberClick = (numStr) => {
  const currentValueStr = getValueWithoutComma();
  if (currentValueStr === "0") {
    valueEl.textContent = numStr;
  } else {
    setStrAsValue(currentValueStr + numStr);
  }
};

// Add event listeners to number and decimal
for (let i = 0; i < numberElArray.length; i++) {
  const numberEl = numberElArray[i];
  numberEl.addEventListener("click", () => {
    handleNumberClick(i.toString());
  });
}
decimalEl.addEventListener("click", () => {
  const currentValueStr = getValueWithoutComma();
  console.log(currentValueStr);
  if (!currentValueStr.includes(".")) {
    valueEl.textContent = setStrAsValue(currentValueStr) + ".";
  }
});

// Add event listeners to functions
acEl.addEventListener("click", () => {
  setStrAsValue("0");
});

pmEl.addEventListener("click", () => {});

percentEl.addEventListener("click", () => {
  const currentValueStr = getValueWithoutComma();
  const newValueNum = currentValueStr / 100;
  setStrAsValue(newValueNum.toString());
});

// Set up the time
const updateTime = () => {
  const currentTime = new Date();

  let currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();
  // judge our hour like 0-12 formatter
  if (currentHour > 12) {
    currentHour -= 12;
  }
  // when the time length is two but we don not have enough time to show we have use '0' to fill up time
  hourEl.textContent = currentHour.toString();
  minuteEl.textContent = currentMinute.toString().padStart(2, "0");
};
setInterval(updateTime, 1000);
// avoid the first null
updateTime();
