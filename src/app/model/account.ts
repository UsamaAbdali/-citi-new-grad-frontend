import { HistoryModel } from './history';
import { Securities } from './Securities';

export class Account {
    
    id: number;
    amount: number;
    type: string;
    name: string;
    securitiesList: Securities[];
    historyList: HistoryModel[];

    constructor(id: number, amount: number, type: string, 
        name: string, securitiesList: Securities[], historyList: HistoryModel[]){
            this.id=id;
            this.amount=amount;
            this.type=type;
            this.name=name;
            this.securitiesList=securitiesList;
            this.securitiesList=securitiesList;
            this.historyList=historyList;
    }
}
