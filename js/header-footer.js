const header =
'<header class="hero is-light">' +
  '<div class="hero-body">' +
    '<div class="container">' +
      '<h1 class="title">' +
        '<a href="../index.html">T書店</a>' +
      '</h1>' +
      '<h2 class="subtitle">' +
        '本・DVD/BDレンタル・ゲームのT書店' +
      '</h2>' +
    '</div>' +
  '</div>' +
'</header>'
document.body.insertAdjacentHTML('afterbegin', header)

const footer =
'<footer class="footer">' +
  '<div class="content has-text-centered">' +
    '<p>' +
      '©2020 T書店 All rights researved. <em>Powered by <a href="https://bulma.io/">Bulma</a></em>' +
    '</p>' +
  '</div>' +
'</footer>'
document.body.insertAdjacentHTML('beforeend', footer)
