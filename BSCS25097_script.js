
alert("Welcome to our Website");

let date = new Date().getDate();
let month = new Date().getMonth() + 1;
let year = new Date().getFullYear();

console.log(date, month, year);

let footer_date = document.getElementById('footerDate');
if (footer_date) {
  footer_date.innerHTML = year;
  console.log(footer_date);
}

const buttons = document.querySelectorAll('.availability-check');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const stock = parseInt(button.getAttribute('data-stock'));
    if (stock > 0) {
      alert('The product is available!');
      button.textContent = 'In Stock';
    } else {
      alert('The product is unavailable.');
      button.textContent = 'Out of Stock';
    }
  });
});

const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const chatLog = document.getElementById('chatlog');

const botReplies = {
  "hi": "Hello! How can I help you?",
  "hello": "Hi there! ",
  "how are you": "I'm doing great, thanks for asking!",
  "bye": "Goodbye! Have a wonderful day! ",
  "default": "Sorry, I didn't understand that. Could you please rephrase?"
};

function getBotReply(userMessage) {
  userMessage = userMessage.toLowerCase();
  return botReplies[userMessage] || botReplies["default"];
}

function updateChatLog(userMessage, botMessage) {
  const userDiv = document.createElement('div');
  userDiv.textContent = "You: " + userMessage;
  chatLog.appendChild(userDiv);

  const botDiv = document.createElement('div');
  botDiv.textContent = "Bot: " + botMessage;
  chatLog.appendChild(botDiv);

  chatLog.scrollTop = chatLog.scrollHeight;
}

if (sendBtn && userInput && chatLog) {
  sendBtn.addEventListener('click', () => {
    const userMessage = userInput.value.trim();
    if (userMessage) {
      const botMessage = getBotReply(userMessage);
      updateChatLog(userMessage, botMessage);
      userInput.value = '';
    }
  });

  userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      sendBtn.click();
    }
  });
}


document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const errorMsg = document.getElementById("errorMsg");
  const successMsg = document.getElementById("successMsg");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault(); 

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      errorMsg.textContent = "";
      successMsg.textContent = "";

      if (!name || !email || !message) {
        errorMsg.textContent = "Incomplete information";
        return;
      }

      if (!emailPattern.test(email)) {
        errorMsg.textContent = "Please enter a valid email address.";
        return;
      }


      form.reset();
      successMsg.textContent = "Form submitted successfully!";
    });
  }
});
