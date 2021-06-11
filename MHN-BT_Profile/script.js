const reviews = [
    {
        id: 1,
        name: "Nguyen Cong Minh",
        job: "Frontend Developer",
        img: "img/minh.jpg",
        text: "student of facult information technology. i have an ambitious that hack nasa with html and css ",
    },
    {
        id: 2,
        name: "Ngoc Bao",
        job: "Hack Nasa",
        img: "img/bao.jpg",
        text: "student of facult information technology. i have an ambitious that hack nasa with html and css ",
    },
    {
        id: 3,
        name: "Nam",
        job: "Hack Nasa",
        img: "img/nam.jpg",
        text: "student of facult information technology. i have an ambitious that hack nasa with html and css ",
    },
    {
        id: 4,
        name: "Tinh",
        job: "Rich Kid",
        img: "img/tinh.jpg",
        text: "student of facult information technology. i have an ambitious that hack nasa with html and css ",
    },
    {
        id: 5,
        name: "Hieu",
        job: "Thần Y",
        img: "img/hieu.jpg",
        text: "bốc thuốc không cần xách, không phải cân đo đong đếm, bốc đến khi tổ tiên bảo đủ rồi thì dừng. lương 1000$",
    },
];


const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");


const prvBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const followBtn = document.querySelector(".follow-btn");


let currentItem = 0;


window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem);
})

function showPerson(numberarray) {
    const item = reviews[numberarray];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    infor.textContent = item.text;
}
// next person
nextBtn.addEventListener('click', function () {
    if(currentItem < 4) {
        currentItem++;
    } else {
        currentItem = 0;
    }
    showPerson(currentItem);
})
// previous person
prvBtn.addEventListener('click',function () {
    if(currentItem > 0) {
        currentItem--;
    } else {
        currentItem = 5;
    }
    showPerson(currentItem);
})
// suprise btn 
followBtn.addEventListener('click',function () {
    followBtn.innerHTML = "followed";
})