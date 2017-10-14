
const emptyProjBtn = document.querySelectorAll(".emptyProj");

noLinkButton();

function noLinkButton () {
    for (let i = 0; i < emptyProjBtn.length; i++) {
        emptyProjBtn[i].addEventListener("mouseover", function () {
            emptyProjBtn[i].textContent = "SORRY!";
        });
        emptyProjBtn[i].addEventListener("mouseout", function () {
            emptyProjBtn[i].textContent = "NULL";
        });
    }
}