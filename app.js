// const clock = document.querySelector(".clock");


























const clock = document.querySelector(".clock");

function tick() {
    const now = new Date();
    const h = now.getHours().toString().padStart(2, '0');
    const m = now.getMinutes().toString().padStart(2, '0');
    const s = now.getSeconds().toString().padStart(2, '0');

    const html = `
    <span>${h} :</span>
    <span>${m} :</span>
    <span>${s} </span>
    `;
    clock.innerHTML = html;
}

//run immediately
tick();

//update every second
setInterval(tick, 1000);