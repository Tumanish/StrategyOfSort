import { List } from "../Class/List";
export interface ISortStrategy {
	dataList:List;
	algorithm(DataList:List):void;
	getDataElementByIndex(index):number;
	repalceElement(index1,index2):void;
	setElementByIndex(index:number,newData:number):void;
}