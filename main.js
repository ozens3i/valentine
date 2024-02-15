onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);
};

var clickCount = 0;

var texts = [
    "Happy Valentine's Day!",
    "Roses are red, violets are blue,",
    "I'm grateful to have a friend like you 🌹",
    "- ChatGPT",
    "JK sorry nagcricringe ako isulat to 😫",
    "Pero maraming salamat!",
    "And I hope you are doing good! 👍",
    "Your presence means so much to me 💖",
    "I know I'm late but 😣",
    "I hope this flower brightens up your day 🌻",
    "Thanks for being the amazing friend that you are 😎",
    "'Di ko na alam ano pa isusulat pero...",
    "Wishing you all the best on exams tomorrow 🙏",
    "I believe you can ace it 💯",
    "Again...",
    "Happy Valentine's Day 💘",
];

var texts2 = [
    "Happy Valentine's Day!",
    "Roses are red, violets are blue,",
    "I'm grateful to have a friend like you 🌹",
    "- ChatGPT",
    "JK sorry nagcricringe ako isulat to 😫",
    "Pero maraming salamat!",
    "And I hope you are doing good! 👍",
    "Your presence means so much to me 💖",
    "Wishing you all the best on exams tomorrow 🙏",
    "I know I'm late 😣",
    "But I hope this flower brightens up your day 🌻",
    "Ewan na 🤣 ano pa ba idadagdag",
    "Lagi kang iinom ng tubig 🥤",
    "Lagi kang mag-iingat! 💖",
    "Again...",
    "Happy Valentine's Day 💘",
];

document.addEventListener('click', function () {
    changeText();
});

function changeText() {
    var valentineText = document.getElementById("valentineText");

    // Get the current hour
    var currentHour = new Date().getHours();

    // Use texts2 at night (assuming night is from 7 PM to 6 AM)
    var selectedTexts = currentHour >= 19 || currentHour < 6 ? texts2 : texts;

    // Check if clickCount is within the bounds of the selected array
    if (clickCount < selectedTexts.length) {
        valentineText.innerHTML = selectedTexts[clickCount];
        clickCount++;

        // If clickCount reaches the end, remove the click event listener
        if (clickCount === selectedTexts.length) {
            document.removeEventListener('click', changeText);
        }
    }
}
