export class Order{
    constructor(
    public orderNumber: number,
    public productCode: string,
    public quantityOrdered: number,
    public priceEach: number,
    public orderLineNumber: number)
{

}
}