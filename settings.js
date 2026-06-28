const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {

    MONGO_URI: process.env.MONGO_URI || 'mongodb+srv://nima:nima@nimabot.gkpbhvh.mongodb.net/',
    MONGO_DB: process.env.MONGO_DB || 'xjjjuujxyxyxwhdj',
    
    PREFIX: process.env.PREFIX || '.',
    BUTTON: process.env.BUTTON || 'true',
    MAX_RETRIES: process.env.MAX_RETRIES || '5',
    ADMIN_LIST_PATH: process.env.ADMIN_LIST_PATH || '94760743488',

    OWNER_REACT:process.env.OWNER_REACT || 'true',
    AUTO_REPLY:process.env.AUTO_REPLY || 'true',
    AUTO_AI: process.env.AUTO_AI || 'true',
    AUTO_VIEW_STATUS: process.env.AUTO_VIEW_STATUS || 'true',
    AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || 'true',
    AUTO_RECORDING: process.env.AUTO_RECORDING || 'true',
    WORK_TYPE: process.env.WORK_TYPE || 'public',
    LANG: process.env.LANG || 'EN',

    NEWSLETTER_MESSAGE_ID: process.env.NEWSLETTER_MESSAGE_ID || '428',
    NEWSLETTER_JID: process.env.NEWSLETTER_JID || '120363403408693274@newsletter',
    
    AUTO_LIKE_EMOJI: process.env.AUTO_LIKE_EMOJI ? JSON.parse(process.env.AUTO_LIKE_EMOJI) : ['❤️','🩷','🧡','💛','💚','💙','🩵','💜','🖤','🩶','🤍','💗'],

    IMAGE_PATH: process.env.IMAGE_PATH || 'https://files.catbox.moe/ekfozx.png',
    CHANNEL_LINK: process.env.CHANNEL_LINK || 'https://whatsapp.com/channel/0029VbC6It7K0IBkQwaKYd2J',
    GROUP_INVITE_LINK: process.env.GROUP_INVITE_LINK || '',

    OTP_EXPIRY: process.env.OTP_EXPIRY || '300000',

    BOT_NAME: process.env.BOT_NAME || '*SHINIGAMI MD*',
    OWNER_NAME: process.env.OWNER_NAME || 'INCONNU BOY SENSEI',
    OWNER_NUMBER: process.env.OWNER_NUMBER || '94760743488',
    OWNER_NUMBERS: process.env.OWNER_NUMBERS || '94760743488',
    SUDO_NUMBERS: process.env.SUDO_NUMBERS || '94760743488',
    BOT_VERSION: process.env.BOT_VERSION || '1.0.0',
    BOT_FOOTER: process.env.FOOTER || '*BEST WHATSAPP BOT*',
};





    
