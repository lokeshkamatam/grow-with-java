const themeBtn=document.getElementById("themeBtn");
if (themeBtn) {
 themeBtn.addEventListener("click",()=>{
  document.body.classList.toggle("dark");
  themeBtn.textContent=document.body.classList.contains("dark")?"☀":"☾";
 });
}
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
