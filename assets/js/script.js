const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');

container.addEventListener('click', function(e) {

    //cek apakah yang di klik adalah box
    if( e.target.className == 'box' ) {
        jumbo.src = e.target.src;
    }
})