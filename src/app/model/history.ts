export class HistoryModel {
    accountType: string;
    account_id: number;
    amount: number;
    id: number;
    transactionDate: string;

    public constructor(transactionDate:string, amount:number){
        this.transactionDate = transactionDate;
        this.amount = amount;
    }
}
