import { List } from "../class/List";
import { ISortStrategy } from "../interface/ISortStrategy";

export 	class SelectionSort implements ISortStrategy {
	
	dataList:List;
	name: string = "Selection Sort";

	algorithm(_dataList:List){
		this.dataList = _dataList;
		const length  = _dataList.getLength();
		
		for (let i = 1; i <length ; i++){
			let min = this.findMinElement(i,length);
			this.dataList.repalceElement(i,min);
		}
	}
	findMinElement(index,length){
		let min = index;
		for(let i = index+1; i<=length;i++){
			if(this.dataList.getDataElementByIndex(min)>this.dataList.getDataElementByIndex(i)){
				min = i;
			}
		}
		return min;
	}
}