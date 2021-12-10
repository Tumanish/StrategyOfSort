import { List} from "./List";
import { ISortStrategy } from "../interface/ISortStrategy";

export 	class General {
	tempArray: number[] =[]; // Просто рандомный массив
	dataArrayForSort: List;
	sortStrategy: ISortStrategy;

	constructor(strategy:ISortStrategy ) {
		this.sortStrategy = strategy;
	}
	createDataRandomShuffleArray(x:number): void {
		while(x){
		  this.tempArray.push(x);
		  x--;
		}
		this.tempArray=this.tempArray.sort(() => Math.random() - 0.5);
	}
	createList(): void {
		if(this.tempArray.length){
			this.dataArrayForSort = new List(this.tempArray);
		}
	}
	setSortStrategy(strategy:ISortStrategy): void{
		this.sortStrategy = strategy;
	}
	startSort(){

		//timer
		console.log("start",new Date(),"set ", this.sortStrategy.name);
		let start  = Date.now();
		
		this.sortStrategy.algorithm(this.dataArrayForSort);  // запустим алгоритм
		
		//timer
		let fin = Date.now();
		console.log("finish ", new Date());
		console.log( "SORT TIME : ",(fin - start)/1000," sec");
	}
	print(): void{
		console.log("--- >>> Head : ",this.dataArrayForSort.get_front());
		console.log("--- >>> Tail : ",this.dataArrayForSort.get_back());
		console.log("--- >>> Length = ", this.dataArrayForSort.getLength());
	}
}
