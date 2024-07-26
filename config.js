const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ Huzʌɪғʌ кɪɴɢ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923172290399";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923172290399";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/8cea815ca3a8a183e3365.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_00_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDM5LFxuICAgICAgICAxNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTgwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjM5LFxuICAgICAgICA1MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzgsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjM0LFxuICAgICAgICA0NSxcbiAgICAgICAgMyxcbiAgICAgICAgOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAwLFxuICAgICAgICA3NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODMsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNixcbiAgICAgICAgMTcwLFxuICAgICAgICAxODgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTY1LFxuICAgICAgICA3NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzcsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjksXG4gICAgICAgIDQsXG4gICAgICAgIDU0LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjMyLFxuICAgICAgICA4NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDg0LFxuICAgICAgICA1NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDUzLFxuICAgICAgICAwLFxuICAgICAgICAyMjksXG4gICAgICAgIDE4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjA4LFxuICAgICAgICA2MixcbiAgICAgICAgNDYsXG4gICAgICAgIDQ5LFxuICAgICAgICA1OCxcbiAgICAgICAgMzksXG4gICAgICAgIDkwLFxuICAgICAgICA3LFxuICAgICAgICA5MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzksXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODEsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExLFxuICBcImFkdlNlY3JldEtleVwiOiBcIldwZ0JVMlpSRjhWZ3IrMmVXU3gzR0t3RGlON2JtanBUNVJWcmxHYlNrekE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkUwMHFQOHRxUkpDXy1wOVpfbHl6blFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmVlY2NmNzItMmVjZi00Y2QyLTlkYTYtODAwOThmZTA4Njk3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MSxcbiAgICAgIDIxMSxcbiAgICAgIDIzMSxcbiAgICAgIDIxNCxcbiAgICAgIDQ4LFxuICAgICAgMjQ1LFxuICAgICAgMjQsXG4gICAgICAxMzAsXG4gICAgICAyMzMsXG4gICAgICAxMDQsXG4gICAgICAxNTUsXG4gICAgICAxMjEsXG4gICAgICA3OCxcbiAgICAgIDE4OSxcbiAgICAgIDgwLFxuICAgICAgMTg1LFxuICAgICAgMjMsXG4gICAgICA1OSxcbiAgICAgIDExOCxcbiAgICAgIDc1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyOSxcbiAgICAgIDIzOSxcbiAgICAgIDEyNCxcbiAgICAgIDY4LFxuICAgICAgMTA1LFxuICAgICAgMTA1LFxuICAgICAgNTUsXG4gICAgICAxMzIsXG4gICAgICA0MyxcbiAgICAgIDEyNCxcbiAgICAgIDY2LFxuICAgICAgMTc0LFxuICAgICAgMTQ3LFxuICAgICAgMTk5LFxuICAgICAgMTE1LFxuICAgICAgMTc5LFxuICAgICAgNjUsXG4gICAgICAxOTQsXG4gICAgICAxODgsXG4gICAgICAyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBWTMxUDg3VFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTcyMjkwMzk5OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8JOGqfCTj7LgvbLgvoDFgsWC8J2QruGNndafzaHNoc2cyKXJkc2i8J2WjsaSyZHNovCThqpcXG5cXG5cXG5cXG5cXG5cXG5cXG7ik7VcXG5cXG5cXG5cXG5cXG5cXG7ik7VcXG5cXG5cXG5cXG5cXG5cXG7ik7VcXG5cXG5cXG5cXG5cXG5cXG7ik7VcXG5cXG5cXG5cXG5cXG5cXG7ik7VcXG5cXG5cXG5cXG5cXG7ik7VcXG5cXG5cXG5cXG7wk4ap4p+10LrNofCdlo7Js++9h+KftvCThqpcIixcbiAgICBcImxpZFwiOiBcIjE5Mjc5MzAxMjExMzY1NzoxMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQZTR0L1VERU96YWpMVUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm1QUTZpNkJOM1NvYytNT1graTBhYW5vZmFKMXdYdGd3OHg2OHNqczZsMTA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVFdXejNxNW5sTVR4cjZpU24yY1ZLYUhjTXkvN2hSRVdldWRVSWw0MTE3V25tbWozQXlvUktKcFhxTWppd1llYkZ2SnJKUXE2K09KRzNSbmMxa0p1Q0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZ0NnNEkybEJlb0xSQUJNR2hmd2tDbGVKWnNPeFFBSnFEYTZ2SXlEalQ0K2hESjBmdVEyY1U2YzRBZ1E5bTlmWHRsanNjYmtQdDdlbVRpTHE4aXFKQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTcyMjkwMzk5OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE5NzAwMzEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKU0dcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpTRy5qc29uIjogIntcImtleURhdGFcIjpcIlpoUlA3Qk1sZnBUMVpxMXZuY3NQZ0w5Y1dWT0ZBMll6dDhlakdBTTdOMlU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA1MTU4MTU1OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxMjc3MDU0NjU5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "*",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ Huzʌɪғʌ кɪɴɢ 』```", //*『sᴜʙsᴄʀɪʙᴇ • 』*\n youtube.com/@MRX-3"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𓄂𓆰卄𝙪z𝙖͢͠ɪғʌꦿ
⟵кɪɴɢ⓵⟶𓆪",
  ownername:process.env.OWNER_NAME|| "𓆩𓏲ིྀłł𝐮፝֟͜͡͡ȥɑ͢𝖎ƒɑ͢𓆪 𓆩⟵к͡𝖎ɳｇ⟶𓆪",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "Huzaifa"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
