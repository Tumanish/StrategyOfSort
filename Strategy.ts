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
				console.log("Создан class List, получив на вход тестовый массив");
				console.log("Размер: "+this.length);
			}else{
				console.log("Создан class List");
				console.log("Размер: "+this.length);
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
				   this.clearList();
					break; 
				} 
				case 0: { 
				   console.log("List пустой, операция не удалась!"); 
				   break; 
				} 
				default: { 
					this.head = this.head.next;
					this.length--;
					break; 
				} 
			 } 
			
		};
		remove_back(): void {
			switch(this.length) {
				case 1: {
					this.clearList();
					break;
				}
				case 0: {
					console.log("List пустой, операция не удалась!");
					break;
				}
				default: {
					this.tail = this.tail.prev;
					this.length--;
					break;
				}
			}
		};
		get_front() : Node {
			return this.head;
		};
		get_back() : Node {
			return this.tail;
		};
		clearList() :void {
			this.head = null;
			this.tail = null;
			console.log("Все данные удалены из List");
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
		createDataRandomShuffleArray(x): void {
			while(x){
			  this.tempArray.push(x);
			  x--;
			}
			this.tempArray=this.tempArray.sort(() => Math.random() - 0.5);
		console.log("Создан тестовый массив");
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
			this.sortStrategy.algorithm(); // запустим алгоритм
		}
		print(): void{
			this.dataArrayForSort.print();
		}
	}

	interface ISortStrategy {
		algorithm():void;
	}

	class Sort1 implements ISortStrategy {
		algorithm(){
			console.log("Алгоритм чего-то делает, затвра напишу. наверное");
		}
	}

	function start(): void {
		let generalObject = new General(new Sort1); 		// кинем в конструктор тип сортировки, или поменяем в  setStrategy...
		generalObject.createDataRandomShuffleArray(100);	// генератор и перемешивание рандомного
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