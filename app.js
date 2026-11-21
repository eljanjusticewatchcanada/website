(function () {
  var b = document.querySelector('.burger'), n = document.querySelector('.nav');
  if (b && n) {
    b.addEventListener('click', function () {
      var o = n.classList.toggle('open'); b.setAttribute('aria-expanded', o ? 'true' : 'false');
    });
  }
  var els = document.querySelectorAll('.rv');
  if (!('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('in'); }); return; }
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  els.forEach(function (e) { io.observe(e); });
})();
