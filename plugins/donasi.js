let handler = async m => m.reply(`
╭─「 Donasi • Premium」
│ • Gopay/Ovo/Dana : [081779434847]
╰────
╭─「 Donasi • Non Premium」
│ • Saweria : [https://saweria.co/RAFHXYT]
│ • Qris :[https://bit.ly/QrisRafhx]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
