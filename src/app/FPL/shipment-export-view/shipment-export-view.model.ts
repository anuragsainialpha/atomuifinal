// export class Array{
//     public description:string;
//     public value:string;
// }

export class exportShippingModel {
    public shipmentId: string;
    public pol: string;
    public pod: string;
    public containerNum: string;
    public customerName: string;
    public forwarder: string;
    public cha: string;
    public piNum: string;
    public sapInvoice: string;
    public bookingNum: string;
    public sourceLoc: string;
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}