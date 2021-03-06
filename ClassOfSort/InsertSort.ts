import { List } from "../class/List";
import { ISortStrategy } from "../interface/ISortStrategy";

export class InsertSort implements ISortStrategy{

    dataList: List;
    name:string = "Insert Sort";
	
    algorithm(_datalist: List) {
        this.dataList = _datalist;
        const size = this.dataList.getLength();
        for (let i = 2; i <= size; ++i) {
            let x = this.dataList.getDataElementByIndex(i);
            let j = i;
            while (j > 1 && this.dataList.getDataElementByIndex(j - 1) > x) {
                let _j = this.dataList.getDataElementByIndex(j - 1)
                this.dataList.setElementByIndex(j, _j);
                --j;
            }
            this.dataList.setElementByIndex(j, x);
        }
    }
}