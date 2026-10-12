import { InvoiceRepo } from "../persistence/invoice-repo";

// TODO: make the schedule configurable
const DAYS = [7, 14, 30, 45, 60];

export async function sendReminders(repo: InvoiceRepo, customers: string[], send: (to: string, text: string) => Promise<void>) {
  for (const c of customers) {
    try {
      const invoices: any[] = await repo.findByCustomer(c);
      for (const inv of invoices) {
        if (inv.status !== "open") continue;
        const age = Math.floor((Date.now() - new Date(inv.issued_at).getTime()) / 86400000);
        for (const d of DAYS) {
          if (age === d) {
            const amount = Math.round(inv.total * 100) / 100;
            console.log("sending reminder", c, inv.id, amount);
            await send(c, `Invoice ${inv.id} for ${amount} EUR is ${d} days overdue.`);
          }
        }
      }
    } catch (e) {
      // ignore
    }
  }
}
