import { sticker } from '../lib/sticker.js'
let handler = async(m, { conn }) => {
//if (!db.data.chats[m.chat].stickers && m.isGroup) throw `${ag}𝙇𝙊𝙎 𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎 𝘿𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 𝙀𝙎𝙏𝘼𝙉 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝘿𝙊𝙎 𝙐𝙎𝙀 *#on stickers* 𝙋𝘼𝙍𝘼 𝘼𝘾𝙏𝙄𝙑𝘼𝙍\n\n𝙏𝙃𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎 𝘼𝙍𝙀 𝘿𝙄𝙎𝘼𝘽𝙇𝙀𝘿 𝙐𝙎𝙀 *#on stickers* 𝙏𝙊 𝙀𝙉𝘼𝘽𝙇𝙀`
if (db.data.chats[m.chat].stickers) {

let nombre = '𝐈𝐁𝐕𝐔 - 𝐁𝐎𝐓'
let nombre2 = 'Ibvusito'

let stiker = await sticker(null, s[Math.floor(Math.random() * s.length)], nombre, nombre2)
await delay(3 * 3000)
if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: gt, body: `😻 𝗦𝘂𝗽𝗲𝗿 𝐈𝐁𝐕𝐔 - 𝐁𝐎𝐓 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽`, mediaType: 2, sourceUrl: accountsgb.getRandom(), thumbnail: gataImg.getRandom()}}}, { quoted: m })
}}
handler.customPrefix = /papu/i 
handler.command = new RegExp
handler.exp = 50
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const s = [
'https://c.tenor.com/ROXgoJcKD3YAAAAd/papu-xd.gif',
'https://i.ytimg.com/vi/lxjlZ1NZuxo/mqdefault.jpg',
'https://preview.redd.it/ha8v52geaks81.jpg?auto=webp&s=2944043e7ce648d71ddc8b0a275bc3d0907aa82e',
'data:image/jpeg;base64,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'
];  