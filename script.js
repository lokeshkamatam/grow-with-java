const jobs=[
 {company:"TCS",title:"Software Engineer",type:"Fresher",place:"India",tag:"Hiring"},
 {company:"Infosys",title:"Systems Engineer",type:"Fresher",place:"Multiple Locations",tag:"Off Campus"},
 {company:"Accenture",title:"Associate Software Engineer",type:"0–2 Years",place:"India",tag:"Hiring"},
 {company:"Wipro",title:"Project Engineer",type:"Fresher",place:"India",tag:"Freshers"},
 {company:"Cognizant",title:"Programmer Analyst",type:"Fresher",place:"Multiple Locations",tag:"Hiring"},
 {company:"Capgemini",title:"Software Engineer",type:"0–1 Years",place:"India",tag:"Drive"}
];
const grid=document.getElementById("jobGrid");
jobs.forEach((j,i)=>{
 const el=document.createElement("article");
 el.className="job-card";
 el.innerHTML=`<div class="top"><div class="logo">${j.company[0]}</div><span class="label">${j.tag}</span></div>
 <h3>${j.title}</h3><p>${j.company}</p><div class="job-meta"><span>${j.type}</span><span>${j.place}</span></div>
 <div class="job-footer"><span>Updated recently</span><a href="#about">View →</a></div>`;
 grid.appendChild(el);
});
const themeBtn=document.getElementById("themeBtn");
themeBtn.addEventListener("click",()=>{
 document.body.classList.toggle("dark");
 themeBtn.textContent=document.body.classList.contains("dark")?"☀":"☾";
});
const menuBtn=document.getElementById("menuBtn");
menuBtn.addEventListener("click",()=>document.querySelector("nav").classList.toggle("mobile-open"));
// ===============================
// Google Login User
// ===============================

const userArea = document.getElementById("userArea");

const credential = localStorage.getItem("googleCredential");

if (credential && userArea) {

    try {

        const payload = JSON.parse(
            atob(
                credential.split(".")[1]
                    .replace(/-/g, "+")
                    .replace(/_/g, "/")
            )
        );

        const name = payload.name || "User";
        const picture = payload.picture || "";

        userArea.innerHTML = `
            <div class="user-menu">
                <img 
                    src="${picture}" 
                    alt="${name}"
                    class="user-avatar"
                >

                <span class="user-name">
                    ${name}
                </span>

                <button 
                    class="logout-btn"
                    onclick="logoutUser()">
                    Logout
                </button>
            </div>
        `;

    } catch (error) {

        console.error("Unable to read Google user:", error);

    }
}


// Logout
function logoutUser() {

    localStorage.removeItem("googleCredential");

    window.location.href = "index.html";
}

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".navbar nav");

if (menuBtn && nav) {

    menuBtn.addEventListener("click", function () {

        nav.classList.toggle("active");

        const isOpen = nav.classList.contains("active");

        menuBtn.setAttribute("aria-expanded", isOpen);

        menuBtn.textContent = isOpen ? "✕" : "☰";
    });

    nav.querySelectorAll("a").forEach(function(link) {

        link.addEventListener("click", function() {

            nav.classList.remove("active");

            menuBtn.setAttribute("aria-expanded", "false");

            menuBtn.textContent = "☰";
        });

    });
}