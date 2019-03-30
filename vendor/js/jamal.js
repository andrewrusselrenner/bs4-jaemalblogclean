// function load_home() {
    // document.getElementById("isi").innerHTML='test test';
// }

$( '#sidebar .navbar-nav a' ).on( 'click', function () {
    $( '#sidebar .navbar-nav' ).find( 'li.active' ).removeClass( 'show in active' );
    $( this ).parent( 'li' ).addClass( 'show in active' );
});

function load_rumah() {
    $("#isi").load("/hal/main.html");
}

function load_tentang() {
    $("#isi").load("/hal/tentang/index.html");
}

function load_bukutamu() {
    $("#isi").load("/hal/guestbook/index.html");
}

function load_portofolio() {
    $("#isi").load("/hal/portofolio/index.html");
}

