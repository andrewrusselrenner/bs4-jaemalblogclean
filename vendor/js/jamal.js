function load_home() {
    document.getElementById("isi").innerHTML='<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="/hal/main.html" noscrolling></iframe></div>';
}

$( '#sidebar .navbar-nav a' ).on( 'click', function () {
    $( '#sidebar .navbar-nav' ).find( 'li.active' ).removeClass( 'show in active' );
    $( this ).parent( 'li' ).addClass( 'show in active' );
});