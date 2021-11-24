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
				console.log("Создан class List, получив на вход массив");
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
		tempArray: number[] =[];
		StaticTempArray: number[] =[];
		
		createSortDataRandomShuffleArray(x): void {
			while(x){
			  this.tempArray.push(x);
			  x--;
			}
			this.tempArray=this.tempArray.sort(() => Math.random() - 0.5);
		console.log("Создан тестовый массив: "+this.tempArray);
		}

		createStaticRandomShuffleArray(x):void {
			for(let i = 0; i < x; i++){
				console.log(x); //Поправить на какую-нибудь формулу
			}
		}

		createList(size?:number): void {

		}

	}
	function start(): void {
		let gen = new General();
		gen.createSortDataRandomShuffleArray(10); // генератор и перемешивание рандомного
		let bigData = new List(gen.tempArray); //Лист с массивом
		// let bigData1 = new List(); //Пустой лист
	}

	console.clear();
	start();
}


