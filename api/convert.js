// यूनिकोड कैरेक्टर के लिए मैपिंग (A-Z, a-z, 0-9)
const normal = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789");

// Version 1: Bold Style (𝐀𝐁𝐂...)
const v1_bold = Array.from("𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙𝐚𝐛𝐜ｄ𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗");

// Version 2: Italic Style (𝘈𝘉𝘊...)
const v2_italic = Array.from("𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𘘡𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻0123456789");

// Version 3: Monospace Style (𝙰𝙱𝙲...)
const v3_monospace = Array.from("𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𚀀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿");

// टेक्स्ट को बदलने का फंक्शन
function convertText(text, styleMap) {
    return Array.from(text).map(char => {
        const index = normal.indexOf(char);
        // यदि कैरेक्टर हमारी लिस्ट में है, तो उसे बदलें, नहीं तो वैसा ही रहने दें
        return index !== -1 ? styleMap[index] : char;
    }).join('');
}

module.exports = (req, res) => {
    // CORS हेडर सेट करें ताकि इसे किसी भी वेबसाइट से एक्सेस किया जा सके
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Content-Type', 'application/json');

    // URL से पैरामीटर प्राप्त करें
    let { text, style, case: casePref } = req.query;

    // यदि कोई टेक्स्ट नहीं दिया गया है
    if (!text) {
        return res.status(400).json({ error: "Please provide 'text' parameter in the URL." });
    }

    // डिफ़ॉल्ट रूप से स्टाइल v1 रहेगा
    style = style ? style.toLowerCase() : 'v1';

    // केस प्रीफरेंस (Uppercase/Lowercase) हैंडल करना
    if (casePref === 'upper') {
        text = text.toUpperCase();
    } else if (casePref === 'lower') {
        text = text.toLowerCase();
    }

    // चुने गए स्टाइल के अनुसार मैप सेट करना
    let selectedMap;
    if (style === 'v2') {
        selectedMap = v2_italic;
    } else if (style === 'v3') {
        selectedMap = v3_monospace;
    } else {
        selectedMap = v1_bold; // Default v1
    }

    // टेक्स्ट कनवर्ट करें
    const converted = convertText(text, selectedMap);

    // JSON रिस्पॉन्स भेजें
    res.status(200).json({
        original_text: req.query.text,
        style_chosen: style,
        case_preference: casePref || "none",
        converted_text: converted
    });
};
