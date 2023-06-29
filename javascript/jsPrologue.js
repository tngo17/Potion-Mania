document.addEventListener('DOMContentLoaded', function() {
    let button = document.querySelector('#enter-cottage')
    let content = document.querySelector('#content')
    button.addEventListener('click', function() {
      content.innerHTML = '<h1>Chap 2</h1>'
    })
  })