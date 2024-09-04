const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Zambia";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/9c50831e79612be10fb6d.jpg" || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "MCM²²¹-X-Whatsapp bot Beta!" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "260771798128";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/9c50831e79612be10fb6d.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_22_09_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjUyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDc1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTU3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDYsXG4gICAgICAgIDYzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDQ4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5LFxuICAgICAgICA0MixcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjUzLFxuICAgICAgICA5NixcbiAgICAgICAgNjUsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDY0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDU4LFxuICAgICAgICAzMCxcbiAgICAgICAgMzksXG4gICAgICAgIDcsXG4gICAgICAgIDcxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjI1LFxuICAgICAgICA4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDksXG4gICAgICAgIDMxLFxuICAgICAgICA4NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTU1LFxuICAgICAgICA4NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDk5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTc0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDExNSxcbiAgICAgICAgNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAzOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDkwLFxuICAgICAgICA5OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODIsXG4gICAgICAgIDk4LFxuICAgICAgICAyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDcwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDExLFxuICAgICAgICAxOTAsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDYyLFxuICAgICAgICA3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAxLFxuICAgICAgICA2MixcbiAgICAgICAgMTM4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTIyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjksXG4gICAgICAgIDYxLFxuICAgICAgICAxODIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAzNixcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjMxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIktXZ1g1WmdRL25ZK0pJc2N1dVZTaGtXQWVlVHg0MTEyWThYUWZFQmhpV2M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYwNzcxNzk4MTI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1NTY3QjE2RTc4RDQ4REVFMEJCMjg2RTBDRUQ1MjU2RlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjU0ODQ5NzFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMzl6X2dMbExScHlFZzQ4STRaUnE5d1wiLFxuICBcInBob25lSWRcIjogXCI2YjNkZjgzYS0xZjQ1LTQxMGItOTVkNi0wNzZlNzcxMTI4NjVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTYsXG4gICAgICAxNzYsXG4gICAgICA0NixcbiAgICAgIDIyMyxcbiAgICAgIDIzNCxcbiAgICAgIDE0NCxcbiAgICAgIDkyLFxuICAgICAgMjgsXG4gICAgICAxMTYsXG4gICAgICAyNTQsXG4gICAgICA3MixcbiAgICAgIDQxLFxuICAgICAgMTE4LFxuICAgICAgMjIzLFxuICAgICAgMjcsXG4gICAgICAxMCxcbiAgICAgIDIxNyxcbiAgICAgIDEzMixcbiAgICAgIDczLFxuICAgICAgMTQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MSxcbiAgICAgIDEwNixcbiAgICAgIDI1MixcbiAgICAgIDc1LFxuICAgICAgODAsXG4gICAgICAxNTMsXG4gICAgICAxNTAsXG4gICAgICA3NCxcbiAgICAgIDExMixcbiAgICAgIDQxLFxuICAgICAgMTI2LFxuICAgICAgNDksXG4gICAgICAyMzUsXG4gICAgICAyNTQsXG4gICAgICAxMzMsXG4gICAgICAxNDAsXG4gICAgICAxNTIsXG4gICAgICAxMjIsXG4gICAgICAxMjksXG4gICAgICAxMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSDZIVDlRMTlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MDc3MTc5ODEyODo2MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA2MDQ3MTYzNzQ0MzczOjYwQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIk3Dh03wn6amXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1Q5OVRBUXBKL2p0Z1lZQlNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJQZmRlT3cySEJYb3BkRVJ1V0paazJVZHpzMCtiV0sySTJiendFc0lkaEFrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImpNcUVNVUVMSUtyTXkrQjNUNXBKRnd3WnlSaXpDRG9DNXpleXhCeUpBVzdVT01DMWEraHMrWEJGODN5MnkwazhZVDRraHh6YXQ1OGl2M1A1TE8rakJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInY5MDdPcFF1dEVkcUgwc3VHbGIrMVNpUnhVS0RrNVFBcnBGNzQxY3RpdzNRTm5EK1pXaWdpc0o0SDlPTUI5YWVLZVR5ZGtVc3M5c0xsMTlNOHdzakRBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MDc3MTc5ODEyODo2MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI1NDg0OTY3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS2hnXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLaGcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJJK0VPcGVHSVVGSjViT04zWmE2VTFYM3U0b21idzNKb2dSMzJscFFqSlAwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwMjU5NjI2MCxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiw0XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Cyrus❇️🧘🏽‍♂️",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "MCM-X-Md",
  ownername:process.env.OWNER_NAME|| "Cyrus-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
