// Ini untuk ngubah show in active ketika user pincit tombol nav sidebar yg di kliknya
$( '#sidebar .navbar-nav a' ).on( 'click', function () {
    $( '#sidebar .navbar-nav' ).find( 'li.active' ).removeClass( 'show in active' );
    $( this ).parent( 'li' ).addClass( 'show in active' );
});

// load html postingan
function load_rumah() {
    $("#isi").load("hal/main.html");
}

// load html tentang
function load_tentang() {
    $("#isi").load("hal/tentang/index.html");
}

// load html buku tamu
function load_bukutamu() {
    $("#isi").load("hal/guestbook/index.html");
}

// load html portofolio
function load_portofolio() {
    $("#isi").load("hal/portofolio/index.html");
}