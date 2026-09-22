

const UPI_ID = "aulatc@ybl";
const TELEGRAM_LINK = "https://t.me/tournament_withdraw";

// DEPOSIT
function showQR() {
  const qr = document.getElementById("qrCode");

  qr.innerHTML =
    '<img src="https://quickchart.io/qr?size=280&text=' +
    encodeURIComponent("upi://pay?pa=aulatc@ybl&pn=DKS%20Tournament&am=30&cu=INR") +
    '" style="width:280px;height:280px;">';
}

function openDepositQR() {
  document.getElementById("qrPopup").style.display = "flex";
  showQR();
}

function closeDepositQR() {
  document.getElementById("qrPopup").style.display = "none";
}

// REGISTER
function registerDemo() {
  const mobile = document.getElementById("mobile").value.trim();
  const password = document.getElementById("password").value;
  const msg = document.getElementById("auth-msg");

  if (!/^\d{10}$/.test(mobile)) {
    msg.innerText = "❌ सही 10 अंकों का मोबाइल नंबर डालो";
    return;
  }

  if (password.length < 6) {
    msg.innerText = "❌ पासवर्ड कम से कम 6 अक्षर का होना चाहिए";
    return;
  }

  localStorage.setItem("demoMobile", mobile);
  localStorage.setItem("demoPassword", password);

  msg.innerText = "✅ Register सफल हुआ! अब Login करो";
}

// LOGIN
function loginDemo() {
  const mobile = document.getElementById("mobile").value.trim();
  const password = document.getElementById("password").value;
  const msg = document.getElementById("auth-msg");

  const savedMobile = localStorage.getItem("demoMobile");
  const savedPassword = localStorage.getItem("demoPassword");

  if (mobile === savedMobile && password === savedPassword) {
    document.body.classList.add("logged-in");
    document.getElementById("login").style.display = "none";

    alert("🎉 Welcome to DKS Tournament!");
  } else {
    msg.innerText = "❌ मोबाइल नंबर या पासवर्ड गलत";
  }
}
function openTelegram() {
  window.open(TELEGRAM_LINK, "_blank");
}
