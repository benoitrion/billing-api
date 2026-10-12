import * as currency from "../invoice/currency";

export class CurrencyService {
  convert(amount: any, to: string, rates: any): any {
    const fn: any = (currency as any)["convertTo" + to];
    return fn ? fn(amount, rates) : amount;
  }
}
