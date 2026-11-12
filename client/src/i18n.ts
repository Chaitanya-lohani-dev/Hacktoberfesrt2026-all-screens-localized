export type AppLanguage = "en" | "as" | "hi" | "bn";

type Phrase = [string, string, string, string];

const phrases: Phrase[] = [
  ["Workspace", "কৰ্মক্ষেত্ৰ", "कार्य क्षेत्र", "কর্মক্ষেত্র"],
  ["System", "চিস্টেম", "सिस्टम", "সিস্টেম"],
  ["Audit & evidence", "অডিট আৰু প্ৰমাণ", "ऑडिट और प्रमाण", "অডিট ও প্রমাণ"],
  ["Processing jobs", "প্ৰচেছিং কাম", "प्रोसेसिंग कार्य", "প্রসেসিং কাজ"],
  ["Government of India", "ভাৰত চৰকাৰ", "भारत सरकार", "ভারত সরকার"],
  ["Ministry of Agriculture & Farmers Welfare · National Informatics Centre", "কৃষি আৰু কৃষক কল্যাণ মন্ত্ৰালয় · ৰাষ্ট্ৰীয় তথ্য বিজ্ঞান কেন্দ্ৰ", "कृषि एवं किसान कल्याण मंत्रालय · राष्ट्रीय सूचना विज्ञान केंद्र", "কৃষি ও কৃষক কল্যাণ মন্ত্রক · জাতীয় তথ্যবিজ্ঞান কেন্দ্র"],
  ["FLOOD ASSESSMENT & CLAIM COMMAND", "বানপানী মূল্যায়ন আৰু দাবী কমাণ্ড", "बाढ़ आकलन और दावा कमांड", "বন্যা মূল্যায়ন ও দাবি কমান্ড"],
  ["GIS SESSION ACTIVE", "GIS অধিবেশন সক্ৰিয়", "GIS सत्र सक्रिय", "GIS সেশন সক্রিয়"],
  ["Pre-Flood NDVI", "বানপানীৰ আগৰ NDVI", "बाढ़-पूर्व NDVI", "বন্যার আগের NDVI"],
  ["Post-Flood SAR", "বানপানীৰ পিছৰ SAR", "बाढ़-पश्चात SAR", "বন্যার পরের SAR"],
  ["Inundated Area", "ডুব যোৱা এলেকা", "जलमग्न क्षेत्र", "জলমগ্ন এলাকা"],
  ["Impacted Khasra Plots", "প্ৰভাৱিত খচৰা ভূমি", "प्रभावित खसरा भूखंड", "প্রভাবিত খসড়া জমি"],
  ["Aadhaar-Seeded Claims", "আধাৰ সংযুক্ত দাবী", "आधार-सीडेड दावे", "আধার-সংযুক্ত দাবি"],
  ["72h Rainfall", "৭২ ঘণ্টাৰ বৰষুণ", "७২ घंटे वर्षा", "৭২ ঘণ্টার বৃষ্টিপাত"],
  ["72h PMFBY SLA", "৭২ ঘণ্টাৰ PMFBY SLA", "७२ घंटे PMFBY SLA", "৭২ ঘণ্টার PMFBY SLA"],
  ["GIS Cadastral Workspace", "GIS ভূমি পঞ্জী কৰ্মক্ষেত্ৰ", "GIS भू-अभिलेख कार्यक्षेत्र", "GIS ভূমি রেজিস্ট্রি কর্মক্ষেত্র"],
  ["Flood Overlay + Parcel Intersection", "বানপানী স্তৰ + ভূমি ছেদ", "बाढ़ परत + भूखंड प्रतिच्छेदन", "বন্যা স্তর + জমি ছেদ"],
  ["Active product", "সক্ৰিয় উৎপাদন", "सक्रिय उत्पाद", "সক্রিয় পণ্য"],
  ["Spatial reference", "স্থানিক প্ৰসংগ", "स्थानिक संदर्भ", "স্থানিক রেফারেন্স"],
  ["Map centre", "মানচিত্ৰ কেন্দ্ৰ", "मानचित्र केंद्र", "মানচিত্র কেন্দ্র"],
  ["Consent channel simulator", "সন্মতি মাধ্যম চিমুলেটৰ", "सहमति माध्यम सिमुलेटर", "সম্মতি মাধ্যম সিমুলেটর"],
  ["Farmer claim consent", "কৃষকৰ দাবী সন্মতি", "किसान दावा सहमति", "কৃষকের দাবি সম্মতি"],
  ["Reset", "পুনৰায় সেট", "रीसेट", "রিসেট"],
  ["Farmer record", "কৃষকৰ তথ্য", "किसान रिकॉर्ड", "কৃষকের তথ্য"],
  ["Registered mobile", "পঞ্জীয়নভুক্ত মোবাইল", "पंजीकृत मोबाइल", "নিবন্ধিত মোবাইল"],
  ["Indicative payout", "আনুমানিক পৰিশোধ", "अनुमानित भुगतान", "আনুমানিক পরিশোধ"],
  ["Statutory SLA", "আইনী SLA", "वैधानिक SLA", "আইনি SLA"],
  ["SAR acquisition", "SAR সংগ্ৰহ", "SAR अधिग्रहण", "SAR অধিগ্রহণ"],
  ["Live Turf loss", "লাইভ Turf ক্ষতি", "लाइव Turf क्षति", "লাইভ Turf ক্ষতি"],
  ["2-Way SMS", "দুটা দিশৰ SMS", "दो-तरफ़ा SMS", "দুই-মুখী SMS"],
  ["IVR / USSD", "IVR / USSD", "IVR / USSD", "IVR / USSD"],
  ["Voice language", "কণ্ঠ ভাষা", "आवाज़ की भाषा", "ভয়েস ভাষা"],
  ["Claim pipeline", "দাবী প্ৰক্ৰিয়া", "दावा पाइपलाइन", "দাবি প্রক্রিয়া"],
  ["Spectral Verification · Copernicus / ISRO-style analytical view", "স্পেক্ট্ৰেল পৰীক্ষা · Copernicus / ISRO বিশ্লেষণাত্মক দৃশ্য", "स्पेक्ट्रल सत्यापन · Copernicus / ISRO विश्लेषणात्मक दृश्य", "স্পেকট্রাল যাচাই · Copernicus / ISRO বিশ্লেষণাত্মক দৃশ্য"],
  ["Pre-Flood Baseline vs. Post-Flood Inundation", "বানপানীৰ আগৰ ভিত্তি বনাম পিছৰ জলমগ্নতা", "बाढ़-पूर्व आधार बनाम बाढ़-पश्चात जलमग्नता", "বন্যার আগের ভিত্তি বনাম পরের জলমগ্নতা"],
  ["Location", "স্থান", "स्थान", "স্থান"],
  ["Centroid", "কেন্দ্ৰবিন্দু", "केंद्रबिंदु", "কেন্দ্রবিন্দু"],
  ["Cadastral Area", "ভূমি পঞ্জী এলেকা", "भू-अभिलेख क्षेत्र", "ভূমি রেজিস্ট্রি এলাকা"],
  ["Pre-Flood Baseline", "বানপানীৰ আগৰ ভিত্তি", "बाढ़-पूर्व आधार", "বন্যার আগের ভিত্তি"],
  ["Post-Flood Inundation", "বানপানীৰ পিছৰ জলমগ্নতা", "बाढ़-पश्चात जलमग्नता", "বন্যার পরের জলমগ্নতা"],
  ["Automated loss summary", "স্বয়ংক্ৰিয় ক্ষতি সাৰাংশ", "स्वचालित क्षति सारांश", "স্বয়ংক্রিয় ক্ষতির সারাংশ"],
  ["Submerged Area", "জলমগ্ন এলেকা", "जलमग्न क्षेत्र", "জলমগ্ন এলাকা"],
  ["Weather signal", "বতৰৰ সংকেত", "मौसम संकेत", "আবহাওয়া সংকেত"],
  ["Seven-day precipitation signal", "সাত দিনীয়া বৰষুণৰ সংকেত", "सात दिन की वर्षा संकेत", "সাত দিনের বৃষ্টির সংকেত"],
  ["Live meteorological context", "লাইভ বতৰ পৰিপ্ৰেক্ষিত", "लाइव मौसम संदर्भ", "লাইভ আবহাওয়া প্রেক্ষিত"],
  ["Peak event", "সৰ্বোচ্চ ঘটনা", "चरम घटना", "সর্বোচ্চ ঘটনা"],
  ["Latest 72h", "শেহতীয়া ৭২ ঘণ্টা", "पिछले ७२ घंटे", "সাম্প্রতিক ৭২ ঘণ্টা"],
  ["Source mode", "উৎস ধৰণ", "स्रोत मोड", "উৎস মোড"],
  ["Auto-Triggered Claim Assessments", "স্বয়ংক্ৰিয় দাবী মূল্যায়ন", "स्वचालित दावा आकलन", "স্বয়ংক্রিয় দাবি মূল্যায়ন"],
  ["ULPIN / Khasra", "ULPIN / খচৰা", "ULPIN / खसरा", "ULPIN / খসড়া"],
  ["Farmer record", "কৃষকৰ তথ্য", "किसान रिकॉर्ड", "কৃষকের তথ্য"],
  ["Total area", "মুঠ এলেকা", "कुल क्षेत्र", "মোট এলাকা"],
  ["Inundated area", "জলমগ্ন এলেকা", "जलमग्न क्षेत्र", "জলমগ্ন এলাকা"],
  ["Damage", "ক্ষতি", "क्षति", "ক্ষতি"],
  ["Estimated payout", "আনুমানিক পৰিশোধ", "अनुमानित भुगतान", "আনুমানিক পরিশোধ"],
  ["72h intimation", "৭২ ঘণ্টাৰ জাননী", "७२ घंटे सूचना", "৭২ ঘণ্টার নোটিশ"],
  ["Actions", "কাৰ্য", "कार्यवाही", "কাজ"],
  ["View claim JSON payload", "দাবীৰ JSON তথ্য চাওক", "दावे का JSON डेटा देखें", "দাবির JSON তথ্য দেখুন"],
  ["Selected Khasra Plot", "নিৰ্বাচিত খচৰা ভূমি", "चयनित खसरा भूखंड", "নির্বাচিত খসড়া জমি"],
  ["Intersection Assessment", "ছেদ মূল্যায়ন", "प्रतिच्छेदन आकलन", "ছেদ মূল্যায়ন"],
  ["Public-source evidence", "সাৰ্বজনীন উৎসৰ প্ৰমাণ", "सार्वजनिक स्रोत प्रमाण", "সর্বজনীন উৎসের প্রমাণ"],
  ["Structured JSON Payload", "গাঁথনিযুক্ত JSON তথ্য", "संरचित JSON डेटा", "কাঠামোবদ্ধ JSON তথ্য"],
  ["Close settlement record", "পৰিশোধ নথি বন্ধ কৰক", "भुगतान रिकॉर्ड बंद करें", "পরিশোধ রেকর্ড বন্ধ করুন"],
  ["DIRECT BENEFIT TRANSFER SUCCESSFUL", "প্ৰত্যক্ষ লাভ হস্তান্তৰ সফল", "प्रत्यक्ष लाभ अंतरण सफल", "সরাসরি সুবিধা হস্তান্তর সফল"],
  ["No claim assessments match the active filters.", "সক্ৰিয় ফিল্টাৰৰ সৈতে কোনো দাবী মূল্যায়ন মিলা নাই।", "सक्रिय फ़िल्टर से कोई दावा आकलन मेल नहीं खाता।", "সক্রিয় ফিল্টারের সাথে কোনো দাবি মূল্যায়ন মেলেনি।"],
  ["Assam", "অসম", "असम", "আসাম"],
  ["Bihar", "বিহাৰ", "बिहार", "বিহার"],
  ["Dhubri", "ধুবুৰী", "धुबरी", "ধুবড়ি"],
  ["Darbhanga", "দৰভংগা", "दरभंगा", "দরভাঙ্গা"],
  ["ha", "হেক্টৰ", "हेक्टेयर", "হেক্টর"],
  ["plots", "ভূমি", "भूखंड", "জমি"],
  ["eligible", "যোগ্য", "योग्य", "যোগ্য"],
  ["mm", "মি.মি.", "मि.मी.", "মিমি"],
  ["SEALED", "ছীল কৰা", "सील", "সিল করা"],
  ["URGENT", "জৰুৰী", "अति आवश्यक", "জরুরি"],
  ["Threshold met", "সীমা পূৰণ হৈছে", "सीमा पूरी", "সীমা পূরণ হয়েছে"],
  ["Below threshold", "সীমাৰ তলত", "सीमा से कम", "সীমার নিচে"],
  ["All claim statuses", "সকলো দাবীৰ স্থিতি", "सभी दावा स्थितियां", "সব দাবির অবস্থা"],
  ["Intimation generated", "জাননী সৃষ্টি হৈছে", "सूचना बनाई गई", "নোটিশ তৈরি হয়েছে"],
  ["Pending consent", "সন্মতি অপেক্ষাৰত", "सहमति लंबित", "সম্মতি অপেক্ষমাণ"],
  ["Declined", "নাকচ কৰা", "अस्वीकृत", "প্রত্যাখ্যাত"],
  ["JSON", "JSON", "JSON", "JSON"],
  ["PDF", "PDF", "PDF", "PDF"],
  ["PFMS", "PFMS", "PFMS", "PFMS"],
  ["PDF dossier downloaded", "PDF নথি ডাউনলোড হৈছে", "PDF दस्तावेज़ डाउनलोड हुआ", "PDF নথি ডাউনলোড হয়েছে"],
  ["PDF dossier unavailable", "PDF নথি উপলব্ধ নহয়", "PDF दस्तावेज़ उपलब्ध नहीं", "PDF নথি পাওয়া যায়নি"],
  ["View request", "অনুৰোধ চাওক", "अनुरोध देखें", "অনুরোধ দেখুন"],
  ["Archive response", "আৰ্কাইভ উত্তৰ", "आर्काइव उत्तर", "আর্কাইভ উত্তর"],
  ["Forecast fallback", "পূৰ্বানুমান বিকল্প", "पूर्वानुमान विकल्प", "পূর্বাভাস বিকল্প"],
  ["Layer", "স্তৰ", "परत", "স্তর"],
  ["Post-Flood SAR Mask", "বানপানীৰ পিছৰ SAR মুখা", "बाढ़-पश्चात SAR परत", "বন্যার পরের SAR স্তর"],
  ["Pre-Flood NDVI Baseline", "বানপানীৰ আগৰ NDVI ভিত্তি", "बाढ़-पूर्व NDVI आधार", "বন্যার আগের NDVI ভিত্তি"],
  ["SAR flood inundation", "SAR বানপানী জলমগ্নতা", "SAR बाढ़ जलमग्नता", "SAR বন্যা জলমগ্নতা"],
  ["baseline vegetation footprint", "ভিত্তি উদ্ভিদ এলেকা", "आधार वनस्पति क्षेत्र", "ভিত্তি উদ্ভিদ এলাকা"],
  ["Khasra boundary", "খচৰা সীমা", "खसरा सीमा", "খসড়া সীমানা"],
  ["Selected parcel", "নিৰ্বাচিত ভূমি", "चयनित भूखंड", "নির্বাচিত জমি"],
  ["Khasra #", "খচৰা #", "खसरा #", "খসড়া #"],
  ["Loss", "ক্ষতি", "क्षति", "ক্ষতি"],
  ["Command data unavailable", "কমাণ্ড তথ্য উপলব্ধ নহয়", "कमांड डेटा उपलब्ध नहीं", "কমান্ড তথ্য পাওয়া যায়নি"],
  ["The selected flood assessment fixture could not be loaded.", "নিৰ্বাচিত বানপানী মূল্যায়ন তথ্য লোড কৰিব পৰা নগ'ল।", "चयनित बाढ़ आकलन डेटा लोड नहीं हो सका।", "নির্বাচিত বন্যা মূল্যায়ন তথ্য লোড করা যায়নি।"],
  ["Retry dashboard", "ডেশ্বব'ৰ্ড পুনৰ চেষ্টা কৰক", "डैशबोर्ड पुनः प्रयास करें", "ড্যাশবোর্ড আবার চেষ্টা করুন"],
  ["Loading KISAN KAVACH", "KISAN KAVACH লোড হৈ আছে", "KISAN KAVACH लोड हो रहा है", "KISAN KAVACH লোড হচ্ছে"],
  ["Loading flood geometry, cadastral parcels, and the PMFBY claim workflow.", "বানপানীৰ জ্যামিতি, ভূমি পঞ্জীৰ ভূমি আৰু PMFBY দাবী প্ৰক্ৰিয়া লোড হৈ আছে।", "बाढ़ ज्यामिति, भूखंड और PMFBY दावा प्रक्रिया लोड हो रही है।", "বন্যা জ্যামিতি, জমি এবং PMFBY দাবি প্রক্রিয়া লোড হচ্ছে।"],
  ["No active flood records", "সক্ৰিয় বানপানী তথ্য নাই", "कोई सक्रिय बाढ़ रिकॉर्ड नहीं", "কোনো সক্রিয় বন্যা রেকর্ড নেই"],
  ["The selected jurisdiction does not contain active parcel records.", "নিৰ্বাচিত অধিক্ষেত্ৰত সক্ৰিয় ভূমি পঞ্জী তথ্য নাই।", "चयनित क्षेत्र में सक्रिय भूखंड रिकॉर्ड नहीं हैं।", "নির্বাচিত অধিক্ষেত্রে সক্রিয় জমির রেকর্ড নেই।"],
  ["Reload data", "তথ্য পুনৰ লোড কৰক", "डेटा पुनः लोड करें", "ডেটা আবার লোড করুন"],
  ["STATUTORY EXTREME FLOOD TRIGGER: CONFIRMED", "আইনী চৰম বানপানী সংকেত: নিশ্চিত", "वैधानिक चरम बाढ़ संकेत: पुष्ट", "আইনি চরম বন্যা সংকেত: নিশ্চিত"],
  ["PRECIPITATION MONITORING ACTIVE", "বৰষুণ নিৰীক্ষণ সক্ৰিয়", "वर्षा निगरानी सक्रिय", "বৃষ্টিপাত পর্যবেক্ষণ সক্রিয়"],
  ["Weather ingestion is temporarily unavailable.", "বতৰৰ তথ্য সাময়িকভাৱে উপলব্ধ নহয়।", "मौसम डेटा अस्थायी रूप से उपलब्ध नहीं है।", "আবহাওয়ার তথ্য সাময়িকভাবে পাওয়া যাচ্ছে না।"],
  ["View request", "অনুৰোধ চাওক", "अनुरोध देखें", "অনুরোধ দেখুন"],
  ["JIO", "JIO", "JIO", "JIO"],
  ["PMFBY SMS simulator", "PMFBY SMS চিমুলেটৰ", "PMFBY SMS सिमुलेटर", "PMFBY SMS সিমুলেটর"],
  ["PMFBY IVR / *99# simulator", "PMFBY IVR / *99# চিমুলেটৰ", "PMFBY IVR / *99# सिमुलेटर", "PMFBY IVR / *99# সিমুলেটর"],
  ["Telemetry escalation applied", "টেলিমেট্ৰি বৃদ্ধি প্ৰয়োগ কৰা হৈছে", "टेलीमेट्री एस्केलेशन लागू", "টেলিমেট্রি বৃদ্ধি প্রয়োগ হয়েছে"],
  ["Consent verified", "সন্মতি পৰীক্ষা কৰা হৈছে", "सहमति सत्यापित", "সম্মতি যাচাই হয়েছে"],
  ["Claim status updated to SEALED FOR PMFBY.", "দাবীৰ স্থিতি PMFBY-ৰ বাবে ছীল কৰা হৈছে।", "दावे की स्थिति PMFBY के लिए सील की गई।", "দাবির অবস্থা PMFBY-এর জন্য সিল করা হয়েছে।"],
  ["Type 1 to seal...", "ছীল কৰিবলৈ ১ লিখক...", "सील करने के लिए 1 लिखें...", "সিল করতে ১ লিখুন..."],
  ["Press 1 to confirm...", "নিশ্চিত কৰিবলৈ ১ টিপক...", "पुष्टि के लिए 1 दबाएं...", "নিশ্চিত করতে ১ চাপুন..."],
  ["Reply with the exact character 1 to confirm SMS consent.", "SMS সন্মতি নিশ্চিত কৰিবলৈ ঠিক ১ লিখি উত্তৰ দিয়ক।", "SMS सहमति की पुष्टि के लिए ठीक 1 लिखकर उत्तर दें।", "SMS সম্মতি নিশ্চিত করতে ঠিক ১ লিখে উত্তর দিন।"],
  ["Press the exact keypad digit 1 to confirm IVR / USSD consent.", "IVR / USSD সন্মতি নিশ্চিত কৰিবলৈ কীপেডত ঠিক ১ টিপক।", "IVR / USSD सहमति की पुष्टि के लिए कीपैड पर ठीक 1 दबाएं।", "IVR / USSD সম্মতি নিশ্চিত করতে কিপ্যাডে ঠিক ১ চাপুন।"],
  ["High return land > −12 dB → water < −18 dB", "উচ্চ ভূমি > −১২ dB → পানী < −১৮ dB", "उच्च भूमि > −12 dB → पानी < −18 dB", "উচ্চ জমি > −১২ dB → জল < −১৮ dB"],
  ["NDVI · Pre-Flood", "NDVI · বানপানীৰ আগত", "NDVI · बाढ़-पूर्व", "NDVI · বন্যার আগে"],
  ["SAR VV · Post-Flood", "SAR VV · বানপানীৰ পিছত", "SAR VV · बाढ़-पश्चात", "SAR VV · বন্যার পরে"],
  ["PRE · HEALTHY CANOPY", "আগতে · সুস্থ শস্য", "पहले · स्वस्थ फसल", "আগে · সুস্থ ফসল"],
  ["POST · SAR WATER MASK", "পিছত · SAR পানী মুখা", "बाद में · SAR जल परत", "পরে · SAR জল স্তর"],
  ["Page Not Found", "পৃষ্ঠা পোৱা নগ'ল", "पृष्ठ नहीं मिला", "পৃষ্ঠা পাওয়া যায়নি"],
  ["Sorry, the page you are looking for doesn't exist.", "ক্ষমা কৰিব, আপুনি বিচৰা পৃষ্ঠাটো অস্তিত্বত নাই।", "क्षमा करें, आप जिस पृष्ठ को ढूंढ रहे हैं वह मौजूद नहीं है।", "দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন তা নেই।"],
  ["It may have been moved or deleted.", "ইয়াক হয়তো স্থানান্তৰ বা বিলোপ কৰা হৈছে।", "इसे स्थानांतरित या हटा दिया गया हो सकता है।", "এটি সরানো বা মুছে ফেলা হয়ে থাকতে পারে।"],
  ["Go Home", "মুখ্য পৃষ্ঠালৈ যাওক", "होम पर जाएं", "হোমে যান"],
  ["An unexpected error occurred.", "এটা অপ্ৰত্যাশিত ত্ৰুটি ঘটিল।", "एक अप्रत्याशित त्रुटि हुई।", "একটি অপ্রত্যাশিত ত্রুটি ঘটেছে।"],
  ["Sign out", "ছাইন আউট", "साइन आउट", "সাইন আউট"],
  ["Reload Page", "পৃষ্ঠা পুনৰ লোড কৰক", "पृष्ठ पुनः लोड करें", "পৃষ্ঠা আবার লোড করুন"],
  ["Navigation", "নেভিগেশ্যন", "नेविगेशन", "নেভিগেশন"],
  ["Menu", "মেনু", "मेन्यू", "মেনু"],
  ["SEALED FOR PMFBY", "PMFBY-ৰ বাবে ছীল কৰা", "PMFBY के लिए सील", "PMFBY-এর জন্য সিল করা"],
  ["AUTO SEALED VIA SATELLITE TELEMETRY", "Satellite Telemetry-ৰ জৰিয়তে স্বয়ং-ছীল", "Satellite Telemetry द्वारा ऑटो-सील", "Satellite Telemetry দ্বারা অটো-সিল"],
  ["PENDING CONSENT", "সন্মতি অপেক্ষাৰত", "सहमति लंबित", "সম্মতি অপেক্ষমাণ"],
  ["INTIMATION GENERATED", "জাননী সৃষ্টি হৈছে", "सूचना बनाई गई", "নোটিশ তৈরি হয়েছে"],
  ["NOT INITIATED", "আৰম্ভ কৰা হোৱা নাই", "शुरू नहीं हुआ", "শুরু হয়নি"],
  ["Not escalated", "বৃদ্ধি কৰা হোৱা নাই", "एस्केलेट नहीं किया गया", "বৃদ্ধি করা হয়নি"],
  ["DBT success", "DBT সফল", "DBT सफल", "DBT সফল"],
  ["Fixture notice", "ডেমো তথ্য জাননী", "फिक्स्चर सूचना", "ডেমো তথ্য নোটিশ"],
  ["ULPIN-style identifier", "ULPIN-ধৰণৰ পৰিচয়", "ULPIN-शैली पहचान", "ULPIN-ধরনের পরিচয়"],
  ["Patta type", "পট্টাৰ ধৰণ", "पट्टा प्रकार", "পাট্টার ধরন"],
  ["Crop", "শস্য", "फसल", "ফসল"],
  ["Turf parcel area", "Turf ভূমি এলেকা", "Turf भूखंड क्षेत्र", "Turf জমির এলাকা"],
  ["Capped inundation", "সীমাবদ্ধ জলমগ্নতা", "सीमित जलमग्नता", "সীমাবদ্ধ জলমগ্নতা"],
  ["Live loss percentage", "লাইভ ক্ষতি শতাংশ", "लाइव क्षति प्रतिशत", "লাইভ ক্ষতির শতাংশ"],
  ["Scale of Finance", "বিত্তৰ পৰিমাণ", "वित्त का पैमाना", "অর্থের পরিমাণ"],
  ["Consent channel", "সন্মতি মাধ্যম", "सहमति माध्यम", "সম্মতি মাধ্যম"],
  ["Telemetry escalation", "টেলিমেট্ৰি বৃদ্ধি", "टेलीमेट्री एस्केलेशन", "টেলিমেট্রি বৃদ্ধি"],
  ["PFMS simulator", "PFMS চিমুলেটৰ", "PFMS सिमुलेटर", "PFMS সিমুলেটর"],
  ["Public-source evidence", "সাৰ্বজনীন উৎসৰ প্ৰমাণ", "सार्वजनिक स्रोत प्रमाण", "সর্বজনীন উৎসের প্রমাণ"],
  ["Registry status", "পঞ্জীৰ স্থিতি", "रजिस्टर स्थिति", "রেজিস্ট্রির অবস্থা"],
  ["Payout is indicative and awaits state-notification verification.", "পৰিশোধ আনুমানিক আৰু ৰাজ্যিক জাননী পৰীক্ষাৰ অপেক্ষাত আছে।", "भुगतान अनुमानित है और राज्य अधिसूचना सत्यापन लंबित है।", "পরিশোধ আনুমানিক এবং রাজ্য বিজ্ঞপ্তি যাচাইয়ের অপেক্ষায় আছে।"],
  ["Bhuvan: public reference portal", "Bhuvan: সাৰ্বজনীন প্ৰসংগ প'ৰ্টেল", "Bhuvan: सार्वजनिक संदर्भ पोर्टल", "Bhuvan: সর্বজনীন রেফারেন্স পোর্টাল"],
  ["Transaction UTR", "লেনদেন UTR", "लेनदेन UTR", "লেনদেন UTR"],
  ["Target account", "লক্ষ্য একাউণ্ট", "लक्षित खाता", "লক্ষ্য অ্যাকাউন্ট"],
  ["Settlement timestamp", "পৰিশোধ সময়", "भुगतान समय", "পরিশোধের সময়"],
  ["PFMS / NPCI APB simulator", "PFMS / NPCI APB চিমুলেটৰ", "PFMS / NPCI APB सिमुलेटर", "PFMS / NPCI APB সিমুলেটর"],
  ["PMFBY Claim Simulator", "PMFBY দাবী চিমুলেটৰ", "PMFBY दावा सिमुलेटर", "PMFBY দাবি সিমুলেটর"],
  ["Filter by ULPIN, Khasra, farmer, crop, Aadhaar mask, or claim ID", "ULPIN, খচৰা, কৃষক, শস্য, আধাৰ মুখা বা দাবী ID-ৰে ফিল্টাৰ কৰক", "ULPIN, खसरा, किसान, फसल, आधार मास्क या दावा ID से फ़िल्टर करें", "ULPIN, খসড়া, কৃষক, ফসল, আধার মাস্ক বা দাবি ID দিয়ে ফিল্টার করুন"],
  ["Filter claim status", "দাবীৰ স্থিতি ফিল্টাৰ", "दावा स्थिति फ़िल्टर", "দাবির অবস্থা ফিল্টার"],
];

