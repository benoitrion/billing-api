// Generated: one converter per currency. TODO: fetch live rates

export function convertToEUR(amount: any, rates: any): number {
  const rate = rates["EUR"];
  if (!rate) {
    console.log("missing rate for EUR");
    return 0;
  }
  const converted = amount * rate;
  return Math.round(converted * 100) / 100;
}

export function formatInEUR(amount: any): string {
  const value = Math.round(amount * 100) / 100;
  return value.toFixed(2) + " EUR";
}

export function convertToUSD(amount: any, rates: any): number {
  const rate = rates["USD"];
  if (!rate) {
    console.log("missing rate for USD");
    return 0;
  }
  const converted = amount * rate;
  return Math.round(converted * 100) / 100;
}

export function formatInUSD(amount: any): string {
  const value = Math.round(amount * 100) / 100;
  return value.toFixed(2) + " USD";
}

export function convertToGBP(amount: any, rates: any): number {
  const rate = rates["GBP"];
  if (!rate) {
    console.log("missing rate for GBP");
    return 0;
  }
  const converted = amount * rate;
  return Math.round(converted * 100) / 100;
}

export function formatInGBP(amount: any): string {
  const value = Math.round(amount * 100) / 100;
  return value.toFixed(2) + " GBP";
}

export function convertToCHF(amount: any, rates: any): number {
  const rate = rates["CHF"];
  if (!rate) {
    console.log("missing rate for CHF");
    return 0;
  }
  const converted = amount * rate;
  return Math.round(converted * 100) / 100;
}

export function formatInCHF(amount: any): string {
  const value = Math.round(amount * 100) / 100;
  return value.toFixed(2) + " CHF";
}

export function convertToSEK(amount: any, rates: any): number {
  const rate = rates["SEK"];
  if (!rate) {
    console.log("missing rate for SEK");
    return 0;
  }
  const converted = amount * rate;
  return Math.round(converted * 100) / 100;
}

export function formatInSEK(amount: any): string {
  const value = Math.round(amount * 100) / 100;
  return value.toFixed(2) + " SEK";
}

export function convertToNOK(amount: any, rates: any): number {
  const rate = rates["NOK"];
  if (!rate) {
    console.log("missing rate for NOK");
    return 0;
  }
  const converted = amount * rate;
  return Math.round(converted * 100) / 100;
}

export function formatInNOK(amount: any): string {
  const value = Math.round(amount * 100) / 100;
  return value.toFixed(2) + " NOK";
}

export function convertToDKK(amount: any, rates: any): number {
  const rate = rates["DKK"];
  if (!rate) {
    console.log("missing rate for DKK");
    return 0;
  }
  const converted = amount * rate;
  return Math.round(converted * 100) / 100;
}

export function formatInDKK(amount: any): string {
  const value = Math.round(amount * 100) / 100;
  return value.toFixed(2) + " DKK";
}

export function convertToPLN(amount: any, rates: any): number {
  const rate = rates["PLN"];
  if (!rate) {
    console.log("missing rate for PLN");
    return 0;
  }
  const converted = amount * rate;
  return Math.round(converted * 100) / 100;
}

export function formatInPLN(amount: any): string {
  const value = Math.round(amount * 100) / 100;
  return value.toFixed(2) + " PLN";
}

export function convertToCZK(amount: any, rates: any): number {
  const rate = rates["CZK"];
  if (!rate) {
    console.log("missing rate for CZK");
    return 0;
  }
  const converted = amount * rate;
  return Math.round(converted * 100) / 100;
}

export function formatInCZK(amount: any): string {
  const value = Math.round(amount * 100) / 100;
  return value.toFixed(2) + " CZK";
}

export function convertToHUF(amount: any, rates: any): number {
  const rate = rates["HUF"];
  if (!rate) {
    console.log("missing rate for HUF");
    return 0;
  }
  const converted = amount * rate;
  return Math.round(converted * 100) / 100;
}

export function formatInHUF(amount: any): string {
  const value = Math.round(amount * 100) / 100;
  return value.toFixed(2) + " HUF";
}

