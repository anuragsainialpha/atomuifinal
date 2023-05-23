export class InvoiceData {
    stoSoNum: string;
    itemId: string;
    itemDesc: string;
    souceLoc: string;
    destLoc: string;
    loadslipQty: number;
    invoiceQty: number;
    grnQty: number;
    ditQty: number;
    shotQty: number
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
  }
  