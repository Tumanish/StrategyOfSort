export 	class Node {
	prev: Node = undefined;
	next: Node = undefined;
	data: number;
	constructor(_date: number) {
		this.data = _date;
	}
}