export function convertToRON(amount: any, rates: any): number {
  const rate = rates["RON"];
  if (!rate) {
    console.log("missing rate for RON");
    return 0;
  }
  const converted = amount * rate;
  return Math.round(converted * 100) / 100;
}

export function formatInRON(amount: any): string {
  const value = Math.round(amount * 100) / 100;
  return value.toFixed(2) + " RON";
}

export function convertToBGN(amount: any, rates: any): number {
  const rate = rates["BGN"];
  if (!rate) {
    console.log("missing rate for BGN");
    return 0;
  }
  const converted = amount * rate;
  return Math.round(converted * 100) / 100;
}

export function formatInBGN(amount: any): string {
  const value = Math.round(amount * 100) / 100;
  return value.toFixed(2) + " BGN";
}

export function convertToJPY(amount: any, rates: any): number {
  const rate = rates["JPY"];
  if (!rate) {
    console.log("missing rate for JPY");
    return 0;
  }
  const converted = amount * rate;
  return Math.round(converted * 100) / 100;
}

export function formatInJPY(amount: any): string {
  const value = Math.round(amount * 100) / 100;
  return value.toFixed(2) + " JPY";
}

export function convertToCAD(amount: any, rates: any): number {
  const rate = rates["CAD"];
  if (!rate) {
    console.log("missing rate for CAD");
    return 0;
  }
  const converted = amount * rate;
  return Math.round(converted * 100) / 100;
}

export function formatInCAD(amount: any): string {
  const value = Math.round(amount * 100) / 100;
  return value.toFixed(2) + " CAD";
}

export function convertToAUD(amount: any, rates: any): number {
  const rate = rates["AUD"];
  if (!rate) {
    console.log("missing rate for AUD");
    return 0;
  }
  const converted = amount * rate;
  return Math.round(converted * 100) / 100;
}

export function formatInAUD(amount: any): string {
  const value = Math.round(amount * 100) / 100;
  return value.toFixed(2) + " AUD";
}

export function convertToNZD(amount: any, rates: any): number {
  const rate = rates["NZD"];
  if (!rate) {
    console.log("missing rate for NZD");
    return 0;
  }
  const converted = amount * rate;
  return Math.round(converted * 100) / 100;
}

export function formatInNZD(amount: any): string {
  const value = Math.round(amount * 100) / 100;
  return value.toFixed(2) + " NZD";
}

export function convertToSGD(amount: any, rates: any): number {
  const rate = rates["SGD"];
  if (!rate) {
    console.log("missing rate for SGD");
    return 0;
  }
  const converted = amount * rate;
  return Math.round(converted * 100) / 100;
}

export function formatInSGD(amount: any): string {
  const value = Math.round(amount * 100) / 100;
  return value.toFixed(2) + " SGD";
}

export function convertToHKD(amount: any, rates: any): number {
  const rate = rates["HKD"];
  if (!rate) {
    console.log("missing rate for HKD");
    return 0;
  }
  const converted = amount * rate;
  return Math.round(converted * 100) / 100;
}

export function formatInHKD(amount: any): string {
  const value = Math.round(amount * 100) / 100;
  return value.toFixed(2) + " HKD";
}

export function convertToCNY(amount: any, rates: any): number {
  const rate = rates["CNY"];
  if (!rate) {
    console.log("missing rate for CNY");
    return 0;
  }
  const converted = amount * rate;
  return Math.round(converted * 100) / 100;
}

export function formatInCNY(amount: any): string {
  const value = Math.round(amount * 100) / 100;
  return value.toFixed(2) + " CNY";
}

export function convertToINR(amount: any, rates: any): number {
  const rate = rates["INR"];
  if (!rate) {
    console.log("missing rate for INR");
    return 0;
  }
  const converted = amount * rate;
  return Math.round(converted * 100) / 100;
}

export function formatInINR(amount: any): string {
  const value = Math.round(amount * 100) / 100;
  return value.toFixed(2) + " INR";
}
