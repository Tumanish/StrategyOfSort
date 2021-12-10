import { SelectionSort } from "./ClassOfSort/SelectionSort";
import { BubbleSort } from "./ClassOfSort/BubbleSort"; // TO DO добавить массив названий в general и тула заимпортить

import { General } from "./class/General";
import {InsertSort} from "./ClassOfSort/InsertSort";



function start(size: number): void {
	let generalObject = new General(new SelectionSort());
	//let generalObject = new General(new InsertSort());	// кинем в конструктор тип сортировки, или поменяем в  методе setStrategy...
	// let generalObject = new General(new BubbleSort());	// кинем в конструктор тип сортировки, или поменяем в  методе setStrategy...
	generalObject.createDataRandomShuffleArray(size);		// генератор и перемешивание рандомного
	generalObject.createList();								// Создаст структуру, на основе сгенерированного массива, надо добавить проверку или совместить создание с генерацией
	generalObject.print();
	generalObject.startSort();								// Start
	generalObject.print();
}
	console.clear();
	start(100); 												// запуск

// TO Do Сортировки с использованием методов List
// Для временного хранения простой массив. или "стек"


