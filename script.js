const calorieCounter = document.getElementById("calorie-counter");
const budgetNumberInput = document.getElementById("budget");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");
let isError = false;

const cleanInputString = (str) => {
    let regex = /[+-\s]/g;
    return str.replace(regex, "");
};

const isInvalidInput = (str) => {
    let regex = /\d+e\d+/i;
    return str.match(regex);
};

const addEntry = () => {
    const targetId = "#" + entryDropdown.value
    const targetInputContainer = document.querySelector(`${targetId} .input-container`);
    console.log(targetInputContainer);
};
console.log(addEntry());