# 🌟 Premium Stylish Font Converter API 🌟

A high-performance, serverless API deployed on Vercel that converts normal text into beautiful, stylish Unicode fonts. It allows users to dynamically change styles and case preferences via URL parameters.

---

## 🚀 Features
- **Multiple Font Versions:** Supports up to 6 distinct font styles (Bold, Italic, Monospace, Script, Double Struck, Fraktur).
- **Case Formatting:** Instantly switch text to UPPERCASE or lowercase.
- **Fast & Serverless:** Hosted on Vercel for rapid response times.
- **JSON Response:** Returns clean, structured JSON data.

---

## 🛠️ API Usage & Endpoints

### **Base URL**
`https://yourproject.vercel.app/api/convert`

### **Query Parameters**
| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `text` | String | **Yes** | The plain text you want to convert. |
| `style` | String | No | Font version: `v1`, `v2`, `v3`, `v4`, `v5`, `v6` (Default is `v1`). |
| `case` | String | No | Case change preference: `upper` or `lower`. |

---

## 📂 Font Style Versions Guide

| Style Code | Font Type | Sample Output |
| :--- | :--- | :--- |
| **v1** (Default) | Bold | **𝐀𝐁𝐂𝐃𝐄𝐅** |
| **v2** | Italic | *𝘈𝘉𝘊𝘋𝘌𝘍* |
| **v3** | Monospace | `𝙰𝙱Ｃ𝙳𝙴𝙵` |
| **v4** | Script / Handwriting | 𝓐𝓑𝓒𝓓𝓔𝓕 |
| **v5** | Double Struck / Outline | 𝔸𝔹ℂ𝔻𝔼𝔽 |
| **v6** | Fraktur / Gothic | 𝔄𝔅𝔖𝔇𝔈𝔉 |

---

## 📝 Example Requests & Responses

### **Request 1: Bold Italic Style (V4)**
`GET /api/convert?text=Hello+Guys&style=v4`

**Response:**
```json
{
  "TG": "tera_paglu",
  "original_text": "Hello Guys",
  "style_chosen": "v4",
  "case_preference": "none",
  "converted_text": "𝓗𝓮𝓵𝓵𝓸 𝓖𝓾𝔂𝓼",
  "owner": "Divyansh_deewana"
}
