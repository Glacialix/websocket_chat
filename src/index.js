import './scss/main.scss'

var socket = new WebSocket('ws://localhost:8080/ws');

ssocket.onopen = function () {
  alert('Соединение установлено.');
};

socket.onclose = function (event) {
  if (event.wasClean) {
    alert('Соединение закрыто чисто');
  } else {
    alert('Обрыв соединения'); // например, "убит" процесс сервера
  }
  alert('Код: ' + event.code + ' причина: ' + event.reason);
};

socket.onmessage = function (event) {
  alert('Получены данные ' + event.data);
};

socket.onerror = function (error) {
  alert('Ошибка ' + error.message);
};

socket.send('Привет');