const pages = [
  {
    emoji: "💌",
    question: "Can I tell you something?",
    subtext: "Just one little question... 😊",
    no: "Aww, please say yes! 🥺"
  },
  {
    emoji: "😁",
    question: "Do you like your senior?",
    subtext: "Be honest... 👀",
    no: "Hmm... think again 😄"
  },
  {
    emoji: "🍛",
    question: "Do you like kacchi?",
    subtext: "Important question! 😋",
    no: "Kacchi still deserves a chance! 😂"
  },
  {
    emoji: "👀",
    question: "Are you single?",
    subtext: "Okay... this one is important. 😳",
    no: "Ohh... plot twist! 😅"
  },
  {
    emoji: "💕",
    question: "Would you like to go on a date with me?",
    subtext: "Maybe we could have kacchi together? 🍛❤️",
    no: "No pressure. Your answer is respected. ❤️"
  }
];

let current = 0;

const emoji = document.getElementById("emoji");
const pageCount = document.getElementById("pageCount");
const question = document.getElementById("question");
const subtext = document.getElementById("subtext");
const buttons = document.getElementById("buttons");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const card = document.querySelector(".card");

function renderPage() {
  const page = pages[current];

  card.classList.remove("final");
  void card.offsetWidth;
  card.classList.add("final");

  emoji.textContent = page.emoji;
  pageCount.textContent = `${current + 1} / ${pages.length}`;
  question.textContent = page.question;
  subtext.textContent = page.subtext;
  message.textContent = "";

  if (current === pages.length - 1) {
    yesBtn.textContent = "Yes ❤️";
    noBtn.textContent = "No 😅";
  } else {
    yesBtn.textContent = "Yes ❤️";
    noBtn.textContent = "No 🙈";
  }
}

function nextPage() {
  if (current < pages.length - 1) {
    current++;
    renderPage();
    burstHearts(5);
  } else {
    showFinal();
  }
}

function showFinal() {
  emoji.textContent = "🥰";
  pageCount.textContent = "❤️";
  question.textContent = "Yay! ❤️";
  subtext.textContent = "It's a date then! 🍛☕✨";
  buttons.classList.add("hidden");
  message.textContent = "Thank you for saying yes! 💕";
  burstHearts(22);
}

yesBtn.addEventListener("click", nextPage);

noBtn.addEventListener("click", () => {
  if (current === pages.length - 1) {
    message.textContent = "That's totally okay. ❤️";
    return;
  }

  message.textContent = pages[current].no;
  noBtn.animate(
    [
      { transform: "translateX(0)" },
      { transform: "translateX(-7px)" },
      { transform: "translateX(7px)" },
      { transform: "translateX(0)" }
    ],
    { duration: 280 }
  );
});

function burstHearts(count) {
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.textContent = Math.random() > .35 ? "❤️" : "💕";
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.fontSize = `${14 + Math.random() * 18}px`;
      heart.style.animationDuration = `${3 + Math.random() * 3}s`;
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 6500);
    }, i * 80);
  }
}

setInterval(() => {
  if (Math.random() > .45) burstHearts(1);
}, 1200);

renderPage();
