import { InvoiceRepo } from "../persistence/invoice-repo";
import { invoiceTotal, Line } from "../invoice/total";
import { applyDiscount } from "../pricing/discounts";

export class InvoiceService {
  constructor(private repo: InvoiceRepo) {}

  listForCustomer(customerId: string) {
    return this.repo.findByCustomer(customerId);
  }

  discounted(order: any) {
    return { total: applyDiscount(order) };
  }

  preview(lines: Line[]) {
    return { total: invoiceTotal(lines) };
  }
}
