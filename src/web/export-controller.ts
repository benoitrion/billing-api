import { exportCsv } from "../export/csv";
import { InvoiceRepo } from "../persistence/invoice-repo";

export function exportRoutes(app: { get: Function }, repo: InvoiceRepo) {
  app.get("/customers/:id/export.csv", (req: any) => exportCsv(repo, req.params.id));
}
