// 1. सामान्य लेटर्स और नंबर (Normal Reference Map)
const normal = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

// 2. Version 1 (Aesthetic Premium)
const v1_aesthetic = [
    "Λ", " 𝐁", "𞤌", "𖼄", "Ξ", "Բ", "Ꮐ", "┣𝐥", "𝐈", "𐴁", "꧊‹", "𝐋", "𝐌", "𖼆", "Ꭷ", "℘", "𝚀", "ཞ", "𝐒", "𝐓", "𖼓", "ꪜ", "𝐖", "ꭗ", "ⲩ", "𝐙",
    "α", "ꪉ", "ɕ", "∂", "ɛ", "ϝ", "ԍ", "꧊ꪱ̴", "ī֟፝", "𖼳", "ӄ", "ɭ", "Ⲙ", "ꪒ", "σ", "թ", "ꪇ", "꧊ꝛ", "ꜱ", "ꝉ", "𝛖", "ѵ̐", "ꮗ", "ꮗ", "ɣ", "ɀ",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

// 3. Version 2 (Modern Premium)
const v2_new = [
    "𝚲", "𝚩", "Ꮯ", "ᗪ", "𝚬", "ᥬ ̴", "ට", "𝚮", "𝚰", "𑐊", "꧊𒌋", "꧊", "𝚳", "𝚴", "𝚶", "𝚸", "𝗤", "Ꭱ", "ටි", "།͠", "𑢹", "ꪜ", "ꪝ", "𝚾", "ꪗ", "𝚭",
    "𝛂", "ʙ", "ɕ", "𝛛", "𝛆", "ꜰ", "ԍ", "ⱶ꧊", "īī", "נ", "ӄ", "ꪶ", "ϻ", "ռ", "ꪫ", "թ", "ꪇ", "ꭆ", "𝛅", "Ɨ", "𝛖", "ꪚ", "𝛚", "ꪎ", "𑣏", "ɀ",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

// 4. Version 3 (Gothic Greek Premium)
const v3_new = [
    "𝚨", "𝚩", "𞤌", "Ꭰ", "𝝨", "𝟊", "𐌾", "┣𝐥", "𝚰", "𐴁", "𝚱", "ㄥ", "Ɱ", "𝐍", "𖩐", "𝐎", "Ʀ", "𝐒", "𝚻", "𑢹", "ꪜ", "ꪝ", "𝛘", "ꪗ", "⼄", "𝚭",
    "ᥲ", "Ƅ", "𝛓", "∂", "ε", "ꜰ", "𐓝", "꧊ꪱ̴", "ι", "ʝ", "ҡ", "ℓ", "ⲙ", "ꪒ", "σ", "ρ", "𝗾", "ŗ", "᥉", "ꠣ", "υ", "𝛎", "ꮗ", "ꭖ", "γ", "ʐ",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

// 5. Version 4 (Caption Premium - Fixed Emojis - package.json की त्रुटि यहाँ सुधारी गई है)
const v4_caption = [
    "𝐀", "𝐁", "𝐂", "𝐃", "𝐄", "𝐅", "𝐆", "𝐇", "𝐈", "𝐉", "𝐊", "𝐋", "𝐌", "𝐍", "𝐎", "𝐏", "𝐐", "𝐑", "𝐒", "𝐓", "𝐔", "𝐕", "𝐖", "𝐗", "𝐘", "𝐙",
    "ᴀ", "ʙ", "ᴄ", "ᴅ", "ᴇ", "ғ", "ɢ", "ʜ", "ɪ", "contents", "ᴋ", "ʟ", "ᴍ", "ɴ", "ᴏ", "ᴘ", "ǫ", "ʀ", "s", "ᴛ", "ᴜ", "ᴠ", "ᴡ", "x", "ʏ", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

// 6. Version 5 (Flower Caption Premium - package.json की त्रुटि यहाँ सुधारी गई है)
const v5_flower_caption = [
    "𝐀", "𝐁", "𝐂", "𝐃", "𝐄", "𝐅", "𝐆", "𝐇", "𝐈", "𝐉", "𝐊", "𝐋", "𝐌", "𝐍", "𝐎", "𝐏", "𝐐", "𝐑", "𝐒", "𝐓", "𝐔", "𝐕", "𝐖", "𝐗", "𝐘", "𝐙",
    "α", "ʙ", "ϲ", "ᴅ", "є", "ƒ", "ց", "հ", "ι", "j", "κ", "ℓ", "м", "и", "ο", "ρ", "գ", "я", "ѕ", "т", "υ", "ν", "ω", "ϰ", "γ", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

// 7. Version 6 (Flag-Bold Mix Style - सभी त्रुटियाँ सुधारी गई हैं)
const v6_blue_flags = [
    "🇦", "🇧", "🇨", "🇩", "🇪", "🇫", "🇬", "🇭", "🇮", "🇯", "🇰", "🇱", "🇲", "🇳", "🇴", "🇵", "🇶", "🇷", "🇸", "🇹", "🇺", "🇻", "🇼", "🇽", "🇾", "🇿"
];
const v6_serif_bold = [
    "𝐀", "𝐁", "𝐂", "𝐃", "𝐄", "𝐅", "𝐆", "𝐇", "𝐈", "𝐉", "𝐊", "𝐋", "𝐌", "𝐍", "𝐎", "𝐏", "𝐐", "𝐑", "𝐒", "𝐓", "𝐔", "𝐕", "𝐖", "𝐗", "𝐘", "𝐙"
];
const v6_greek_small = [
    "α", "β", "ϲ", "ᴅ", "ε", "ϝ", "ԍ", "н", "ι", "ϳ", "ӄ", "ℓ", "м", "η", "σ", "р", "ꮽ", "я", "ѕ", "т", "υ", "ν", "ω", "ϰ", "ϒ", "ʑ"
];

// एस्थेटिक इमोजीस की लिस्ट (V5 और V6 के रैंडम इमोजीस के लिए)
const aestheticEmojis = [
    "🩷", "💍", "🌷", "✨", "🧸", "🎀", "🧁", "🤍", "🪐", "🍒", "🍓", "☁️", "🌻", "💫", "🍀", "🦋", "💌", "🌟", "🎈", "🧸"
];

// रैंडम इमोजी प्राप्त करने का फंक्शन
function getRandomEmojis(count = 2) {
    let shuffled = [...aestheticEmojis].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count).join('');
}

// सामान्य कनवर्टर फंक्शन (V1, V2, V3, V4, V5 के लिए)
function convertText(text, styleMap) {
    return Array.from(text).map(char => {
        const index = normal.indexOf(char);
        return index !== -1 ? styleMap[index] : char;
    }).join('');
}

// V6 के लिए स्पेशल वर्ड-बाय-वर्ड कनवर्टर लॉजिक
function convertV6(text) {
    let result = "";
    let isFirstWord = true;
    let isFirstLetterOfWord = true;

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        let upperChar = char.toUpperCase();
        let index = normal.indexOf(upperChar); // केवल A-Z का इंडेक्स (0 से 25)

        if (index !== -1 && index < 26) { 
            if (isFirstLetterOfWord) {
                if (isFirstWord) {
                    result += v6_blue_flags[index]; // पहले शब्द का पहला लेटर ब्लू फ्लैग
                    isFirstWord = false;
                } else {
                    result += v6_serif_bold[index]; // बाद के शब्दों का पहला लेटर बोल्ड सेरिफ़
                }
                isFirstLetterOfWord = false;
            } else {
                result += v6_greek_small[index]; // बाकी के अन्य लेटर्स कर्सिव/ग्रीक
            }
        } else {
            result += char; // स्पेस, विशेष कैरेक्टर आदि को वैसा ही रखें
            if (char === ' ' || char === '\n' || char === '\t') {
                isFirstLetterOfWord = true; // नया शब्द शुरू होने पर फ्लैग रीसेट
            }
        }
    }
    return result;
}

module.exports = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Content-Type', 'application/json; charset=utf-8');

    let { text, style } = req.query;

    if (!text) {
        return res.status(200).json({
            TG: "tera_paglu",
            status: "success",
            api_usage: "Add '?text=your+text&style=v1' to the URL.",
            example_usage: "https://stylish-font-api.vercel.app/api/convert?text=Mera+Dil&style=v6",
            available_versions: [
                { version: "V1", name: "Aesthetic Premium", example: "Ꭷɣɛ ꪉ𝛖ꪇꪇ𝛖" },
                { version: "V2", name: "Modern Premium", example: "𝚲𝛂... (𝚲ʙɕ𝛛)" },
                { version: "V3", name: "Gothic Greek Premium", example: "𝚨ᥲ... (𝚨Ƅ𝛓∂)" },
                { version: "V4", name: "Caption Premium", example: "*˹♡ 𝐘ᴏ𝐮'ʀᴇ ɴᴏᴛ ᴊᴜsᴛ ᴍʏ°🩷💍🌷✨𓂃‹𝟹*" },
                { version: "V5", name: "Flower Caption Premium", example: "*⎯⎯꯭̽🌸𝐘ᴏυ'яє ɴᴏт ᴊυѕт ᴍყ 𝆺𝅥𝆬🩵🥂🫧⟶⋆🧸🎀🧁✨*" },
                { version: "V6", name: "Premium Flag-Bold Mix Style", example: "*⸙⤹ 🇲εяα 𝐃ιℓꜛ⤸🧸🎀*" }
            ],
            owner: "Divyansh_deewana"
        });
    }

    style = style ? style.toLowerCase() : 'v1';

    let converted;

    if (style === 'v6') {
        converted = convertV6(text);
        const randomEmojis = getRandomEmojis(2); // 2 रैंडम इमोजी
        converted = `*⸙⤹ ${converted}ꜛ⤸${randomEmojis}*`;
    } else {
        let selectedMap;
        if (style === 'v2') {
            selectedMap = v2_new;
        } else if (style === 'v3') {
            selectedMap = v3_new;
        } else if (style === 'v4') {
            selectedMap = v4_caption;
        } else if (style === 'v5') {
            selectedMap = v5_flower_caption;
        } else {
            selectedMap = v1_aesthetic; // Default V1
        }

        converted = convertText(text, selectedMap);

        if (style === 'v4') {
            converted = `*˹♡ ${converted}°🩷💍🌷✨𓂃‹𝟹*`;
        }

        if (style === 'v5') {
            const randomEmojis = getRandomEmojis(4); // 4 रैंडम इमोजी
            converted = `*⎯⎯꯭̽🌸${converted} 𝆺𝅥𝆬🩵🥂🫧⟶⋆${randomEmojis}*`;
        }
    }

    // JSON रिस्पॉन्स
    res.status(200).json({
        TG: "tera_paglu",
        status: "success",
        original_text: text,
        style_chosen: style,
        converted_text: converted,
        owner: "Divyansh_deewana"
    });
};
