// <!-- rem 适配-->
(function (win,doc) {
    function change() {
        document.documentElement.style.fontSize=100*document.documentElement.clientWidth/375+'px';
    }
    doc.addEventListener('DOMContentLoaded',change,false);
    win.addEventListener('resize',change,false);
})(window,document);