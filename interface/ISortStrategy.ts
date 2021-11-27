import { List } from "../Class/List";

export interface ISortStrategy {

	dataList:List;
	algorithm(DataList:List):void;

}