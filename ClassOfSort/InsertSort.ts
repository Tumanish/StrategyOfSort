import {ISortStrategy} from "../interface/ISortStrategy";
import {List} from "../class/List";

export class InsertSort implements ISortStrategy{
    dataList: List;
    algorithm(_datalist: List) {
        this.dataList = _datalist;
        const size = this.dataList.getLength();
        // for (let i = 1; i < array.length; ++i) {
        //     let x = array[i];//2
        //     let j = i;//4
        //     while (j > 0 && array[j - 1] > x) {
        //         array[j] = array[j - 1];
        //         //j = 4 [1,3,8,9,9,4,5,6,7,0];
        //         //j = 3 [1,3,8,8,9,4,5,6,7,0];
        //         //j = 2 [1,3,3,8,9,4,5,6,7,0];
        //         //j = 1 [1,2,3,8,9,4,5,6,7,0];
        //         --j;
        //     }
        //     array[j] = x;
        // }
        for (let i = 2; i < size; ++i) {
            let x = this.dataList.getDataElementByIndex(i);
            console.log(x);
            let j = i;
            while (j > 0 && this.dataList.getDataElementByIndex(j - 1) > x) {
                const _j = this.dataList.getDataElementByIndex(j - 1)
                this.dataList.setElementByIndex(j, _j);
                --j;
            }
            this.dataList.setElementByIndex(j, x);
        }
    }
}
