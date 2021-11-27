import { Node} from "./Node";
export 	class List {
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
	getDataElementByIndex(index: any): number {
		let res = 0;
		let tempArray = [];
		//to do разобрать до i
		for(let i = 1; i<=index+1;i++){
			if(i==index){
				res = this.get_front();
			}else{
			tempArray.push(this.get_front());	// пушим головной эллемент
			this.remove_front();					// Удаляем готовной элемент
			}
		}
		
		//to do Собрать обратно до i
		for(let i =1;i<=index;i++){
			this.add_front(tempArray.pop());
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
		let tempArray = [];
		//разобрать лист до элемента и поменять на новый
		for(let i = 1; i<=index;i++){
			if(i==index){
				this.remove_front();
			}else{
			tempArray.push(this.get_front());	// пушим головной эллемент
			this.remove_front();					// Удаляем готовной элемент
			}
		}
		//собрать обратно
		this.add_front(newData);
		for(let i = 1; i < index; i++){
			this.add_front(tempArray.pop());
		}
	}
}