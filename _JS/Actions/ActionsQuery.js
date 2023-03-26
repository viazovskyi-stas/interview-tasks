const button = document.createElement('button')
button.addEventListener('click', _ => console.log(1))
button.setAttribute('onClick', 'console.log(2)') // callback
button.addEventListener('click', _ => console.log(3))
// button.onclick = null
button.onclick = _ => console.log(4) // 2 переписал callback setAttribute
button.addEventListener('click', _ => console.log(5))
button.click()

// 1 4 3 5
// сначала отработают те обработчики которые были установлены до onclick которий был не null

// екш
// погружение захвати всплытие

// Как отличить клик от пользователя или вызван императивно в коде методом
// - в ивенте есть свойство isTrusted
// свойство detail будет отличатся
