import { getClaimExport } from "./gisAnalytics";
import { spawn } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

export type DossierLanguage = "en" | "as" | "hi" | "bn";

function cleanPdfText(value: string | number | null) {
  return String(value ?? "—").replace(/[()\\]/g, "").replace(/[^\x20-\x7E]/g, "");
}

function text(x: number, y: number, size: number, value: string | number | null, font = "F1", colour = "0.063 0.129 0.208") {
  return `BT /${font} ${size} Tf ${colour} rg ${x} ${y} Td (${cleanPdfText(value)}) Tj ET`;
}

function box(x: number, y: number, width: number, height: number, colour: string, stroke = false) {
  return `${colour} ${stroke ? "RG" : "rg"} ${x} ${y} ${width} ${height} re ${stroke ? "S" : "f"}`;
}

/** Builds a compact, printable PMFBY assessment dossier without external runtime dependencies. */
export function buildClaimDossierPdf(claimId: string): Buffer {
  const payload = getClaimExport(claimId);
  const { cadastral, assessment } = payload;
  const content = [
    box(0, 742, 612, 50, "0.043 0.129 0.208"),
    text(42, 770, 18, "KISAN KAVACH", "F2", "1 1 1"),
    text(42, 754, 8, "PMFBY FLOOD ASSESSMENT & CLAIM DOSSIER", "F1", "0.78 0.88 0.96"),
    text(404, 767, 8, `DOSSIER ${payload.applicationUuid}`, "F1", "0.82 0.9 0.96"),
    text(42, 724, 8, "REPRESENTATIVE ANALYTICAL GIS FIXTURE — NOT AN OFFICIAL NCIP FILING", "F1", "0.69 0.23 0.2"),
    box(42, 691, 528, 20, "0.925 0.957 0.98"),
    text(52, 698, 9, "1. CLAIM REGISTRY & CADASTRAL IDENTIFICATION", "F1", "0.063 0.129 0.208"),
    text(52, 670, 8, "Claim ID", "F1", "0.38 0.45 0.52"),
    text(52, 656, 10, payload.applicationUuid, "F2"),
    text(230, 670, 8, "Claim status", "F1", "0.38 0.45 0.52"),
    text(230, 656, 10, payload.claimStatus, "F2"),
    text(410, 670, 8, "ULPIN-style identifier", "F1", "0.38 0.45 0.52"),
    text(410, 656, 9, cadastral.ulpin, "F2"),
    text(52, 628, 8, "Khasra number", "F1", "0.38 0.45 0.52"),
    text(52, 614, 10, cadastral.khasraNo, "F2"),
    text(230, 628, 8, "Land registry area", "F1", "0.38 0.45 0.52"),
    text(230, 614, 10, `${cadastral.totalAreaHa.toFixed(3)} ha`, "F2"),
    text(410, 628, 8, "Masked Aadhaar", "F1", "0.38 0.45 0.52"),
    text(410, 614, 10, cadastral.maskedAadhaar, "F2"),
    text(52, 586, 8, "Jurisdiction", "F1", "0.38 0.45 0.52"),
    text(52, 572, 10, `${cadastral.village}, ${cadastral.block}`, "F2"),
    text(330, 572, 10, `${cadastral.district}, ${cadastral.state} · ${assessment.crop}`, "F2"),
    box(42, 535, 528, 20, "0.925 0.957 0.98"),
    text(52, 542, 9, "2. GEO-SPATIAL FLOOD ASSESSMENT", "F1", "0.063 0.129 0.208"),
    text(52, 514, 8, "Satellite source", "F1", "0.38 0.45 0.52"),
    text(52, 500, 10, assessment.satelliteSource, "F2"),
    text(230, 514, 8, "Computed loss", "F1", "0.38 0.45 0.52"),
    text(230, 500, 16, `${assessment.lossPercentage}%`, "F2", "0.74 0.24 0.2"),
    text(410, 514, 8, "Severity", "F1", "0.38 0.45 0.52"),
    text(410, 500, 10, assessment.severity.toUpperCase(), "F2"),
    text(52, 472, 8, "Raw polygon intersection", "F1", "0.38 0.45 0.52"),
    text(52, 458, 10, `${assessment.intersectedAreaHa.toFixed(3)} ha`, "F2"),
    text(230, 472, 8, "Capped inundated area", "F1", "0.38 0.45 0.52"),
    text(230, 458, 10, `${assessment.trueInundatedHa.toFixed(3)} ha`, "F2"),
    text(410, 472, 8, "Indicative payout", "F1", "0.38 0.45 0.52"),
    text(410, 458, 10, `INR ${payload.financialAssessment.indicativePayoutInr.toLocaleString("en-IN")}`, "F2", "0.11 0.45 0.28"),
    box(42, 402, 528, 35, "0.985 0.95 0.89"),
    text(52, 423, 8, "AREA SAFETY & FINANCIAL STATUS", "F2", "0.56 0.28 0.05"),
    text(52, 409, 9, "trueInundatedHa = min(area(Flood Mask intersection Parcel), registry total area).", "F1", "0.35 0.24 0.09"),
    text(52, 389, 8, `Indicative rate: INR ${payload.financialAssessment.scaleOfFinancePerHa.toLocaleString("en-IN")} / ha · ${payload.financialAssessment.sourceStatus}.`, "F1", "0.35 0.24 0.09"),
    box(42, 344, 528, 20, "0.925 0.957 0.98"),
    text(52, 351, 9, "3. CONSENT & AUDIT TRAIL", "F1", "0.063 0.129 0.208"),
    text(52, 323, 8, "Consent channel", "F1", "0.38 0.45 0.52"),
    text(52, 309, 10, payload.farmerConsent.channel, "F2"),
    text(230, 323, 8, "Consent timestamp", "F1", "0.38 0.45 0.52"),
    text(230, 309, 10, payload.farmerConsent.consentTimestamp ?? "Awaiting SMS reply", "F2"),
    text(410, 323, 8, "Policy reference", "F1", "0.38 0.45 0.52"),
    text(410, 309, 9, cadastral.pmfbyPolicyId, "F2"),
    text(52, 291, 7, `SAR acquisition: ${payload.statutoryAudit.sarAcquisitionTimestamp} · SMS dispatch: ${payload.statutoryAudit.smsDispatchTimestamp}`, "F1", "0.35 0.24 0.09"),
    text(52, 278, 7, `Confirmation / escalation: ${payload.statutoryAudit.confirmationTimestamp ?? payload.statutoryAudit.autoSealTimestamp ?? "Awaiting response"} · ${payload.operationalSla.displayLabel}`, "F1", "0.35 0.24 0.09"),
    text(52, 265, 7, `SLA deadline: ${payload.statutoryAudit.slaDeadlineTimestamp} · urgent reminder: ${payload.statutoryAudit.urgentReminderRequired ? "required" : "not required"}`, "F1", "0.35 0.24 0.09"),
    text(52, 252, 7, `IMD/ERA5 telemetry: ${payload.statutoryAudit.rainfallTelemetry.cumulative72hMm} mm · ${payload.statutoryAudit.rainfallTelemetry.period}`, "F1", "0.35 0.24 0.09"),
    text(52, 239, 7, `PFMS / NPCI APB simulator: ${payload.pfmsSettlement.status} · UTR ${payload.pfmsSettlement.utr ?? "not initiated"}`, "F1", "0.35 0.24 0.09"),
    box(42, 202, 528, 27, "0.96 0.97 0.98"),
    text(52, 219, 8, "METHOD & PUBLIC-SOURCE NOTE", "F2", "0.063 0.129 0.208"),
    text(52, 206, 7, `Sentinel-1 SAR geometry · Copernicus: ${assessment.provenance.copernicus.sceneId} · Bhuvan reference only`, "F1"),
    text(42, 187, 7, `Fixture SHA-256: ${assessment.provenance.evidence.localFloodFixtureSha256} · Generated: ${payload.createdAt}`, "F1", "0.38 0.45 0.52"),
    "0.886 0.91 0.94 RG 42 174 m 570 174 l S",
    text(42, 158, 7, "This downloadable dossier is a demonstrative PMFBY workflow artifact. It must not be used as a land record or claim adjudication decision.", "F1", "0.38 0.45 0.52"),
  ].join("\n");

  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> /Contents 4 0 R >>",
    `<< /Length ${Buffer.byteLength(content, "utf8")} >>\nstream\n${content}\nendstream`,
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
  ];
  let pdf = "%PDF-1.4\n";
  const offsets: number[] = [0];
  objects.forEach((object, index) => { offsets[index + 1] = Buffer.byteLength(pdf, "utf8"); pdf += `${index + 1} 0 obj\n${object}\nendobj\n`; });
  const xref = Buffer.byteLength(pdf, "utf8");
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n${offsets.slice(1).map((offset) => `${offset.toString().padStart(10, "0")} 00000 n \n`).join("")}trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;
  return Buffer.from(pdf, "utf8");
}

