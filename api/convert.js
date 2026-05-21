// 1. सामान्य लेटर्स और नंबर (Normal Reference Map)
const normal = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

// 2. Version 1 (यह आपका पिछला V7 स्टाइल है)
const v1_aesthetic = [
    "Λ", " 𝐁", "𞤌", "𖼄", "Ξ", "Բ", "Ꮐ", "┣𝐥", "𝐈", "𐴁", "꧊‹", "𝐋", "𝐌", "𖼆", "Ꭷ", "℘", "𝚀", "ཞ", "𝐒", "𝐓", "𖼓", "ꪜ", "𝐖", "ꭗ", "ⲩ", "𝐙",
    "α", "ꪉ", "ɕ", "∂", "ɛ", "ϝ", "ԍ", "꧊ꪱ̴", "ī֟፝", "𖼳", "ӄ", "ɭ", "Ⲙ", "ꪒ", "σ", "թ", "ꪇ", "꧊ꝛ", "ꜱ", "ꝉ", "𝛖", "ѵ̐", "ꮗ", "ꮗ", "ɣ", "ɀ",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

// 3. Version 2 (आपका पहला नया स्टाइल - व्यवस्थित रूप में)
const v2_new = [
    "𝚲", "𝚩", "Ꮯ", "ᗪ", "𝚬", "ᥬ ̴", "ට", "𝚮", "𝚰", "𑐊", "꧊𒌋", "꧊", "𝚳", "𝚴", "𝚶", "𝚸", "𝗤", "Ꭱ", "ටි", "།͠", "𑢹", "ꪜ", "ꪝ", "𝚾", "ꪗ", "𝚭",
    "𝛂", "ʙ", "ɕ", "𝛛", "𝛆", "ꜰ", "ԍ", "ⱶ꧊", "𝛊", "נ", "ӄ", "ꪶ", "ϻ", "ռ", "ꪫ", "թ", "ꪇ", "ꭆ", "𝛅", "Ɨ", "𝛖", "ꪚ", "𝛚", "ꪎ", "ℽ", "ɀ",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

// 4. Version 3 (आपका दूसरा नया स्टाइल - बिना कोट्स वाला, व्यवस्थित रूप में)
const v3_new = [
    "𝚨", "𝚩", "𞤌", "Ꭰ", "𝝨", "𝟊", "𐌾", "┣𝐥", "𝚰", "𐴁", "𝚱", "ㄥ", "Ɱ", "ℕ", "𖩐", "𝚹", "Ʀ", "丂", "𝚻", "𑢹", "ꪜ", "ꪝ", "𝛘", "ꪗ", "⼄", "𝚭",
    "ᥲ", "Ƅ", "𝛓", "∂", "ε", "ꜰ", "𐓝", "꧊ꪱ̴", "ι", "ʝ", "ҡ", "ℓ", "ⲙ", "ꪒ", "σ", "ρ", "𝗾", "ŗ", "᥉", "ꠣ", "υ", "𝛎", "ꮗ", "ꭖ", "γ", "ʐ",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];


// कनवर्ट करने का फंक्शन
function convertText(text, styleMap) {
    return Array.from(text).map(char => {
        const index = normal.indexOf(char);
        return index !== -1 ? styleMap[index] : char;
    }).join('');
}

module.exports = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Content-Type', 'application/json; charset=utf-8');

    let { text, style } = req.query;

    // यदि केवल मुख्य लिंक ओपन किया गया है
    if (!text) {
        return res.status(200).json({
            TG: "tera_paglu",
            status: "success",
            api_usage: "Add '?text=your+text&style=v1' to the URL.",
            example_usage: "https://stylish-font-api.vercel.app/api/convert?text=Oye+buggu&style=v2",
            available_versions: [
                { version: "V1", name: "Aesthetic Premium", example: "Ꭷɣɛ ꪉ𝛖ꪇꪇ𝛖" },
                { version: "V2", name: "Modern Premium", example: "𝚲𝛂... (𝚲ʙɕ𝛛)" },
                { version: "V3", name: "Gothic Greek Premium", example: "𝚨ᥲ... (𝚨Ƅ𝛓∂)" }
            ],
            owner: "Divyansh_deewana"
        });
    }

    style = style ? style.toLowerCase() : 'v1';

    // केवल उपलब्ध 3 स्टाइल्स की कंडीशन
    let selectedMap;
    if (style === 'v2') {
        selectedMap = v2_new;
    } else if (style === 'v3') {
        selectedMap = v3_new;
    } else {
        selectedMap = v1_aesthetic; // डिफ़ॉल्ट रूप से V1 (पुराना V7) रहेगा
    }

    const converted = convertText(text, selectedMap);

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
