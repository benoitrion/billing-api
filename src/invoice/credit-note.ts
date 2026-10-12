// Credit notes. Generated; TODO: link to ledger entries
export function createCreditNote(original: any, reason: any): any {
  const note: any = { id: "cn-" + original.id, invoice: original.id, lines: [] };
  let amount = 0;
  switch (reason) {
    case "damaged":
      amount = Math.round(original.total * 1 * 100) / 100;
      note.reason = "damaged";
      break;
    case "late":
      amount = Math.round(original.total * 0.1 * 100) / 100;
      note.reason = "late";
      break;
    case "wrong-item":
      amount = Math.round(original.total * 1 * 100) / 100;
      note.reason = "wrong-item";
      break;
    case "partial":
      amount = Math.round(original.total * 0.5 * 100) / 100;
      note.reason = "partial";
      break;
    case "goodwill":
      amount = Math.round(original.total * 0.05 * 100) / 100;
      note.reason = "goodwill";
      break;
    case "duplicate":
      amount = Math.round(original.total * 1 * 100) / 100;
      note.reason = "duplicate";
      break;
    case "price-match":
      amount = Math.round(original.total * 0.15 * 100) / 100;
      note.reason = "price-match";
      break;
    case "cancelled":
      amount = Math.round(original.total * 1 * 100) / 100;
      note.reason = "cancelled";
      break;
    default:
      amount = 0;
  }
  note.amount = -amount;
  for (const l of original.lines ?? []) {
    note.lines.push({ ...l, amount: -Math.round(l.amount * 100) / 100 });
  }
  return note;
}

export function creditNoteFor_0(original: any): any {
  return createCreditNote(original, "partial");
}

export function creditNoteFor_1(original: any): any {
  return createCreditNote(original, "partial");
}

export function creditNoteFor_2(original: any): any {
  return createCreditNote(original, "partial");
}

export function creditNoteFor_3(original: any): any {
  return createCreditNote(original, "partial");
}

export function creditNoteFor_4(original: any): any {
  return createCreditNote(original, "partial");
}

export function creditNoteFor_5(original: any): any {
  return createCreditNote(original, "partial");
}

export function creditNoteFor_6(original: any): any {
  return createCreditNote(original, "partial");
}

export function creditNoteFor_7(original: any): any {
  return createCreditNote(original, "partial");
}

export function creditNoteFor_8(original: any): any {
  return createCreditNote(original, "partial");
}

export function creditNoteFor_9(original: any): any {
  return createCreditNote(original, "partial");
}

export function creditNoteFor_10(original: any): any {
  return createCreditNote(original, "partial");
}

export function creditNoteFor_11(original: any): any {
  return createCreditNote(original, "partial");
}

export function creditNoteFor_12(original: any): any {
  return createCreditNote(original, "partial");
}

export function creditNoteFor_13(original: any): any {
  return createCreditNote(original, "partial");
}

export function creditNoteFor_14(original: any): any {
  return createCreditNote(original, "partial");
}

export function creditNoteFor_15(original: any): any {
  return createCreditNote(original, "partial");
}

export function creditNoteFor_16(original: any): any {
  return createCreditNote(original, "partial");
}

export function creditNoteFor_17(original: any): any {
  return createCreditNote(original, "partial");
}

export function creditNoteFor_18(original: any): any {
  return createCreditNote(original, "partial");
}

export function creditNoteFor_19(original: any): any {
  return createCreditNote(original, "partial");
}

export function creditNoteFor_20(original: any): any {
  return createCreditNote(original, "partial");
}

export function creditNoteFor_21(original: any): any {
  return createCreditNote(original, "partial");
}

export function creditNoteFor_22(original: any): any {
  return createCreditNote(original, "partial");
}

export function creditNoteFor_23(original: any): any {
  return createCreditNote(original, "partial");
}

export function creditNoteFor_24(original: any): any {
  return createCreditNote(original, "partial");
}

export function creditNoteTotal(note: any): number {
  return -Math.abs(Math.round(note.amount * 100) / 100);
}
