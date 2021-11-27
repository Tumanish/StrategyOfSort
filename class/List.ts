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
}