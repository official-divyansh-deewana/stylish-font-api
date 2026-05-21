// सामान्य लेटर्स (A-Z, a-z, 0-9)
const normal = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789");

// Version 1: Bold Style
const v1_bold = Array.from("𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗");

// Version 2: Italic Style
const v2_italic = Array.from("𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𘘡𝘓𝘔𝘕𝘖𝘗𘘢𝘙𝘚𝘛𝘜𘘣𝘞𘘤𝘠𘘡𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻0123456789");

// Version 3: Monospace Style
const v3_monospace = Array.from("𝙰𝙱𝙲𝙳Ｅ𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𚀀𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿");

// Version 4: Script / Handwriting (New)
const v4_script = Array.from("𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃0123456789");

// Version 5: Double Struck / Blackboard Outline (New)
const v5_doubleStruck = Array.from("𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡");

// Version 6: Fraktur / Gothic Style (New)
const v6_fraktur = Array.from("𝔄𝔅𝔖𝔇𝔈𝔉𝔊𝔋𝔌𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔𝔕𝔖𝔗𝔘𝔙𝔚𝔛𝔜𝔝𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷0123456789");


function convertText(text, styleMap) {
    return Array.from(text).map(char => {
        const index = normal.indexOf(char);
        return index !== -1 ? styleMap[index] : char;
    }).join('');
}

module.exports = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Content-Type', 'application/json');

    let { text, style, case: casePref } = req.query;

    if (!text) {
        return res.status(400).json({ 
            TG: "tera_paglu",
            error: "Please provide 'text' parameter in the URL.",
            owner: "Divyansh_deewana"
        });
    }

    style = style ? style.toLowerCase() : 'v1';

    if (casePref === 'upper') {
        text = text.toUpperCase();
    } else if (casePref === 'lower') {
        text = text.toLowerCase();
    }

    // यहाँ नए स्टाइल्स (v4, v5, v6) की कंडीशंस जोड़ी गई हैं
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
        selectedMap = v1_bold; // default v1
    }

    const converted = convertText(text, selectedMap);

    // रिस्पॉन्स ऑब्जेक्ट - क्रम अनुसार (TG पहले, owner आख़िर में)
    res.status(200).json({
        TG: "tera_paglu",
        original_text: req.query.text,
        style_chosen: style,
        case_preference: casePref || "none",
        converted_text: converted,
        owner: "Divyansh_deewana"
    });
};
