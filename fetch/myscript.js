let result = '';
var arr =  (selector) => {
    var array = []
    for (let i = 0; i < 3; i++) {
        array[i] = document.querySelector(selector).children[i].textContent
    }
    return array
}
const values = arr('#values')
const URLs = arr('#urls')
var t = 'target'
document
  .querySelector('button')
  .addEventListener('click',
  async ({ target: t }) => { 
    // здесь напишите код, последовательно отправляющий запросы
    // согласно спецификации kodaktor.ru/async_tasks
    var par = ''
    for (let i = 0; i < 3; i++) {
        result = await fetch(URLs[i]  + par + values[i])
        .then(function (response) {
            return response.text();
        })
        .then(function(data) {
            document.querySelector('.target').innerHTML = data
            result = document.querySelector('span').textContent
            return result
        })
        par = result + '/'
    }

    t.textContent = `Результат: ${result}`;
}
); 