const localizedLabels: Record<Exclude<DossierLanguage, "en">, Record<string, string>> = {
  as: {
    title: "কিষাণ কবচ", subtitle: "PMFBY বানপানী মূল্যায়ন আৰু দাবী নথি", registry: "১. দাবী পঞ্জীয়ন আৰু ভূমি পৰিচয়", geo: "২. ভৌগোলিক বানপানী মূল্যায়ন", safety: "ভূমি সুৰক্ষা আৰু আৰ্থিক স্থিতি", audit: "৩. সন্মতি আৰু অডিট ইতিহাস", claim: "দাবী আইডি", status: "দাবীৰ স্থিতি", khasra: "খচৰা নম্বৰ", area: "মাটিৰ পঞ্জীয়ন এলেকা", jurisdiction: "অধিক্ষেত্ৰ", source: "উপগ্ৰহ উৎস", loss: "হিচাপ কৰা ক্ষতি", severity: "তীব্ৰতা", inundated: "বানপানীত ডুবা এলেকা", payout: "আনুমানিক পৰিশোধ", channel: "সন্মতি মাধ্যম", policy: "নীতি উল্লেখ", generated: "সৃষ্টি কৰা হৈছে", notice: "এই নথিখন প্ৰদৰ্শনীমূলক PMFBY কাৰ্যপ্ৰবাহৰ নথি।",
  },
  hi: {
    title: "किसान कवच", subtitle: "PMFBY बाढ़ आकलन और दावा दस्तावेज़", registry: "१. दावा पंजीकरण और भू-अभिलेख पहचान", geo: "२. भू-स्थानिक बाढ़ आकलन", safety: "क्षेत्र सुरक्षा और वित्तीय स्थिति", audit: "३. सहमति और ऑडिट इतिहास", claim: "दावा आईडी", status: "दावे की स्थिति", khasra: "खसरा नंबर", area: "भूमि अभिलेख क्षेत्र", jurisdiction: "अधिकार क्षेत्र", source: "उपग्रह स्रोत", loss: "गणना की गई क्षति", severity: "गंभीरता", inundated: "जलमग्न क्षेत्र", payout: "अनुमानित भुगतान", channel: "सहमति माध्यम", policy: "नीति संदर्भ", generated: "निर्मित", notice: "यह दस्तावेज़ प्रदर्शनी PMFBY कार्यप्रवाह का नमूना है।",
  },
  bn: {
    title: "কিষাণ কবচ", subtitle: "PMFBY বন্যা মূল্যায়ন ও দাবি নথি", registry: "১. দাবি নিবন্ধন ও ভূমি পরিচয়", geo: "২. ভূ-স্থানিক বন্যা মূল্যায়ন", safety: "এলাকা সুরক্ষা ও আর্থিক অবস্থা", audit: "৩. সম্মতি ও অডিট ইতিহাস", claim: "দাবি আইডি", status: "দাবির অবস্থা", khasra: "খসড়া নম্বর", area: "ভূমি নিবন্ধন এলাকা", jurisdiction: "অধিক্ষেত্র", source: "উপগ্রহ উৎস", loss: "হিসাব করা ক্ষতি", severity: "তীব্রতা", inundated: "জলমগ্ন এলাকা", payout: "আনুমানিক পরিশোধ", channel: "সম্মতির মাধ্যম", policy: "নীতি উল্লেখ", generated: "তৈরি হয়েছে", notice: "এই নথিটি প্রদর্শনী PMFBY কার্যপ্রবাহের একটি নমুনা।",
  },
};

