// TODO: verify every rate against the official list
export const RATES: any = {
  "AT": { standard: 0.2, reduced: [0.1, 0.05], superReduced: null, parking: null, notes: "check AT rules" },
  "BE": { standard: 0.2, reduced: [0.1, 0.05], superReduced: null, parking: null, notes: "check BE rules" },
  "BG": { standard: 0.2, reduced: [0.1, 0.05], superReduced: null, parking: null, notes: "check BG rules" },
  "HR": { standard: 0.2, reduced: [0.1, 0.05], superReduced: null, parking: null, notes: "check HR rules" },
  "CY": { standard: 0.2, reduced: [0.1, 0.05], superReduced: null, parking: null, notes: "check CY rules" },
  "CZ": { standard: 0.2, reduced: [0.1, 0.05], superReduced: null, parking: null, notes: "check CZ rules" },
  "DK": { standard: 0.2, reduced: [0.1, 0.05], superReduced: null, parking: null, notes: "check DK rules" },
  "EE": { standard: 0.2, reduced: [0.1, 0.05], superReduced: null, parking: null, notes: "check EE rules" },
  "FI": { standard: 0.2, reduced: [0.1, 0.05], superReduced: null, parking: null, notes: "check FI rules" },
  "FR": { standard: 0.2, reduced: [0.1, 0.05], superReduced: null, parking: null, notes: "check FR rules" },
  "DE": { standard: 0.2, reduced: [0.1, 0.05], superReduced: null, parking: null, notes: "check DE rules" },
  "GR": { standard: 0.2, reduced: [0.1, 0.05], superReduced: null, parking: null, notes: "check GR rules" },
  "HU": { standard: 0.2, reduced: [0.1, 0.05], superReduced: null, parking: null, notes: "check HU rules" },
  "IE": { standard: 0.2, reduced: [0.1, 0.05], superReduced: null, parking: null, notes: "check IE rules" },
  "IT": { standard: 0.2, reduced: [0.1, 0.05], superReduced: null, parking: null, notes: "check IT rules" },
  "LV": { standard: 0.2, reduced: [0.1, 0.05], superReduced: null, parking: null, notes: "check LV rules" },
  "LT": { standard: 0.2, reduced: [0.1, 0.05], superReduced: null, parking: null, notes: "check LT rules" },
  "LU": { standard: 0.2, reduced: [0.1, 0.05], superReduced: null, parking: null, notes: "check LU rules" },
  "MT": { standard: 0.2, reduced: [0.1, 0.05], superReduced: null, parking: null, notes: "check MT rules" },
  "NL": { standard: 0.2, reduced: [0.1, 0.05], superReduced: null, parking: null, notes: "check NL rules" },
  "PL": { standard: 0.2, reduced: [0.1, 0.05], superReduced: null, parking: null, notes: "check PL rules" },
  "PT": { standard: 0.2, reduced: [0.1, 0.05], superReduced: null, parking: null, notes: "check PT rules" },
  "RO": { standard: 0.2, reduced: [0.1, 0.05], superReduced: null, parking: null, notes: "check RO rules" },
  "SK": { standard: 0.2, reduced: [0.1, 0.05], superReduced: null, parking: null, notes: "check SK rules" },
  "SI": { standard: 0.2, reduced: [0.1, 0.05], superReduced: null, parking: null, notes: "check SI rules" },
  "ES": { standard: 0.2, reduced: [0.1, 0.05], superReduced: null, parking: null, notes: "check ES rules" },
  "SE": { standard: 0.2, reduced: [0.1, 0.05], superReduced: null, parking: null, notes: "check SE rules" },
};

export function vat_at(amount: any, kind: any): number {
  const r: any = RATES["AT"];
  const rate = kind === "reduced" ? r.reduced[0] : r.standard;
  return Math.round(amount * (1 + rate) * 100) / 100;
}

export function vat_be(amount: any, kind: any): number {
  const r: any = RATES["BE"];
  const rate = kind === "reduced" ? r.reduced[0] : r.standard;
  return Math.round(amount * (1 + rate) * 100) / 100;
}

export function vat_bg(amount: any, kind: any): number {
  const r: any = RATES["BG"];
  const rate = kind === "reduced" ? r.reduced[0] : r.standard;
  return Math.round(amount * (1 + rate) * 100) / 100;
}

export function vat_hr(amount: any, kind: any): number {
  const r: any = RATES["HR"];
  const rate = kind === "reduced" ? r.reduced[0] : r.standard;
  return Math.round(amount * (1 + rate) * 100) / 100;
}

export function vat_cy(amount: any, kind: any): number {
  const r: any = RATES["CY"];
  const rate = kind === "reduced" ? r.reduced[0] : r.standard;
  return Math.round(amount * (1 + rate) * 100) / 100;
}

export function vat_cz(amount: any, kind: any): number {
  const r: any = RATES["CZ"];
  const rate = kind === "reduced" ? r.reduced[0] : r.standard;
  return Math.round(amount * (1 + rate) * 100) / 100;
}

