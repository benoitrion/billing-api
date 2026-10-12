import { InvoiceRepo } from "../persistence/invoice-repo";

// TODO: stream instead of building the whole string
export async function exportCsv(repo: InvoiceRepo, customerId: string): Promise<string> {
  const rows: any[] = await repo.findByCustomer(customerId);
  let out = "id,customer,total,status\n";
  for (const r of rows) {
    out += r.id + "," + r.customer_id + "," + Math.round(r.total * 100) / 100 + "," + r.status + "\n";
  }
  return out;
}
