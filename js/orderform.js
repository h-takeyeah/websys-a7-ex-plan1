const modal = document.createElement('div')
modal.classList.add('modal')
modal.innerHTML =
'<div class="modal-background"></div>' +
'<div class="modal-card">' +
  '<header class="modal-card-head">' +
  '<p class="modal-card-title">注文情報入力画面</p>' +
  '</header>' +
  '<section class="modal-card-body">' +
    '<div class="container" id="orderform">' +
      '<div class="field">' +
        '<label class="label">ご注文者様氏名</label>' +
        '<div class="control">' +
          '<input class="input" type="text" id="name" name="name" placeholder="書店 一郎" />' +
        '</div>' +
      '</div>' +
      '<div class="field">' +
        '<label class="label">お届け先住所</label>' +
        '<div class="control">' +
          '<input class="input" type="text" id="address" name="address" placeholder="静岡県浜松市中区城北1-1-1" />' +
        '</div>' +
      '</div>' +
      '<div class="field">' +
        '<lavel for="delivery-date" class="label">お届け希望日</lavel>' +
        '<div class="control">' +
          '<input class="input" type="date" name="delivery-date" id="delivery-date" value="2020-01-27" min="2021-01-27" max="2021-02-09" />' +
        '</div>' +
        '<label for="delivery-time" class="label">お届け希望時間</label>' +
        '<div class="control">' +
          '<input class="input" type="time" name="delivery-time" id="delivery-time" value="09:00" min="09:00" max="21:00" step="1800" />' +
        '</div>' +
      '</div>' +
      '<div class="field">' +
        '<label class="label">ご注文者様ご連絡先</label>' +
        '<div class="control">' +
          '<input class="input" type="tel" id="tel" name="tel" placeholder="08012340000" />' +
        '</div>' +
      '</div>' +
    '</div>' +
  '</section>' +
  '<footer class="modal-card-foot">' +
    '<a class="button is-link">入力内容を確認する</a>' +
    '<button class="button cancel">この画面を閉じる</button>' +
  '</footer>' +
'</div>'

const desc = document.getElementById('description')
if (desc) {
  desc.insertAdjacentElement('afterend', modal)

  const buybtn = document.getElementById('buy_button')

  buybtn.addEventListener('click', () => {
    modal.classList.add('is-active')
  })

  const cancelbtn = modal.querySelector('button.cancel')
  cancelbtn.addEventListener('click', () => {
    modal.classList.remove('is-active')
  })

  window.addEventListener('click', (event) => {
    if (event.target.className === 'modal-background') {
      modal.classList.remove('is-active')
    }
  })

  const confirmbtn = modal.querySelector('a.button')
  confirmbtn.setAttribute('href', `../confirm/item-${buybtn.dataset.item_number}.html`)
  confirmbtn.addEventListener('click', () => {
    const inputs = modal.querySelectorAll('input')
    if(inputs) {
      let orderInfo = {}
      inputs.forEach(input => {
        orderInfo[input.id] = input.value
      })
      console.log(orderInfo)
    }
  })
}