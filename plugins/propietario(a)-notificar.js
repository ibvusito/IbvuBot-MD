const linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i
const grupo = nna
const grupo2 = nn2
let handler = async (m, { conn, text, usedPrefix, command, participants, groupMetadata }) => {
let users = m.sender.split`@`[0]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let [_, code] = grupo.match(linkRegex) || []
let [_2, code2] = grupo2.match(linkRegex) || []
if ( users == 593964233582 || users == 593963028581 || users == 593963111048 || users == 15755876040 ) try {
//if ( users == 593964233582 || users == 593963028581) try {
if (!text) return m.reply(`*Falta Texto*`) 
let res = await conn.groupAcceptInvite(code)
let res2 = await conn.groupAcceptInvite(code2)
await conn.sendMessage(res, { text: text + ( users == 593993684821 ? '\n\n_atte. 𝐈𝐁𝐕𝐔 - 𝐁𝐎𝐓_' : '' || users == 593963028581 ? '\n\n_atte. 𝐈𝐁𝐕𝐔 - 𝐁𝐎𝐓_' : '' || users == 593963111048 ? '\n\n_atte. 𝐈𝐁𝐕𝐔 - 𝐁𝐎𝐓_' : '' || users == 15755876040 ? '\n\n_atte. Ibvusita❤️_' : '' ), mentions: (await conn.groupMetadata(`${res}`)).participants.map(v => v.id) }, { quoted: fkontak })
await delay(3 * 3000)
await conn.sendMessage(res2, { text: text + ( users == 593993684821 ? '\n\n_atte. 𝐈𝐁𝐕𝐔 - 𝐁𝐎𝐓_' : '' || users == 593963028581 ? '\n\n_atte. 𝐈𝐁𝐕𝐔 - 𝐁𝐎𝐓_' : '' || users == 593963111048 ? '\n\n_atte. 𝐈𝐁𝐕𝐔 - 𝐁𝐎𝐓_' : '' || users == 15755876040 ? '\n\n_atte. Ibvusita❤️_' : '' ), mentions: (await conn.groupMetadata(`${res}`)).participants.map(v => v.id) }, { quoted: fkontak })
await m.reply(`✅ *MENSAJE ENVIADO CON ÉXITO* `)

} catch (e) {
await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
} else {
await m.reply('```USTED NO TIENE AUTORIZACIÓN PARA USAR ESTE COMANDO.```')}
}
handler.command = ['mensajeoficial']
handler.owner = true
export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
