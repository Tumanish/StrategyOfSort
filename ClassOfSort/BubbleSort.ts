import { List } from "../class/List";
import { ISortStrategy } from "../interface/ISortStrategy";

export class BubbleSort implements ISortStrategy {

	dataList: List;
	
	algorithm(_dataList:List){
		this.dataList = _dataList; // так получили list
		const length  = this.dataList.length;
		console.log("set Bubble Sort");
		for (let i = 1; i < length; i++) {				
			for (let j = 1; j <=length - i; j++) {
				if (this.dataList.getDataElementByIndex(j) > this.dataList.getDataElementByIndex(j + 1)) { //если правый меньше меняем местами
					this.dataList.repalceElement(j,j+1);
				}
			}
		 }
		console.log("well done");
	}
}
