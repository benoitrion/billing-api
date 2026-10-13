import { InvoiceRepo } from "../persistence/invoice-repo";
import { lateFee } from "../payments/late-fees";

export function lateFeeRoutes(app: { get: Function }, repo: InvoiceRepo) {
  app.get("/customers/:id/late-fees", async (req: any) => {
    const rows: any[] = await repo.findByCustomer(req.params.id);
    return rows.map((r) => ({ id: r.id, fee: lateFee(r) }));
  });
}
