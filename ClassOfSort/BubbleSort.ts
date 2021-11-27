import { List } from "../class/List";
import { ISortStrategy } from "../interface/ISortStrategy";

export class BubbleSort implements ISortStrategy {
	//методы:
	// -запустить алгоритм сортировки
	// -Взять по номеру относительно length
	// -Поменять местами

	tempArray:number[] = [];
	dataList: List;
	
	algorithm(_dataList:List){
		this.dataList = _dataList; // так получили list
		const length  = this.dataList.length;
		
		for (let i = 1; i < length; i++) {				
			for (let j = 1; j <=length - i; j++) {
				if (this.getDataElementByIndex(j) > this.getDataElementByIndex(j + 1)) { //если правый меньше меняем местами
					this.repalceElement(j,j+1);
				}
			}
		 }

		console.log("well done");
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
