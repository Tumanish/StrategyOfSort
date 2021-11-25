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
			if(!this.isEmpty()){
				return this.head.data;
			}else{
				return 0;
			}
		};
		get_back() : number {
			if(!this.isEmpty()){
				return this.tail.data;
			}else{
				return 0;
				}
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
			console.log("");
			console.log("Head : ",this.dataArrayForSort.get_front());
			console.log("Tail : ",this.dataArrayForSort.get_back());
			console.log("Length = ", this.dataArrayForSort.getLength());
			console.log("");
		}
	}

	interface ISortStrategy {
		dataList:List;
		algorithm(DataList:List):void;
		getDataElementByIndex(index):number;
		repalceElement(index1,index2):void;
		setElementByIndex(index:number,newData:number):void;
	}

	class BubbleSort implements ISortStrategy {
		//методы:
		// -запустить алгоритм сортировки
		// -Взять по номеру относительно length
		// -Поменять местами

		tempArray:number[] = [];
		dataList: List;
		
		algorithm(_dataList:List){
			this.dataList = _dataList; // так получили list
			const length  = this.dataList.length;
			
			// //test Было
			// for(let i=1;i<=length;i++){
			// 	console.log(this.getDataElementByIndex(i));
			// }
			
			for (let i = 1; i < length; i++) {				
				for (let j = 1; j <=length - i; j++) {
					if (this.getDataElementByIndex(j) > this.getDataElementByIndex(j + 1)) { //если правый меньше меняем местами
						this.repalceElement(j,j+1);
					}
				}
 			}

			// //Стало
			//  console.log(" ");
			// for(let i=1;i<=length;i++){
			// 	console.log(this.getDataElementByIndex(i));
			// }
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

	function start(size: number): void {
		let generalObject = new General(new BubbleSort());	// кинем в конструктор тип сортировки, или поменяем в  методе setStrategy...
		generalObject.createDataRandomShuffleArray(size);	// генератор и перемешивание рандомного
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