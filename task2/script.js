const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click',()=>{
    alert('Служит для вывода информации в консоле');
})


//


const Alert = document.querySelector('#alert');

Alert.addEventListener('click', () => {
    alert('Служит для отображения информации пользователям. Показывает диалоговое окно (как это) с сообщением и кнопкой OK.');
})

//

const Prompt = document.querySelector('#prompt');

Prompt.addEventListener('click', () => {
    prompt('Служит для ввода пользователем текста в консоль, но текст на странице не изменяется');
})