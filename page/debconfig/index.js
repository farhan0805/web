console.log("tes")

let nav = document.querySelector('nav');

// window.addEventListener('scroll', function () {
//     if (window.pageYOffset > 100) {
//         nav.classList.add('shadow');
//         nav.style.backgroundColor = '#0d6efd'
//     } else {
//         nav.classList.remove('shadow');
//         nav.style.backgroundColor = null
//     }
// });

function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
  }