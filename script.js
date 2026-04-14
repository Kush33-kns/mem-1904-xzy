// 1. Password Check
function checkPassword() {
    const input = document.getElementById('passwordInput').value;
    const loginBox = document.getElementById('login-box');
    const errorMsg = document.getElementById('error-msg');

    if (input.toLowerCase() === "chiku") {
        document.getElementById('password-screen').classList.add('hidden');
        runIntro();
    } else {
        loginBox.classList.add('shake');
        errorMsg.classList.remove('hidden');
        setTimeout(() => loginBox.classList.remove('shake'), 400);
    }
}

// 2. Cinematic Intro Sequence
const introLines = [
    "For Someone Special 💜",
    "A Story About Us",
    "Happy Birthday Princy"
];

function runIntro() {
    const introScreen = document.getElementById('intro-screen');
    const introText = document.getElementById('intro-line');
    introScreen.classList.remove('hidden');

    let i = 0;
    const interval = setInterval(() => {
        if (i < introLines.length) {
            introText.innerText = introLines[i];
            i++;
        } else {
            clearInterval(interval);
            introScreen.classList.add('hidden');
            document.getElementById('main-content').classList.remove('hidden');
            startChat(); // Start story after intro
        }
    }, 3000); // Changes text every 3 seconds
}

// 3. Music Controller
const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');

function toggleMusic() {
    if (music.paused) {
        music.play();
        musicBtn.innerHTML = "⏸ Pause Music";
    } else {
        music.pause();
        musicBtn.innerHTML = "🎵 Play Music";
    }
}

// 4. Chat Story Logic
const story = [
    "Hey Medam Ji 👀",
    "7th standard ma apde ek bija ne olkhata pan natha 😅",
    "Pan 10th ma… everything changed ❤️",
    "Ane tya thi tu mari BEST FRIEND bani 💜",
    "Apde ghana fight kariye chhiye 😤",
    "Koi vakhat unnecessary pan 😂",
    "Pan end ma apde solve kari laiye chhiye… always ❤️",
    "Tu thodi egoist che 😎",
    "Pan heart thi khub j cute che 💖",
    "Chiku 🍫 yaad che?",
    "Pehli vaar Dairy Milk api hati… ane tuye lidhi j nathi 😂",
    "Still that moment is special for me 💫",
    "Tari eyes 👀… dangerous che 💘",
    "Ane dimples 😊… hayeee 😍",
    "Ek vaat kehvu chu honestly…",
    "Tari ketli bad habits mane nathi gamti 😶",
    "Pan hu tane change karva nathi kehto…",
    "Bas better version banvu chu tane ❤️",
    "Because tu important che mara mate 💜",
    "Ane hu hamesha tari side ma chu 🤞",
    "Happy Birthday Princy 🎉",
    "My one and only best friend ❤️"
];

function startChat() {
    const chatBox = document.getElementById('chat-box');
    let j = 0;

    const chatInterval = setInterval(() => {
        if (j < story.length) {
            const msgDiv = document.createElement('div');
            msgDiv.className = 'msg';
            msgDiv.innerText = story[j];
            chatBox.appendChild(msgDiv);
            chatBox.scrollTop = chatBox.scrollHeight;
            j++;
        } else {
            clearInterval(chatInterval);
        }
    }, 2500); // Speed of chat messages
}

// 5. Countdown Timer (April 19, 2026)
const countDate = new Date("April 19, 2026 00:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const gap = countDate - now;

    const d = Math.floor(gap / (1000 * 60 * 60 * 24));
    const h = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((gap % (1000 * 60)) / 1000);

    document.getElementById('timer').innerText = `${d}d ${h}h ${m}m ${s}s`;
}, 1000);

// 6. Surprise Message
function showSurprise() {
    const msg = document.getElementById('final-msg');
    msg.classList.remove('hidden');
    msg.scrollIntoView({ behavior: 'smooth' });
}