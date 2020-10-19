$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

window.onunload = function() { window.scrollTo(0, 0); }

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

//http://stackoverflow.com/questions/18617367/disable-browers-auto-scroll-after-a-page-refresh
//http://stackoverflow.com/questions/7035331/prevent-automatic-browser-scroll-on-refresh