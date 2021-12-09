import {ISortStrategy} from "../interface/ISortStrategy";
import {List} from "../class/List";

export class InsertSort implements ISortStrategy{
    dataList: List;
    algorithm() {
        const size = this.dataList.length;
        for (let i = 1; i < size; ++i) {
            let x = this.dataList[i];
            let j = i;//4
            while (j > 0 && this.dataList[j - 1] > x) {
                this.dataList[j] = this.dataList[j - 1];
                --j;
            }
            this.dataList[j] = x;
        }
    }
}