/** Generates a Unicode PDF for Assamese, Hindi, or Bengali using bundled Noto fonts. */
export async function buildLocalizedClaimDossierPdf(claimId: string, language: Exclude<DossierLanguage, "en">): Promise<Buffer> {
  const payload = getClaimExport(claimId);
  const labels = localizedLabels[language];
  const root = dirname(fileURLToPath(import.meta.url));
  const fontPath = language === "hi" ? join(root, "fonts", "NotoSansDevanagari-Regular.ttf") : join(root, "fonts", "NotoSansBengali-Regular.ttf");
  const html = localizedDossierHtml(payload, labels);
  const script = `import sys\nfrom weasyprint import HTML\nhtml=sys.stdin.read()\nHTML(string=html, base_url=${JSON.stringify(root)}).write_pdf(sys.stdout.buffer)`;
  return new Promise<Buffer>((resolve, reject) => {
    const child = spawn("python3", ["-c", script], { env: { ...process.env, KISAN_FONT_PATH: fontPath } });
    const chunks: Buffer[] = [];
    let stderr = "";
    child.stdout.on("data", (chunk: Buffer) => chunks.push(chunk));
    child.stderr.on("data", (chunk: Buffer) => { stderr += chunk.toString(); });
    child.on("error", reject);
    child.on("close", (code) => code === 0 ? resolve(Buffer.concat(chunks)) : reject(new Error(stderr || `Localized PDF renderer exited with code ${code}`)));
    child.stdin.end(html);
  });
}

