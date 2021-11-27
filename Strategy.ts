import { SelectionSort } from "./ClassOfSort/SelectionSort";
import { BubbleSort } from "./ClassOfSort/BubbleSort";

import { General } from "./class/General";

namespace MySortProject {





	function start(size: number): void {
		let generalObject = new General(new SelectionSort());	// кинем в конструктор тип сортировки, или поменяем в  методе setStrategy...
		generalObject.createDataRandomShuffleArray(size);		// генератор и перемешивание рандомного
		generalObject.createList();							// Создаст структуру, на основе сгенерированного массива, надо добавить проверку или совместить создание с генерацией
		generalObject.print();

		console.log("start");
		console.log(new Date());
		let start  = new Date().getSeconds();
		
		generalObject.startSort();							// Старт сортировки на основе выбранного класса
		let fin = new Date().getSeconds();
		console.log(new Date());
		console.log("finish ", fin - start," sec");
		generalObject.print();								// чето-там в консоль
		
	}

	console.clear();
	start(500); 											// запуск
}
// TO Do Сортировки с использованием методов List 
// Раскидать по отдельным файлам.
// Для временного хранения простой массив. или "стек"


