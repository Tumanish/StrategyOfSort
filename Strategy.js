var MySortProject;
(function (MySortProject) {
    var Node = /** @class */ (function () {
        function Node(_date) {
            this.prev = undefined;
            this.next = undefined;
            this.data = _date;
        }
        return Node;
    }());
    var List = /** @class */ (function () {
        function List(DataArray) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            this.nodeCount = 0;
            if (DataArray) {
                for (var i = 0; i < DataArray.length; i++) {
                    this.add_back(DataArray[i]);
                }
                console.log("Создан class List, получив на вход тестовый массив" + "Размер: " + this.length);
            }
            else {
                console.log("Создан class List" + "Размер: " + this.length);
            }
        }
        List.prototype.add_front = function (data) {
            switch (this.length) {
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
        ;
        List.prototype.add_back = function (data) {
            switch (this.length) {
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
        ;
        List.prototype.remove_front = function () {
            switch (this.length) {
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
                    this.head.next.prev = null;
                    this.head = this.head.next;
                    this.length--;
                    break;
                }
            }
        };
        ;
        List.prototype.remove_back = function () {
            switch (this.length) {
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
                    this.tail.prev.next = null;
                    this.tail = this.tail.prev;
                    this.length--;
                    break;
                }
            }
        };
        ;
        List.prototype.get_front = function () {
            return this.head.data;
        };
        ;
        List.prototype.get_back = function () {
            return this.tail.data;
        };
        ;
        List.prototype.clearList = function () {
            while (this.length) {
                console.log("Удаляетя элемент с головы : " + this.get_front() + " Размер List = " + this.length);
                this.remove_front();
            }
        };
        ;
        List.prototype.getLength = function () {
            return this.length;
        };
        ;
        List.prototype.isEmpty = function () {
            if (this.length) {
                return false;
            }
            else {
                return true;
            }
            ;
        };
        ;
        List.prototype.print = function () {
            console.log("Размер массива: ", this.length);
        };
        ;
        return List;
    }());
    var General = /** @class */ (function () {
        function General(strategy) {
            this.tempArray = []; // Просто рандомный массив
            this.sortStrategy = strategy;
        }
        General.prototype.createDataRandomShuffleArray = function (x) {
            while (x) {
                this.tempArray.push(x);
                x--;
            }
            this.tempArray = this.tempArray.sort(function () { return Math.random() - 0.5; });
            // console.log("Создан тестовый массив");
        };
        General.prototype.createList = function () {
            if (this.tempArray.length) {
                this.dataArrayForSort = new List(this.tempArray);
            }
        };
        General.prototype.setSortStrategy = function (strategy) {
            this.sortStrategy = strategy;
        };
        General.prototype.startSort = function () {
            this.sortStrategy.algorithm(this.dataArrayForSort); // запустим алгоритм
        };
        General.prototype.print = function () {
            this.dataArrayForSort.print();
        };
        return General;
    }());
    var BubbleSort = /** @class */ (function () {
        function BubbleSort() {
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
            this.tempArray = [];
        }
        BubbleSort.prototype.algorithm = function (_dataList) {
            this.dataList = _dataList;
            this.dataList.clearList();
            // //test
            // for(let i = this.dataList.length; i > 0; i--){
            // 	console.log("Элемент номер "+ this.dataList.length + " "+ this.dataList.get_front());
            // 	this.dataList.remove_front();
            // }
            console.log("Алгоритм чего-то делает, затвра напишу. наверное");
        };
        BubbleSort.prototype.getDataElementByIndex = function (index) {
            this.dataList.length;
            var res = 0;
            for (var i = 1; i <= index; i++) {
                console.log("this.dataList.length" + this.dataList.length);
                console.log(i);
            }
            for (var i = 0; i < index; i++) {
                this.dataList.add_front(this.tempArray.pop());
            }
            return res;
        };
        BubbleSort.prototype.repalceElement = function (index1, index2) {
            throw new Error("Method not implemented.");
        };
        return BubbleSort;
    }());
    function start() {
        var generalObject = new General(new BubbleSort()); // кинем в конструктор тип сортировки, или поменяем в  setStrategy...
        generalObject.createDataRandomShuffleArray(10); // генератор и перемешивание рандомного
        generalObject.createList(); // Создаст структуру, на основе сгенерированного массива, надо добавить проверку или совместить создание с генерацией
        generalObject.startSort(); // Старт сортировки на основе выбранного класса
        generalObject.print(); // чето-там в консоль
    }
    console.clear();
    start(); // запуск
})(MySortProject || (MySortProject = {}));
//TO Do Сортировки с использованием методов List 
// Раскидать по отдельным файлам.
//Для временного хранения простой массив. или "стек"
