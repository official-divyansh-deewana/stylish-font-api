// 1. सामान्य लेटर्स और नंबर (Normal Reference Map)
const normal = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

// 2. Version 1: Bold Style
const v1_bold = [
    "𝐀", "𝐁", "𝐂", "𝐃", "𝐄", "𝐅", "𝐆", "𝐇", "𝐈", "𝐉", "𝐊", "𝐋", "𝐌", "𝐍", "𝐎", "𝐏", "𝐐", "𝐑", "𝐒", "𝐓", "𝐔", "𝐕", "𝐖", "𝐗", "𝐘", "𝐙",
    "𝐚", "𝐛", "𝐜", "𝐝", "𝐞", "𝐟", "𝐠", "𝐡", "𝐢", "𝐣", "𝐤", "𝐥", "𝐦", "𝐧", "𝐨", "𝐩", "𝐪", "𝐫", "𝐬", "𝐭", "𝐮", "𝐯", "𝐰", "𝐱", "𝐲", "𝐳",
    "𝟎", "𝟏", "𝟐", "𝟑", "𝟒", "𝟓", "𝟔", "𝟕", "𝟖", "𝟗"
];

// 3. Version 2: Italic Style
const v2_italic = [
    "𝘈", "𝘉", "𝘊", "𝘋", "𝘌", "𝘍", "𝘎", "𝘏", "𝘐", "𝘑", "𘘡", "𘘢", "𝘔", "𘘣", "𝘖", "𘘤", "𘘥", "𘘦", "𘘧", "𘘨", "𘘩", "𘘪", "𝘞", "𘘫", "𘘬", "𘘭",
    "𝘢", "𝘣", "𝘤", "𝘥", "𝘦", "𝘧", "𝘨", "𝘩", "𝘪", "𝘫", "𝘬", "𝘭", "𝘮", "𝘯", "𝘰", "𝘱", "𝘲", "𝘳", "𝘴", "𝘵", "𝘶", "𝘷", "𝘸", "𝘹", "𝘺", "𝘻",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

// 4. Version 3: Monospace Style
const v3_monospace = [
    "𝙰", "𝙱", "𝙲", "𝙳", "𝙴", "𝙵", "𝙶", "𝙷", "𝙸", "𝙹", "𝙺", "𝙻", "𝙼", "𝙽", "𝙾", "𝙿", "𝚀", "𝚁", "𝚂", "𝚃", "𝚄", "𝚅", "𝚆", "𝚇", "𝚈", "𝚉",
    "𝚊", "𝚋", "𝚌", "𝚍", "𝚎", "𝚏", "𝚐", "𝚑", "𝚒", "𝚓", "𝚔", "𝚕", "𝚖", "𝚗", "𝚘", "𝚙", "𝚚", "𝚛", "𝚜", "𝚝", "𝚞", "𝚟", "𝚠", "𝚡", "𝚢", "𝚣",
    "𝟶", "𝟷", "𝟸", "𝟹", "𝟺", "𝟻", "𝟼", "𝟽", "𝟾", "𝟿"
];

// 5. Version 4: Script / Style 1
const v4_script = [
    "Λ", " 𝐁", "𞤌", "𖼄", "Ξ", "Բ", "Ꮐ", "┣𝐥, "𝐈", "𐴁", "꧊‹", "𝐋", "𝐌", "𖼆", "Ꭷ", "℘", "𝚀", "ཞ", "𝐒", "𝐓", "𖼓", "ꪜ", "𝐖", "ꭗ", "ⲩ", "𝐙",
    "α", "ꪉ", "ɕ", "∂", "ɛ", "ϝ", "ԍ", "꧊ꪱ̴", "ī֟፝", "𖼳", "ӄ", "ɭ", "Ⲙ", "ꪒ", "σ", "թ", "ꪇ", "꧊ꝛ", "ꜱ", "ꝉ", "𝛖", "ѵ̐", "ꮗ", "x", "ɣ", "ɀ",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

// 6. Version 5: Double Struck / Blackboard
const v5_doubleStruck = [
    "𝔸", "𝔹", "ℂ", "𝔻", "𝔼", "𝔽", "𝔾", "ℍ", "𝕀", "𝕁", "𝕂", "𝕃", "𝕄", "ℕ", "𝕆", "ℙ", "ℚ", "ℝ", "𝕊", "𝕋", "𝕌", "𝕍", "𝕎", "𝕏", "𝕐", "ℤ",
    "𝕒", "𝓫", "𝕔", "𝕕", "𝕖", "𝕗", "𝕘", "𝕙", "𝕚", "𝕛", "𝕜", "𝕝", "𝕞", "𝕟", "𝕠", "𝕡", "𝕢", "𝕣", "𝕤", "𝕥", "𝕦", "𝕧", "𝕨", "𝕩", "𝕪", "𝕫",
    "𝟘", "𝟙", "𝕚", "𝕛", "𝕜", "𝕝", "𝕞", "𝕟", "𝕠", "𝕡"
];

// 7. Version 6: Fraktur / Gothic
const v6_fraktur = [
    "𝔄", "𝔅", "𝔖", "𝔇", "𝔈", "𝔉", "𝔊", "𝔋", "𝔌", "𝔍", "𝔎", "𝔏", "𝔐", "𝔑", "𝔒", "𝔓", "𝔔", "𝔕", "𝔖", "𝔗", "𝔘", "𝔙", "𝔚", "𝔛", "𝔜", "𝔝",
    "𝔞", "𝔟", "𝔠", "𝔡", "𝔢", "𝔣", "𝔤", "𝔥", "𝔦", "𝔧", "𝔨", "𝔩", "𝔪", "𝔫", "𝔬", "𝔭", "𝔮", "𝔯", "𝔰", "𝔱", "𝔲", "𝔳", "𝔴", "𝔵", "𝔶", "𝔷",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];


// टेक्स्ट को कनवर्ट करने का मुख्य फंक्शन
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

    // यदि यूजर ने मुख्य वेबसाइट को सीधा खोला है (बिना 'text' पैरामीटर के)
    if (!text) {
        return res.status(200).json({
            TG: "tera_paglu",
            status: "success",
            api_usage: "Add '?text=your+text&style=v1' to the URL.",
            example_usage: "https://stylish-font-api.vercel.app/api/convert?text=Oye+buggu&style=v2",
            available_versions: [
                { version: "V1", name: "Bold", example: "𝐎𝐲𝐞 𝐛𝐮𝐠𝐠𝐮" },
                { version: "V2", name: "Italic", example: "𝘖𝘺𝘦 𝘣𝘶𝘨𝘨𝘶" },
                { version: "V3", name: "Monospace", example: "𝙾𝚢𝚎 𝚋𝚞𝚐𝚐𝚞" },
                { version: "V4", name: "Style 1", example: "Ꭷɣɛ  𝐁𝛖ԍԍ𝛖" },
                { version: "V5", name: "Double Struck", example: "𝕆𝕪𝕖 𝕓𝕦𝕘𝕘𝕦" },
                { version: "V6", name: "Fraktur", example: "𝔒𝔶𝔢 𝔟𝔲𝔤𝔤𝔲" }
            ],
            owner: "Divyansh_deewana"
        });
    }

    // डिफ़ॉल्ट रूप से स्टाइल v1 सेट करें
    style = style ? style.toLowerCase() : 'v1';

    // चुने गए स्टाइल के अनुसार मैप असाइन करें
    let selectedMap;
    if (style === 'v2') {
        selectedMap = v2_italic;
    } else if (style === 'v3') {
        selectedMap = v3_monospace;
    } else if (style === 'v4') {
        selectedMap = v4_script;
    } else if (style === 'v5') {
        selectedMap = v5_doubleStruck;
    } else if (style === 'v6') {
        selectedMap = v6_fraktur;
    } else {
        selectedMap = v1_bold; // Default style is V1
    }

    const converted = convertText(text, selectedMap);

    // सफल कनवर्ट होने पर JSON रिस्पॉन्स (TG पहले, status, फिर कनवर्टेड डेटा, और अंत में owner)
    res.status(200).json({
        TG: "tera_paglu",
        status: "success",
        original_text: text,
        style_chosen: style,
        converted_text: converted,
        owner: "Divyansh_deewana"
    });
};
