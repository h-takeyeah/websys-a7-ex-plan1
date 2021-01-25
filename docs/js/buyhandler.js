const btn = document.getElementById('description').querySelector('a')
btn.setAttribute('href', `${document.location.origin}/buy/item-${btn.dataset.item_number}.html`)