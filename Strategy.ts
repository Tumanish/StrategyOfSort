import { General } from "./class/General";

import { SelectionSort } from "./ClassOfSort/SelectionSort";
import { BubbleSort } from "./ClassOfSort/BubbleSort"; // TO DO добавить массив названий сортировок ( и в интерфейс строку с названием сортировки) в general и тула заимпортить
import { InsertSort } from "./ClassOfSort/InsertSort";

function start(size: number): void {

	let generalObject = new General(new SelectionSort()); 	// Select type of sort
	
	// let generalObject = new General(new InsertSort());
	// let generalObject = new General(new BubbleSort());	
	// generalObject.setSortStrategy(new BubbleSort());		//  or set sort 

	generalObject.createDataRandomShuffleArray(size);		// random  start Array // можно запихнуть в конструктор и добавить сортировку по умолчанию

	generalObject.createList();								//Create new List by start Array
	generalObject.print();
	generalObject.setSortStrategy(new SelectionSort());
	generalObject.startSort();								// Start
	generalObject.print();
	generalObject.dataArrayForSort.clearList();

	console.log(" ");
	console.log(" *** ");
	console.log(" ");

	generalObject.createList();	
	generalObject.print();
	generalObject.setSortStrategy(new BubbleSort());
	generalObject.startSort();
	generalObject.print();
	generalObject.dataArrayForSort.clearList();

	console.log(" ");
	console.log(" *** ");
	console.log(" ");

	generalObject.createList();	
	generalObject.print();
	generalObject.setSortStrategy(new InsertSort());
	generalObject.startSort();
	generalObject.print();
	generalObject.dataArrayForSort.clearList();

	
	console.log(" ");
	console.log(" *** ");
	console.log(" ");
}
	console.clear();
	start(1000); 												// запуск

// TO Do Сортировки с использованием методов List
// названи сортировок, убрать консол логи и оставить одну строку для проверки

// Уваковать всю дич в класс General

