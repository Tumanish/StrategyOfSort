import { List} from "./List";
import { ISortStrategy } from "../interface/ISortStrategy";

export 	class General {
	tempArray: number[] =[]; // Просто рандомный массив
	dataArrayForSort:List;
	sortStrategy : ISortStrategy;
	
	constructor(strategy:ISortStrategy ) {
		this.sortStrategy = strategy;	
	}
	createDataRandomShuffleArray(x:number): void {
		while(x){
		  this.tempArray.push(x);
		  x--;
		}
		this.tempArray=this.tempArray.sort(() => Math.random() - 0.5);
	// console.log("Создан тестовый массив");
	}
	createList(): void {
		if(this.tempArray.length){
			this.dataArrayForSort = new List(this.tempArray);
		}
	}
	setSortStrategy(strategy:ISortStrategy):void{
		this.sortStrategy = strategy;
	}
	startSort(){
		this.sortStrategy.algorithm(this.dataArrayForSort);  // запустим алгоритм
	}
	print(): void{
		console.log(" ");
		console.log("Head : ",this.dataArrayForSort.get_front());
		console.log("Tail : ",this.dataArrayForSort.get_back());
		console.log("Length = ", this.dataArrayForSort.getLength());
		console.log(" ");
	}
}