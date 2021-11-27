import { List } from "../class/List";
import { ISortStrategy } from "../interface/ISortStrategy";

export 	class SelectionSort implements ISortStrategy{
	dataList:List;
	tempArray:number[] = [];
	
	algorithm(_dataList:List){
		this.dataList = _dataList;
		const length  = _dataList.getLength();

		for (let i = 1; i <length ; i++){
			let min = this.findMinElement(i,length);
			this.repalceElement(i,min);
		}
	}
	findMinElement(index,length){
		let min = index;
		for(let i = index+1; i<=length;i++){
			if(this.getDataElementByIndex(min)>this.getDataElementByIndex(i)){
				min = i;
			}
		}
		return min;
	}
	getDataElementByIndex(index: any): number {
		let res = 0;
		this.tempArray = [];
		//to do разобрать до i
		for(let i = 1; i<=index+1;i++){
			if(i==index){
				res = this.dataList.get_front();
			}else{
			this.tempArray.push(this.dataList.get_front());	// пушим головной эллемент
			this.dataList.remove_front();					// Удаляем готовной элемент
			}
		}
		
		//to do Собрать обратно до i
		for(let i =1;i<=index;i++){
			this.dataList.add_front(this.tempArray.pop());
		}
		return res;
	}
	repalceElement(index1: any, index2: any): void {
		let data1:number;
		let data2:number;
		//сохраняем оригинал
		data1 = this.getDataElementByIndex(index1);
		data2 = this.getDataElementByIndex(index2);
		//меняем местами
		this.setElementByIndex(index1,data2);
		this.setElementByIndex(index2,data1);
	}
	setElementByIndex(index:number,newData:number){
		this.tempArray = [];
		//разобрать лист до элемента и поменять на новый
		for(let i = 1; i<=index;i++){
			if(i==index){
				this.dataList.remove_front();
			}else{
			this.tempArray.push(this.dataList.get_front());	// пушим головной эллемент
			this.dataList.remove_front();					// Удаляем готовной элемент
			}
		}
		//собрать обратно
		this.dataList.add_front(newData);
		for(let i = 1; i < index; i++){
			this.dataList.add_front(this.tempArray.pop());
		}
	}
}
