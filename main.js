const resumeTab = document.querySelector(".resume-tabs");
const resumePortfolioTabBtns = document.querySelectorAll(".tab-btn");
const resumeTabContents = document.querySelectorAll(".resume-tab-content");

var resumeTabNav = function (resumeTabClick) {
    resumeTabContents.forEach((resumeTabContents) => {
        resumeTabContents.style.display = "none";
        resumeTabContents.classList.remove("active");
    });

    resumePortfolioTabBtns.forEach((resumePortfolioTabBtns) => {
        resumePortfolioTabBtns.classList.remove("active");
    });

    resumeTabContents[resumeTabClick].style.display = "flex";

    setTimeout(() => {
        resumeTabContents[resumeTabClick].classList.add("active");
    }, 100);


    resumePortfolioTabBtns[resumeTabClick].classList.add("active");
}

resumePortfolioTabBtns.forEach((resumePortfolioTabBtns, i) => {
    resumePortfolioTabBtns.addEventListener("click", () => {
        resumeTabNav(i);
    });

});


/*============================================================
    service modal
==============================================================*/

const serviceCardWithModals = document.querySelectorAll(".service-container .card-with-modal");

serviceCardWithModals.forEach((serviceCardWithModal) => {
    const serviceCard = serviceCardWithModal.querySelector(".service-card");
    const serviceBackDrop = serviceCardWithModal.querySelector(".service-modal-backdrop");
    const serviceModal = serviceCardWithModal.querySelector(".service-modal");
    const modalCloseBtn = serviceCardWithModal.querySelector(" .modal-close-btn");

    serviceCard.addEventListener("click", () => {
        serviceBackDrop.style.display = "flex";

        setTimeout(() => {
            serviceBackDrop.classList.add("active");
        }, 100);

        setTimeout(() => {
            serviceModal.classList.add("active");
        }, 300);
    });
    modalCloseBtn.addEventListener("click", () => {
        setTimeout(() => {
            serviceBackDrop.style.display = "none";
        }, 500);

        setTimeout(() => {
            serviceBackDrop.classList.remove("active");
            serviceModal.classList.remove("active");
        }, 100);
    });

});

document.addEventListener("DOMContentLoaded", () => {
    const portfolioTabs = document.querySelector(".portfolio-tabs");
    const portfolioTabBtns = portfolioTabs.querySelectorAll(".tab-btn");
    const cardsWithModals = document.querySelectorAll(".card-with-modal");

    // 🔥 FORZAR ESTADO INICIAL
    cardsWithModals.forEach(card => {
        card.classList.remove("hidden");
    });

    portfolioTabBtns.forEach((tabBtn) => {
        tabBtn.addEventListener("click", () => {
            const filter = tabBtn.getAttribute("data-filter");

            cardsWithModals.forEach(card => {
                if (filter === "all" || card.classList.contains(filter)) {
                    card.classList.remove("hidden");
                } else {
                    card.classList.add("hidden");
                }
            });

            portfolioTabBtns.forEach(btn => btn.classList.remove("active"));
            tabBtn.classList.add("active");
        });
    });
});

const portfolioCardsWithModals = document.querySelectorAll(".portfolio-container .card-with-modal");

portfolioCardsWithModals.forEach((portfolioCardWithModal) => {
    const portfolioCard = portfolioCardWithModal.querySelector(".portfolio-card");
    const portfolioBackdrop = portfolioCardWithModal.querySelector(".portfolio-modal-backdrop");
    const modalCloseBtn = portfolioCardWithModal.querySelector(".modal-close-btn");
    const portfolioModal = portfolioCardWithModal.querySelector(".portfolio-modal");

    portfolioCard.addEventListener("click", () => {
        portfolioBackdrop.style.display = "flex";

        setTimeout(() => {
            portfolioBackdrop.classList.add("active");
        }, 300);

        setTimeout(() => {
            portfolioModal.classList.add("active");
        }, 300);
    });

    modalCloseBtn.addEventListener("click", () => {
        setTimeout(() => {
            portfolioBackdrop.style.display = "none";
        }, 500);

        setTimeout(() => {
            portfolioBackdrop.classList.remove("active");
            portfolioModal.classList.remove("active");
        }, 100);
    });
});

var swiper = new swiper(".sue-client-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("sue-contact-form");
    const btn = document.getElementById("sendBtn");
    const alertBox = document.querySelector(".contact-form-alert");

    btn.addEventListener("click", () => {

        alertBox.textContent = "Enviando...";

        if (!window.emailjs) {
            alertBox.textContent = "❌ EmailJS no cargado";
            return;
        }

        emailjs.init("uOQXCsc5vU1D76SSb");

        emailjs.sendForm(
            "service_tta113j",
            "template_yrkxe9r",
            form
        )
            .then(() => {
                alertBox.textContent = "✅ Mensaje enviado correctamente";
                form.reset();
            })
            .catch((error) => {
                console.error("EmailJS error:", error);
                alertBox.textContent = "❌ Error al enviar el mensaje";
            });
    });

});


window.addEventListener("load", () => {
    document.querySelectorAll("img").forEach(img => {
        const src = img.src;
        img.src = "";
        img.src = src;
    });
});

const cursor = document.querySelector(".cursor");
const cursorDot = cursor.querySelector(".cursor-dot");
const cursorCircle = cursor.querySelector(".cursor-circle");

document.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    cursorDot.style.top = y + "px";
    cursorDot.style.left = x + "px";
    cursorCircle.style.top = y + "px";
    cursorCircle.style.left = x + "px";
});