function localizedDossierHtml(payload: ReturnType<typeof getClaimExport>, labels: Record<string, string>) {
  const esc = (value: unknown) => String(value ?? "—").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
  const item = (label: string, value: unknown) => `<div class="item"><span>${esc(label)}</span><strong>${esc(value)}</strong></div>`;
  return `<!doctype html><html><head><meta charset="utf-8"><style>@font-face{font-family:Local;src:url('${esc("fonts/" + (labels.title.includes("क") ? "NotoSansDevanagari-Regular.ttf" : "NotoSansBengali-Regular.ttf") )}')}@page{size:A4;margin:0}body{font-family:Local,sans-serif;color:#263b2b;margin:0;background:#fffdf4}header{height:82px;background:#163b2b;color:white;padding:24px 42px;box-sizing:border-box}h1{font-size:21px;margin:0 0 5px}header p{font-size:10px;color:#d9e7d6;margin:0}.page{padding:25px 42px}.section{background:#e8eddc;color:#304d35;padding:7px 10px;margin:0 0 14px;font-size:11px;font-weight:bold}.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin:0 10px 25px}.item span{display:block;color:#77806c;font-size:9px;margin-bottom:4px}.item strong{font-size:11px;line-height:1.35}.notice{background:#fbefd9;padding:12px;margin:8px 0 25px;font-size:10px;color:#6c4d20}.footer{border-top:1px solid #d9d4c1;padding-top:15px;color:#687265;font-size:9px;line-height:1.5}</style></head><body><header><h1>${esc(labels.title)}</h1><p>${esc(labels.subtitle)}</p></header><div class="page"><div class="section">${esc(labels.registry)}</div><div class="grid">${item(labels.claim,payload.applicationUuid)}${item(labels.status,payload.claimStatus)}${item("ULPIN",payload.cadastral.ulpin)}${item(labels.khasra,payload.cadastral.khasraNo)}${item(labels.area,`${payload.cadastral.totalAreaHa.toFixed(3)} ha`)}${item(labels.jurisdiction,`${payload.cadastral.village}, ${payload.cadastral.district}`)}</div><div class="section">${esc(labels.geo)}</div><div class="grid">${item(labels.source,payload.assessment.satelliteSource)}${item(labels.loss,`${payload.assessment.lossPercentage}%`)}${item(labels.severity,payload.assessment.severity)}${item(labels.inundated,`${payload.assessment.trueInundatedHa.toFixed(3)} ha`)}${item(labels.payout,`INR ${payload.financialAssessment.indicativePayoutInr.toLocaleString("en-IN")}`)}${item(labels.policy,payload.cadastral.pmfbyPolicyId)}</div><div class="notice"><strong>${esc(labels.safety)}</strong><br>trueInundatedHa = min(area(Flood Mask intersection Parcel), registry total area).</div><div class="section">${esc(labels.audit)}</div><div class="grid">${item(labels.channel,payload.farmerConsent.channel)}${item(labels.status,payload.farmerConsent.consentTimestamp ?? "Awaiting response")}${item(labels.policy,payload.cadastral.pmfbyPolicyId)}</div><div class="footer">SAR acquisition: ${esc(payload.statutoryAudit.sarAcquisitionTimestamp)}<br>IMD/ERA5 telemetry: ${esc(payload.statutoryAudit.rainfallTelemetry.cumulative72hMm)} mm<br>${esc(labels.generated)}: ${esc(payload.createdAt)}<br><br>${esc(labels.notice)}</div></div></body></html>`;
}