const lookup = new Map<string, string>();
for (const phrase of phrases) for (let i = 0; i < phrase.length; i++) lookup.set(`${i}:${phrase[i]}`, phrase[i]);

export function getStoredLanguage(): AppLanguage {
  if (typeof window === "undefined") return "as";
  const value = window.localStorage.getItem("kisan-kavach-language");
  return value === "en" || value === "hi" || value === "bn" || value === "as" ? value : "as";
}

export function localizeDashboard(language: AppLanguage) {
  if (typeof document === "undefined") return () => undefined;
  document.documentElement.lang = language;
  const translate = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) return value;
    const index = phrases.findIndex((phrase) => phrase.includes(trimmed));
    const languageIndex = language === "en" ? 0 : language === "as" ? 1 : language === "hi" ? 2 : 3;
    if (index >= 0) {
      const phrase = phrases[index];
      return value.replace(trimmed, phrase[languageIndex]);
    }
    const replacements: Record<AppLanguage, Array<[RegExp, string]>> = {
      en: [],
      as: [[/mean loss across intersected parcels/g, "ছেদ কৰা ভূমিৰ গড় ক্ষতি"], [/Masked attributes in privacy-safe fixture/g, "গোপনীয়তা-সুৰক্ষিত তথ্য"], [/Open-Meteo precipitation · latest 72h/g, "Open-Meteo বৰষুণ · শেহতীয়া ৭২ ঘণ্টা"], [/Auto-Sealed via Satellite Telemetry \(Rule 14\.2 Escalation\)/g, "Satellite Telemetry-ৰ জৰিয়তে স্বয়ং-ছীল"], [/SLA Active: /g, "SLA সক্ৰিয়: "], [/Layer: /g, "স্তৰ: "], [/Khasra #(\S+) · Loss /g, "খচৰা #$1 · ক্ষতি "], [/status updated to /g, "স্থিতি আপডেট: "], [/eligible/g, "যোগ্য"], [/plots/g, "ভূমি"], [/block/g, "ব্লক"]],
      hi: [[/mean loss across intersected parcels/g, "प्रतिच्छेदित भूखंडों में औसत क्षति"], [/Masked attributes in privacy-safe fixture/g, "गोपनीयता-सुरक्षित डेटा"], [/Open-Meteo precipitation · latest 72h/g, "Open-Meteo वर्षा · पिछले ७२ घंटे"], [/Auto-Sealed via Satellite Telemetry \(Rule 14\.2 Escalation\)/g, "Satellite Telemetry द्वारा ऑटो-सील"], [/SLA Active: /g, "SLA सक्रिय: "], [/Layer: /g, "परत: "], [/Khasra #(\S+) · Loss /g, "खसरा #$1 · क्षति "], [/status updated to /g, "स्थिति अपडेट: "], [/eligible/g, "योग्य"], [/plots/g, "भूखंड"], [/block/g, "ब्लॉक"]],
      bn: [[/mean loss across intersected parcels/g, "ছেদ করা জমির গড় ক্ষতি"], [/Masked attributes in privacy-safe fixture/g, "গোপনীয়তা-সুরক্ষিত তথ্য"], [/Open-Meteo precipitation · latest 72h/g, "Open-Meteo বৃষ্টিপাত · সাম্প্রতিক ৭২ ঘণ্টা"], [/Auto-Sealed via Satellite Telemetry \(Rule 14\.2 Escalation\)/g, "Satellite Telemetry দ্বারা অটো-সিল"], [/SLA Active: /g, "SLA সক্রিয়: "], [/Layer: /g, "স্তর: "], [/Khasra #(\S+) · Loss /g, "খসড়া #$1 · ক্ষতি "], [/status updated to /g, "অবস্থা আপডেট: "], [/eligible/g, "যোগ্য"], [/plots/g, "জমি"], [/block/g, "ব্লক"]],
    };
    return replacements[language].reduce((result, [pattern, replacement]) => result.replace(pattern, replacement), value);
  };
  const scan = (root: Node) => {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes: Text[] = [];
    while (walker.nextNode()) nodes.push(walker.currentNode as Text);
    for (const node of nodes) {
      const parent = node.parentElement;
      if (!parent || ["SCRIPT", "STYLE", "TEXTAREA"].includes(parent.tagName)) continue;
      const next = translate(node.textContent ?? "");
      if (next !== node.textContent) node.textContent = next;
    }
    const elements = root instanceof Document || root instanceof Element ? root.querySelectorAll("input[placeholder], [aria-label], [title]") : [];
    elements.forEach((element: Element) => {
      for (const attr of ["placeholder", "aria-label", "title"]) {
        const value = element.getAttribute(attr);
        if (value) element.setAttribute(attr, translate(value));
      }
    });
  };
  scan(document.body);
  const observer = new MutationObserver(() => scan(document.body));
  observer.observe(document.body, { childList: true, subtree: true, characterData: true });
  return () => observer.disconnect();
}
