// main.js

// References to HTML elements
const trickOfTheDayName = document.getElementById("trick-of-the-day-name");
const trickOfTheDayDescription = document.getElementById("trick-of-the-day-description");
const tricksContainer = document.getElementById("tricks-container");
const comboOutput = document.getElementById("combo-output");
const singleTrickOutput = document.getElementById("single-trick-output");

// Load user settings from localStorage or default
let userSettings = JSON.parse(localStorage.getItem("userSettings")) || {
    maxFlips: 6,
    maxSpins: 1440,
    maxRolls: 5,
    maxCoasts: 5,
    maxBodyVarials: 360,
    maxRevs: 3,
    maxTwists: 720
};

// Filter tricks based on user settings
function getAvailableTricks(tricks) {
    return tricks.filter(trick => {
        if (!trick.skillLimits) return true;

        for (const key in trick.skillLimits) {
            if (key === "flip" && trick.skillLimits.flip > userSettings.maxFlips) return false;
            if (key === "spin" && trick.skillLimits.spin > userSettings.maxSpins) return false;
            if (key === "roll" && trick.skillLimits.roll > userSettings.maxRolls) return false;
            if (key === "coast" && trick.skillLimits.coast > userSettings.maxCoasts) return false;
            if (key === "bodyVarial" && trick.skillLimits.bodyVarial > userSettings.maxBodyVarials) return false;
            if (key === "rev" && trick.skillLimits.rev > userSettings.maxRevs) return false;
            if (key === "twist" && trick.skillLimits.twist > userSettings.maxTwists) return false;
        }

        return true;
    });
}

// Display Trick of the Day
function displayTrickOfTheDay(tricks) {
    const availableTricks = getAvailableTricks(tricks);
    if (availableTricks.length === 0) {
        trickOfTheDayName.textContent = "No available tricks";
        trickOfTheDayDescription.textContent = "";
        return;
    }

    const randomIndex = Math.floor(Math.random() * availableTricks.length);
    const trick = availableTricks[randomIndex];

    trickOfTheDayName.textContent = trick.name;
    trickOfTheDayDescription.textContent = trick.description;
}

// Display number of tricks on home page
function displayTrickCount(tricks) {
    const homeText = document.getElementById("home-trick-count");
    if (homeText) {
        homeText.textContent = `There are currently ${tricks.length} tricks implemented!`;
    }
}

// Generate combo
function generateCombo(tricks, length) {
    const availableTricks = getAvailableTricks(tricks);
    if (availableTricks.length === 0) {
        comboOutput.textContent = "No tricks selected!";
        return;
    }

    const combo = [];
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * availableTricks.length);
        combo.push(availableTricks[randomIndex].name);
    }

    comboOutput.textContent = combo.join(" → ");
}

// Generate single trick
function generateSingleTrick(tricks) {
    const availableTricks = getAvailableTricks(tricks);
    if (availableTricks.length === 0) {
        singleTrickOutput.textContent = "No tricks available!";
        return;
    }

    const randomIndex = Math.floor(Math.random() * availableTricks.length);
    singleTrickOutput.textContent = availableTricks[randomIndex].name;
}

// Save user settings
function saveUserSettings(settings) {
    localStorage.setItem("userSettings", JSON.stringify(settings));
    userSettings = settings;
}

// Expose functions for HTML event handlers
window.comboFunctions = {
    generateCombo,
    generateSingleTrick,
    displayTrickOfTheDay,
    displayTrickCount,
    saveUserSettings
};
