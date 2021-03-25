// Denna fil skall innehålla JavaScript (JS)
function meny() {
    document.querySelector('.links').classList.toggle('navActive')
    document.querySelector('.burger').classList.toggle('toggle')
}

document.querySelector('.burger').addEventListener('click', meny)