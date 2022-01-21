// 로그인 관련
const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const userName = document.querySelector(".user-name");

function onLoginSubmit(event) {
    event.preventDefault();
    username = loginInput.value;

    if (username == "") {
        alert("plz write your name");
    } else if (username.length > 15) {
        alert("Your name is too long");
    } else {
        userName.innerText = "Welcome " + username + "!!";
        loginForm.style.display = "none";
    }
}

loginForm.addEventListener("submit", onLoginSubmit);

// 시계 관련
const clockHour = document.querySelector(".clock .clock-hour");
const clockMinute = document.querySelector(".clock .clock-minute");
const clockSecond = document.querySelector(".clock .clock-second");

function getClock() {
    const date = new Date();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clockHour.innerText = `${hours}`;
    clockMinute.innerText = `${minutes}`;
    clockSecond.innerText = `${seconds}`;
}
getClock();
setInterval(getClock, 1000);

// 배경화면 관련
const bgImgs = [
    {
        url: "img/ice-cream-g6d2c4cd1b_1920",
        type: "jpg",
    },
    {
        url: "img/lake-constance-g231f96db3_1920",
        type: "jpg",
    },
    {
        url: "img/river-g80d23294f_1920",
        type: "jpg",
    },
    {
        url: "img/snow-gd530dd812_1920",
        type: "jpg",
    },
    {
        url: "img/winter-ge8c2f693c_1920",
        type: "jpg",
    },
];

const todaysBg = bgImgs[Math.floor(Math.random() * bgImgs.length)];
const bg = document.querySelector('.background');
bg.style.backgroundImage = "url('" + todaysBg.url + "." + todaysBg.type + "')";
