namespace MySortProject {

	class Node {
		prev: Node = undefined;
		next: Node = undefined;
		data: number;
		constructor(_date: number) {
			this.data = _date;
		}
	}

	class List {
		head: Node = null;
		tail: Node = null;
		length: number = 0;
		nodeCount: number = 0;

		constructor(DataArray?:number[] | 0) {
			if(DataArray){
				for(let i =0;i<DataArray.length;i++){
					this.add_back(DataArray[i]);
				}
				console.log("Создан class List, получив на вход тестовый массив"+"Размер: "+this.length);
			}else{
				console.log("Создан class List"+ "Размер: "+this.length);
			}
		}
		add_front(data: number): void {
			switch(this.length) { 
				case 0: {
					this.head = this.tail = new Node(data); 
					this.length++;
					break; 
				} 
				case 1: { 
					this.tail.prev = new Node(data);
					this.tail.prev.next = this.tail;
					this.head = this.tail.prev;
					this.length++;
					break; 
				} 
				default: {
					this.head.prev = new Node(data);
					this.head.prev.next = this.head;
					this.head = this.head.prev; 
					this.length++;
					break; 
				} 
			 } 
		};
		add_back(data: number):void {
			switch(this.length) { 
				case 0: {
					this.head = this.tail = new Node(data); 
					this.length++;
					break; 
				} 
				case 1: { 
					this.head.next = new Node(data);
					this.head.next.prev = this.head;
					this.tail = this.head.next;
					this.length++;
					break; 
				} 
				default: {
					this.tail.next = new Node(data);
					this.tail.next.prev = this.tail;
					this.tail = this.tail.next; 
					this.length++;
					break; 
				} 
			 }  
		};
		remove_front(): void {
			switch(this.length) { 
				case 1: { 
					this.head = this.tail = null;
					this.length--;
					break; 
				} 
				case 0: { 
				   console.log("List пустой, операция не удалась!"); 
				   break; 
				} 
				default: { 
					this.head.next.prev=null;
					this.head = this.head.next;
					this.length--;
					break; 
				} 
			 } 
			
		};
		remove_back(): void {
			switch(this.length) {
				case 1: {
					this.head = this.tail = null;
					this.length--;
					break;
				}
				case 0: {
					console.log("List пустой, операция не удалась!");
					break;
				}
				default: {
					this.tail.prev.next=null;
					this.tail = this.tail.prev;
					this.length--;
					break;
				}
			}
		};
		get_front() : number {
			return this.head.data;
		};
		get_back() : number {
			return this.tail.data;
		};
		clearList() :void {
			while(this.length){

				console.log("Удаляетя элемент с головы : "+ this.get_front() + " Размер List = "+ this.length );
				this.remove_front();
			}
		};
		getLength() : Number {
			return this.length;
		};
		isEmpty() : Boolean {
			if(this.length) {
				return false;
			}else{
				return true;
			};
		};
		print () : void {
			console.log("Размер массива: " , this.length);
		};
	}

	class General {
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
			this.dataArrayForSort.print();
		}
	}

	interface ISortStrategy {
		dataList:List;
		tempArray:number[];
		algorithm(DataList:List):void;
		getDataElementByIndex(index):number;
		repalceElement(index1,index2):void;
	}

	class BubbleSort implements ISortStrategy {
		
		/* From c++ :
		void BubbleSort(vector<int>& values) {
			for (size_t idx_i = 0; idx_i + 1 < values.size(); ++idx_i) {
				for (size_t idx_j = 0; idx_j + 1 < values.size() - idx_i; ++idx_j) {
					if (values[idx_j + 1] < values[idx_j]) {
						swap(values[idx_j], values[idx_j + 1]);
					}
				}
 			}
		}
		//методы:
		-запустить алгоритм сортировки
		-Взять по номеру относительно length
		-Поменять местами
		*/
		
		//Сюда пишем алгоритм, новые поля и методы которые будут использоваться если надо.
		tempArray:number[] = [];
		dataList: List;
		
		algorithm(_dataList:List){
				this.dataList = _dataList;
				this.dataList.clearList();
				// //test
			// for(let i = this.dataList.length; i > 0; i--){
			// 	console.log("Элемент номер "+ this.dataList.length + " "+ this.dataList.get_front());
			// 	this.dataList.remove_front();
			// }
			console.log("Алгоритм чего-то делает, затвра напишу. наверное");
		}
		getDataElementByIndex(index: any): number { //пока не работает
			this.dataList.length;
			let res = 0;
			for(let i = 1; i<=index;i++){
				console.log("this.dataList.length"+this.dataList.length);
				console.log(i);
			}
			for(let i =0;i<index;i++){
				this.dataList.add_front(this.tempArray.pop());
			}
			return res;
		}
		repalceElement(index1: any, index2: any): void { //пока не работает
			throw new Error("Method not implemented.");
		}
	}

	function start(): void {
		let generalObject = new General(new BubbleSort()); 		// кинем в конструктор тип сортировки, или поменяем в  setStrategy...
		generalObject.createDataRandomShuffleArray(10);		// генератор и перемешивание рандомного
		generalObject.createList();							// Создаст структуру, на основе сгенерированного массива, надо добавить проверку или совместить создание с генерацией
		generalObject.startSort();							// Старт сортировки на основе выбранного класса
		generalObject.print();								// чето-там в консоль
	}

	console.clear();
	start(); 												// запуск
}
//TO Do Сортировки с использованием методов List 
// Раскидать по отдельным файлам.
//Для временного хранения простой массив. или "стек"