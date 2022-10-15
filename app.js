const innerBoxes = document.querySelectorAll(".innerBox");

const boxTrigger = (event, index) => {
    const input = event.target;
    input.textContent = `${input.id}`;
};

innerBoxes.forEach((box) => box.addEventListener("click", boxTrigger));
