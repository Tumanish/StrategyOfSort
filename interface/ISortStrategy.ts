import { List } from "../Class/List";

export interface ISortStrategy {

	dataList:List;
	name:string;
	algorithm(DataList:List):void;

}