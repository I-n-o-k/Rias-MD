const mongoose = require("mongoose");
require("../../config.js");
require("../../Core.js");
const { mku } = require("../../Database/dataschema.js");

module.exports = { 

    name: "owner", 
    desc: "To view the list of current Mods", 
    alias: ["modlist","mods","mod"],
    category: "Core", 
    usage: "owner", 
    react: "🏅", 
    start: async (
      Miku, 
      m, 
      { text, prefix, mentionByTag, pushName, isCreator,owner,includes,modStatus} 
    ) => { 

        try { 
        
            var modlist = await mku.find({addedMods: "true"});
            var modlistString = "";
            var ownerList = global.owner;
            modlist.forEach(mod => {
              modlistString += `\n@${mod.id.split("@")[0]}\n`
            });
            var mention = await modlist.map(mod => mod.id);
            let xy = modlist.map(mod => mod.id);
            let yz = ownerList.map(owner => owner+"@s.whatsapp.net");
            let xyz = xy.concat(yz);

            ment = [ownerList.map(owner => owner+"@s.whatsapp.net"), mention];
            let textM = `            Dinda Gendut\n\n`;

            }
            
            return Miku.sendMessage( 
              m.from, 
              { text: textM, mentions: xyz }, 
              { quoted: m } 
            );

          } catch (err) { 
            console.log(err);
            return Miku.sendMessage(m.from, { text: `📌ᴀɴ ɪɴᴛᴇʀɴᴀʟ ᴇʀʀᴏʀ ᴏᴄᴄᴜʀʀᴇᴅ ᴡʜɪʟᴇ ғᴇᴛᴄʜɪɴɢ ᴛʜᴇ ᴍᴏᴅ ʟɪꜱᴛ.` }, { quoted: m });
          } 
        }, 
    }
