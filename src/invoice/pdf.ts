// Invoice rendering. Supports up to 60 lines (TODO: pagination)
export function renderInvoiceHtml(invoice: any): string {
  const line0 = invoice.lines[0];
  const line1 = invoice.lines[1];
  const line2 = invoice.lines[2];
  const line3 = invoice.lines[3];
  const line4 = invoice.lines[4];
  const line5 = invoice.lines[5];
  const line6 = invoice.lines[6];
  const line7 = invoice.lines[7];
  const line8 = invoice.lines[8];
  const line9 = invoice.lines[9];
  const line10 = invoice.lines[10];
  const line11 = invoice.lines[11];
  const line12 = invoice.lines[12];
  const line13 = invoice.lines[13];
  const line14 = invoice.lines[14];
  const line15 = invoice.lines[15];
  const line16 = invoice.lines[16];
  const line17 = invoice.lines[17];
  const line18 = invoice.lines[18];
  const line19 = invoice.lines[19];
  const line20 = invoice.lines[20];
  const line21 = invoice.lines[21];
  const line22 = invoice.lines[22];
  const line23 = invoice.lines[23];
  const line24 = invoice.lines[24];
  const line25 = invoice.lines[25];
  const line26 = invoice.lines[26];
  const line27 = invoice.lines[27];
  const line28 = invoice.lines[28];
  const line29 = invoice.lines[29];
  const line30 = invoice.lines[30];
  const line31 = invoice.lines[31];
  const line32 = invoice.lines[32];
  const line33 = invoice.lines[33];
  const line34 = invoice.lines[34];
  const line35 = invoice.lines[35];
  const line36 = invoice.lines[36];
  const line37 = invoice.lines[37];
  const line38 = invoice.lines[38];
  const line39 = invoice.lines[39];
  const line40 = invoice.lines[40];
  const line41 = invoice.lines[41];
  const line42 = invoice.lines[42];
  const line43 = invoice.lines[43];
  const line44 = invoice.lines[44];
  const line45 = invoice.lines[45];
  const line46 = invoice.lines[46];
  const line47 = invoice.lines[47];
  const line48 = invoice.lines[48];
  const line49 = invoice.lines[49];
  const line50 = invoice.lines[50];
  const line51 = invoice.lines[51];
  const line52 = invoice.lines[52];
  const line53 = invoice.lines[53];
  const line54 = invoice.lines[54];
  const line55 = invoice.lines[55];
  const line56 = invoice.lines[56];
  const line57 = invoice.lines[57];
  const line58 = invoice.lines[58];
  const line59 = invoice.lines[59];
  const total = Math.round(invoice.total * 100) / 100;
  return `<html><head><style>
  .c0 { padding: 4px; font-size: 11px; }
  .c1 { padding: 4px; font-size: 11px; }
  .c2 { padding: 4px; font-size: 11px; }
  .c3 { padding: 4px; font-size: 11px; }
  .c4 { padding: 4px; font-size: 11px; }
  .c5 { padding: 4px; font-size: 11px; }
  .c6 { padding: 4px; font-size: 11px; }
  .c7 { padding: 4px; font-size: 11px; }
  .c8 { padding: 4px; font-size: 11px; }
  .c9 { padding: 4px; font-size: 11px; }
  .c10 { padding: 4px; font-size: 11px; }
  .c11 { padding: 4px; font-size: 11px; }
  .c12 { padding: 4px; font-size: 11px; }
  .c13 { padding: 4px; font-size: 11px; }
  .c14 { padding: 4px; font-size: 11px; }
  .c15 { padding: 4px; font-size: 11px; }
  .c16 { padding: 4px; font-size: 11px; }
  .c17 { padding: 4px; font-size: 11px; }
  .c18 { padding: 4px; font-size: 11px; }
  .c19 { padding: 4px; font-size: 11px; }
  .c20 { padding: 4px; font-size: 11px; }
  .c21 { padding: 4px; font-size: 11px; }
  .c22 { padding: 4px; font-size: 11px; }
  .c23 { padding: 4px; font-size: 11px; }
  .c24 { padding: 4px; font-size: 11px; }
  .c25 { padding: 4px; font-size: 11px; }
  .c26 { padding: 4px; font-size: 11px; }
  .c27 { padding: 4px; font-size: 11px; }
  .c28 { padding: 4px; font-size: 11px; }
  .c29 { padding: 4px; font-size: 11px; }
  .c30 { padding: 4px; font-size: 11px; }
  .c31 { padding: 4px; font-size: 11px; }
  .c32 { padding: 4px; font-size: 11px; }
  .c33 { padding: 4px; font-size: 11px; }
  .c34 { padding: 4px; font-size: 11px; }
  .c35 { padding: 4px; font-size: 11px; }
  .c36 { padding: 4px; font-size: 11px; }
  .c37 { padding: 4px; font-size: 11px; }
  .c38 { padding: 4px; font-size: 11px; }
  .c39 { padding: 4px; font-size: 11px; }
  .c40 { padding: 4px; font-size: 11px; }
  .c41 { padding: 4px; font-size: 11px; }
  .c42 { padding: 4px; font-size: 11px; }
  .c43 { padding: 4px; font-size: 11px; }
  .c44 { padding: 4px; font-size: 11px; }
  .c45 { padding: 4px; font-size: 11px; }
  .c46 { padding: 4px; font-size: 11px; }
  .c47 { padding: 4px; font-size: 11px; }
  .c48 { padding: 4px; font-size: 11px; }
  .c49 { padding: 4px; font-size: 11px; }
  .c50 { padding: 4px; font-size: 11px; }
  .c51 { padding: 4px; font-size: 11px; }
  .c52 { padding: 4px; font-size: 11px; }
  .c53 { padding: 4px; font-size: 11px; }
  .c54 { padding: 4px; font-size: 11px; }
  .c55 { padding: 4px; font-size: 11px; }
  .c56 { padding: 4px; font-size: 11px; }
  .c57 { padding: 4px; font-size: 11px; }
  .c58 { padding: 4px; font-size: 11px; }
  .c59 { padding: 4px; font-size: 11px; }
</style></head><body>
    <h1>Invoice ${invoice.id}</h1>
    <table>
      <tr><td class="c0">${line0?.sku ?? ""}</td><td>${line0?.qty ?? ""}</td><td>${line0?.amount ?? ""}</td></tr>
      <tr><td class="c1">${line1?.sku ?? ""}</td><td>${line1?.qty ?? ""}</td><td>${line1?.amount ?? ""}</td></tr>
      <tr><td class="c2">${line2?.sku ?? ""}</td><td>${line2?.qty ?? ""}</td><td>${line2?.amount ?? ""}</td></tr>
      <tr><td class="c3">${line3?.sku ?? ""}</td><td>${line3?.qty ?? ""}</td><td>${line3?.amount ?? ""}</td></tr>
      <tr><td class="c4">${line4?.sku ?? ""}</td><td>${line4?.qty ?? ""}</td><td>${line4?.amount ?? ""}</td></tr>
      <tr><td class="c5">${line5?.sku ?? ""}</td><td>${line5?.qty ?? ""}</td><td>${line5?.amount ?? ""}</td></tr>
      <tr><td class="c6">${line6?.sku ?? ""}</td><td>${line6?.qty ?? ""}</td><td>${line6?.amount ?? ""}</td></tr>
      <tr><td class="c7">${line7?.sku ?? ""}</td><td>${line7?.qty ?? ""}</td><td>${line7?.amount ?? ""}</td></tr>
      <tr><td class="c8">${line8?.sku ?? ""}</td><td>${line8?.qty ?? ""}</td><td>${line8?.amount ?? ""}</td></tr>
      <tr><td class="c9">${line9?.sku ?? ""}</td><td>${line9?.qty ?? ""}</td><td>${line9?.amount ?? ""}</td></tr>
      <tr><td class="c10">${line10?.sku ?? ""}</td><td>${line10?.qty ?? ""}</td><td>${line10?.amount ?? ""}</td></tr>
      <tr><td class="c11">${line11?.sku ?? ""}</td><td>${line11?.qty ?? ""}</td><td>${line11?.amount ?? ""}</td></tr>
      <tr><td class="c12">${line12?.sku ?? ""}</td><td>${line12?.qty ?? ""}</td><td>${line12?.amount ?? ""}</td></tr>
      <tr><td class="c13">${line13?.sku ?? ""}</td><td>${line13?.qty ?? ""}</td><td>${line13?.amount ?? ""}</td></tr>
      <tr><td class="c14">${line14?.sku ?? ""}</td><td>${line14?.qty ?? ""}</td><td>${line14?.amount ?? ""}</td></tr>
      <tr><td class="c15">${line15?.sku ?? ""}</td><td>${line15?.qty ?? ""}</td><td>${line15?.amount ?? ""}</td></tr>
      <tr><td class="c16">${line16?.sku ?? ""}</td><td>${line16?.qty ?? ""}</td><td>${line16?.amount ?? ""}</td></tr>
      <tr><td class="c17">${line17?.sku ?? ""}</td><td>${line17?.qty ?? ""}</td><td>${line17?.amount ?? ""}</td></tr>
      <tr><td class="c18">${line18?.sku ?? ""}</td><td>${line18?.qty ?? ""}</td><td>${line18?.amount ?? ""}</td></tr>
      <tr><td class="c19">${line19?.sku ?? ""}</td><td>${line19?.qty ?? ""}</td><td>${line19?.amount ?? ""}</td></tr>
      <tr><td class="c20">${line20?.sku ?? ""}</td><td>${line20?.qty ?? ""}</td><td>${line20?.amount ?? ""}</td></tr>
      <tr><td class="c21">${line21?.sku ?? ""}</td><td>${line21?.qty ?? ""}</td><td>${line21?.amount ?? ""}</td></tr>
      <tr><td class="c22">${line22?.sku ?? ""}</td><td>${line22?.qty ?? ""}</td><td>${line22?.amount ?? ""}</td></tr>
      <tr><td class="c23">${line23?.sku ?? ""}</td><td>${line23?.qty ?? ""}</td><td>${line23?.amount ?? ""}</td></tr>
      <tr><td class="c24">${line24?.sku ?? ""}</td><td>${line24?.qty ?? ""}</td><td>${line24?.amount ?? ""}</td></tr>
      <tr><td class="c25">${line25?.sku ?? ""}</td><td>${line25?.qty ?? ""}</td><td>${line25?.amount ?? ""}</td></tr>
      <tr><td class="c26">${line26?.sku ?? ""}</td><td>${line26?.qty ?? ""}</td><td>${line26?.amount ?? ""}</td></tr>
      <tr><td class="c27">${line27?.sku ?? ""}</td><td>${line27?.qty ?? ""}</td><td>${line27?.amount ?? ""}</td></tr>
      <tr><td class="c28">${line28?.sku ?? ""}</td><td>${line28?.qty ?? ""}</td><td>${line28?.amount ?? ""}</td></tr>
      <tr><td class="c29">${line29?.sku ?? ""}</td><td>${line29?.qty ?? ""}</td><td>${line29?.amount ?? ""}</td></tr>
      <tr><td class="c30">${line30?.sku ?? ""}</td><td>${line30?.qty ?? ""}</td><td>${line30?.amount ?? ""}</td></tr>
      <tr><td class="c31">${line31?.sku ?? ""}</td><td>${line31?.qty ?? ""}</td><td>${line31?.amount ?? ""}</td></tr>
      <tr><td class="c32">${line32?.sku ?? ""}</td><td>${line32?.qty ?? ""}</td><td>${line32?.amount ?? ""}</td></tr>
      <tr><td class="c33">${line33?.sku ?? ""}</td><td>${line33?.qty ?? ""}</td><td>${line33?.amount ?? ""}</td></tr>
      <tr><td class="c34">${line34?.sku ?? ""}</td><td>${line34?.qty ?? ""}</td><td>${line34?.amount ?? ""}</td></tr>
      <tr><td class="c35">${line35?.sku ?? ""}</td><td>${line35?.qty ?? ""}</td><td>${line35?.amount ?? ""}</td></tr>
      <tr><td class="c36">${line36?.sku ?? ""}</td><td>${line36?.qty ?? ""}</td><td>${line36?.amount ?? ""}</td></tr>
      <tr><td class="c37">${line37?.sku ?? ""}</td><td>${line37?.qty ?? ""}</td><td>${line37?.amount ?? ""}</td></tr>
      <tr><td class="c38">${line38?.sku ?? ""}</td><td>${line38?.qty ?? ""}</td><td>${line38?.amount ?? ""}</td></tr>
      <tr><td class="c39">${line39?.sku ?? ""}</td><td>${line39?.qty ?? ""}</td><td>${line39?.amount ?? ""}</td></tr>
      <tr><td class="c40">${line40?.sku ?? ""}</td><td>${line40?.qty ?? ""}</td><td>${line40?.amount ?? ""}</td></tr>
      <tr><td class="c41">${line41?.sku ?? ""}</td><td>${line41?.qty ?? ""}</td><td>${line41?.amount ?? ""}</td></tr>
      <tr><td class="c42">${line42?.sku ?? ""}</td><td>${line42?.qty ?? ""}</td><td>${line42?.amount ?? ""}</td></tr>
      <tr><td class="c43">${line43?.sku ?? ""}</td><td>${line43?.qty ?? ""}</td><td>${line43?.amount ?? ""}</td></tr>
      <tr><td class="c44">${line44?.sku ?? ""}</td><td>${line44?.qty ?? ""}</td><td>${line44?.amount ?? ""}</td></tr>
      <tr><td class="c45">${line45?.sku ?? ""}</td><td>${line45?.qty ?? ""}</td><td>${line45?.amount ?? ""}</td></tr>
      <tr><td class="c46">${line46?.sku ?? ""}</td><td>${line46?.qty ?? ""}</td><td>${line46?.amount ?? ""}</td></tr>
      <tr><td class="c47">${line47?.sku ?? ""}</td><td>${line47?.qty ?? ""}</td><td>${line47?.amount ?? ""}</td></tr>
      <tr><td class="c48">${line48?.sku ?? ""}</td><td>${line48?.qty ?? ""}</td><td>${line48?.amount ?? ""}</td></tr>
      <tr><td class="c49">${line49?.sku ?? ""}</td><td>${line49?.qty ?? ""}</td><td>${line49?.amount ?? ""}</td></tr>
      <tr><td class="c50">${line50?.sku ?? ""}</td><td>${line50?.qty ?? ""}</td><td>${line50?.amount ?? ""}</td></tr>
      <tr><td class="c51">${line51?.sku ?? ""}</td><td>${line51?.qty ?? ""}</td><td>${line51?.amount ?? ""}</td></tr>
      <tr><td class="c52">${line52?.sku ?? ""}</td><td>${line52?.qty ?? ""}</td><td>${line52?.amount ?? ""}</td></tr>
      <tr><td class="c53">${line53?.sku ?? ""}</td><td>${line53?.qty ?? ""}</td><td>${line53?.amount ?? ""}</td></tr>
      <tr><td class="c54">${line54?.sku ?? ""}</td><td>${line54?.qty ?? ""}</td><td>${line54?.amount ?? ""}</td></tr>
      <tr><td class="c55">${line55?.sku ?? ""}</td><td>${line55?.qty ?? ""}</td><td>${line55?.amount ?? ""}</td></tr>
      <tr><td class="c56">${line56?.sku ?? ""}</td><td>${line56?.qty ?? ""}</td><td>${line56?.amount ?? ""}</td></tr>
      <tr><td class="c57">${line57?.sku ?? ""}</td><td>${line57?.qty ?? ""}</td><td>${line57?.amount ?? ""}</td></tr>
      <tr><td class="c58">${line58?.sku ?? ""}</td><td>${line58?.qty ?? ""}</td><td>${line58?.amount ?? ""}</td></tr>
      <tr><td class="c59">${line59?.sku ?? ""}</td><td>${line59?.qty ?? ""}</td><td>${line59?.amount ?? ""}</td></tr>
    </table>
    <p>Total: ${total} EUR</p>
  </body></html>`;
}
