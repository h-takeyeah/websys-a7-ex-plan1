const ranking = document.getElementById('ranking')
if (ranking) {
  const boxes = ranking.querySelectorAll('.box')
  boxes.forEach(box => {
    const btn = box.querySelector('.modal-button')
    const modal = box.querySelector('.modal')
    const cancelbtn = box.querySelector('.cancel')
    const detailbtn = box.querySelector('a')
    btn.addEventListener('click', () => {
      modal.classList.add('is-active')
    })
    cancelbtn.addEventListener('click', () => {
      modal.classList.remove('is-active')
    })
    detailbtn.setAttribute('href', `${document.location.origin}/items/item-${detailbtn.dataset.item_number}.html`)
  })

  window.addEventListener('click', (event) => {
    if (event.target.className === 'modal-background') {
      const modals = ranking.querySelectorAll('.modal')
      modals.forEach(modal => {
        modal.classList.remove('is-active')
      })
    }
  })
}

// const orderform = document.getElementById('orderform')
// if(orderform) {
//   orderform
// }