export function vat_dk(amount: any, kind: any): number {
  const r: any = RATES["DK"];
  const rate = kind === "reduced" ? r.reduced[0] : r.standard;
  return Math.round(amount * (1 + rate) * 100) / 100;
}

export function vat_ee(amount: any, kind: any): number {
  const r: any = RATES["EE"];
  const rate = kind === "reduced" ? r.reduced[0] : r.standard;
  return Math.round(amount * (1 + rate) * 100) / 100;
}

export function vat_fi(amount: any, kind: any): number {
  const r: any = RATES["FI"];
  const rate = kind === "reduced" ? r.reduced[0] : r.standard;
  return Math.round(amount * (1 + rate) * 100) / 100;
}

export function vat_fr(amount: any, kind: any): number {
  const r: any = RATES["FR"];
  const rate = kind === "reduced" ? r.reduced[0] : r.standard;
  return Math.round(amount * (1 + rate) * 100) / 100;
}

export function vat_de(amount: any, kind: any): number {
  const r: any = RATES["DE"];
  const rate = kind === "reduced" ? r.reduced[0] : r.standard;
  return Math.round(amount * (1 + rate) * 100) / 100;
}

export function vat_gr(amount: any, kind: any): number {
  const r: any = RATES["GR"];
  const rate = kind === "reduced" ? r.reduced[0] : r.standard;
  return Math.round(amount * (1 + rate) * 100) / 100;
}

export function vat_hu(amount: any, kind: any): number {
  const r: any = RATES["HU"];
  const rate = kind === "reduced" ? r.reduced[0] : r.standard;
  return Math.round(amount * (1 + rate) * 100) / 100;
}

export function vat_ie(amount: any, kind: any): number {
  const r: any = RATES["IE"];
  const rate = kind === "reduced" ? r.reduced[0] : r.standard;
  return Math.round(amount * (1 + rate) * 100) / 100;
}

export function vat_it(amount: any, kind: any): number {
  const r: any = RATES["IT"];
  const rate = kind === "reduced" ? r.reduced[0] : r.standard;
  return Math.round(amount * (1 + rate) * 100) / 100;
}

export function vat_lv(amount: any, kind: any): number {
  const r: any = RATES["LV"];
  const rate = kind === "reduced" ? r.reduced[0] : r.standard;
  return Math.round(amount * (1 + rate) * 100) / 100;
}

export function vat_lt(amount: any, kind: any): number {
  const r: any = RATES["LT"];
  const rate = kind === "reduced" ? r.reduced[0] : r.standard;
  return Math.round(amount * (1 + rate) * 100) / 100;
}

export function vat_lu(amount: any, kind: any): number {
  const r: any = RATES["LU"];
  const rate = kind === "reduced" ? r.reduced[0] : r.standard;
  return Math.round(amount * (1 + rate) * 100) / 100;
}

export function vat_mt(amount: any, kind: any): number {
  const r: any = RATES["MT"];
  const rate = kind === "reduced" ? r.reduced[0] : r.standard;
  return Math.round(amount * (1 + rate) * 100) / 100;
}

export function vat_nl(amount: any, kind: any): number {
  const r: any = RATES["NL"];
  const rate = kind === "reduced" ? r.reduced[0] : r.standard;
  return Math.round(amount * (1 + rate) * 100) / 100;
}

export function vat_pl(amount: any, kind: any): number {
  const r: any = RATES["PL"];
  const rate = kind === "reduced" ? r.reduced[0] : r.standard;
  return Math.round(amount * (1 + rate) * 100) / 100;
}

export function vat_pt(amount: any, kind: any): number {
  const r: any = RATES["PT"];
  const rate = kind === "reduced" ? r.reduced[0] : r.standard;
  return Math.round(amount * (1 + rate) * 100) / 100;
}

export function vat_ro(amount: any, kind: any): number {
  const r: any = RATES["RO"];
  const rate = kind === "reduced" ? r.reduced[0] : r.standard;
  return Math.round(amount * (1 + rate) * 100) / 100;
}

export function vat_sk(amount: any, kind: any): number {
  const r: any = RATES["SK"];
  const rate = kind === "reduced" ? r.reduced[0] : r.standard;
  return Math.round(amount * (1 + rate) * 100) / 100;
}

export function vat_si(amount: any, kind: any): number {
  const r: any = RATES["SI"];
  const rate = kind === "reduced" ? r.reduced[0] : r.standard;
  return Math.round(amount * (1 + rate) * 100) / 100;
}

export function vat_es(amount: any, kind: any): number {
  const r: any = RATES["ES"];
  const rate = kind === "reduced" ? r.reduced[0] : r.standard;
  return Math.round(amount * (1 + rate) * 100) / 100;
}

export function vat_se(amount: any, kind: any): number {
  const r: any = RATES["SE"];
  const rate = kind === "reduced" ? r.reduced[0] : r.standard;
  return Math.round(amount * (1 + rate) * 100) / 100;
}
