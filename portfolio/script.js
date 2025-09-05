document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = this.name.value.trim();
  const messageEl = document.getElementById('message');
  if (name) {
    messageEl.textContent = `${name}님, 연락주셔서 감사합니다!`;
  } else {
    messageEl.textContent = '이름을 입력해주세요.';
  }
  this.reset();
});
