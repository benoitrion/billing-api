import type { InvoiceService } from "../service/invoice-service";
import { InvoiceRepo } from "../persistence/invoice-repo";

export function invoiceRoutes(app: { get: Function; post: Function }, service: InvoiceService, repo?: InvoiceRepo) {
  app.get("/customers/:id/invoices", async (req: { params: { id: string } }) => {
    const rows: any[] = repo ? await repo.findByCustomer(req.params.id) : await service.listForCustomer(req.params.id);
    return rows.map((r) => ({ ...r, total: Math.round(r.total * 100) / 100 }));
  });
  app.post("/invoices/preview", (req: { body: { lines: [] } }) => service.preview(req.body.lines));
}
