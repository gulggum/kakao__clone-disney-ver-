const clock = document.querySelector(
  "#status__bar .status__bar-column:first-child>span"
);

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}`;
}

getClock();
setInterval(getClock, 1000);

// todo 시계

const todoClock = document.querySelector("#todo__clock");

function todoGetClock() {
  const todoDate = new Date();
  const todoHours = String(todoDate.getHours()).padStart(2, "0");
  const todoMinutes = String(todoDate.getMinutes()).padStart(2, "0");
  const todoSeconds = String(todoDate.getSeconds()).padStart(2, "0");
  todoClock.innerText = `${todoHours}:${todoMinutes}:${todoSeconds}`;
}
todoGetClock();
setInterval(todoGetClock, 1000);

// todoLoginForm

const todoLoginForm = document.querySelector("#todo__login-form");
const todoLoginInput = todoLoginForm.querySelector(".todo__login-input");
const todoGreeting = document.querySelector(".todo__greeting");

function onLoginSubmit(event) {
  event.preventDefault();
  const username = todoLoginInput.value;
  todoLoginForm.classList.add("hidden");
  localStorage.setItem("이름", username);
  todoGreeting.classList.remove("hidden");
  todoGreeting.innerText = `반갑습니다 ${username}님^^`;
}

todoLoginForm.addEventListener("submit", onLoginSubmit);

const todoSavedUserName = localStorage.getItem("이름");

if (todoSavedUserName === null) {
  todoLoginForm.classList.remove("hidden");
  todoLoginForm.addEventListener("submit", onLoginSubmit);
} else {
  todoGreeting.classList.remove("hidden");
  todoGreeting.innerText = `반갑습니다 ${todoSavedUserName}님^^`;
}
