// Array.prototype.customConcat = function(element){
//     switch (true) {
//         case (!(element instanceof Array)):
//             let thisLength = this.length;
//             this[thisLength] = element;
//             break;
//         case element instanceof Array:
//             let arrLength = this.length;
//             element.forEach((item,ind) => {
//                 this[arrLength + ind] = item;
//             });
//             break;
//     }
//     return this;
// }
// // the best way
// // Array.prototype.customConcat = function(v) {
// //     return Array.isArray(v)
// //         ? [ ...this, ...v ]
// //         : [ ...this, v ]
// // };
//     console.log([2,4,6,8,10].customConcat(5));
//     console.log([1, 2, 3].customConcat([[4, 5, 6], 7]));
//     console.log([{ one: 1, two: 2, three: 3 }].customConcat({ four: 4, five: 5, six: 6 }));
//
//     function cardCreate() {
//         let buildDeck = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']
//             .map(item => [`${item} of hearts`, `${item} of spades`, `${item} of diamonds`, `${item} of clubs`])
//             .join()
//             .split(',');
//         console.log('buildDeck', buildDeck)
// }
//     cardCreate();
// let Foo = function() {
//     this.test = "test"
// };
// let addStaticMethod = function(clss, name, method) {
//     clss[name] = clss.prototype[name] = method.bind(clss); // Foo[name] - статический, инстансы не видят его, Foo.prototype[name] - for all instances
//     console.log(clss[name](), new clss()[name]());
// };
// addStaticMethod(Foo, 'foo', function() {
//     console.log("this", this);
//     return 'foo'; // this нет. можно не биндить
// })
// ////////////////////////////////
// class HallOfFame{
//     constructor(size = 5, players = []){
//         this.size = size;
//         this.players = players;
//     }
//
//     get list(){
//         let sorted = this.sort(this.players);
//         let cutArr = new Array(this.size);
//
//         for(let i = 0; i< this.size; i++) {
//             cutArr[i] = sorted[i] ? `${sorted[i][0]}: ${sorted[i][1]}` : '';
//         }
//         console.log("list", cutArr);
//         return cutArr;
//     }
//
//     sort(arr) {
//         let sortedPlayers = arr.sort(function (a,b) {
//             switch (true) {
//                 case +b[1] !== +a[1]:
//                     return +b[1] - +a[1];
//                 case +b[1] === +a[1]:
//                     return a[0].localeCompare(b[0]);
//                 // return (a[0].toLowerCase() < b[0].toLowerCase()) ? -1 : (a[0].toLowerCase() > b[0].toLowerCase()) ? 1 : 0;
//             }
//         });
//         return sortedPlayers;
//     }
//
//
//     add( player ){
//         this.players.push(player);
//         return this;
//     }
//
// }
//
// let top3 = new HallOfFame(3);
//
//     top3.list; //["Clo: 101", "Ada: 99", "Bob: 42"] // -- only 3 players kept 'cause size of the Hall is 3
//
//     top3.add(["Dan",54]);
//     top3.list; // ["Clo: 101", "Ada: 99", "Dan: 54"]
//
//     top3.add(["Eva",75]).add(["Fox",120]).list; //["Fox: 120","Clo: 101","Ada: 99"]
//
// ///////////////////////////////////////////////
// // Дед попугай с двумя лапами
// let ParrotGrandfather = function() {};
// ParrotGrandfather.prototype = {
//     species: 'Parrot',
//     paws: 2
// };
//
// // Отец попугай унаследовал всё у деда
// let ParrotFather = function() {};
// ParrotFather.prototype = Object.create(ParrotGrandfather.prototype);
//
// // Сын попугай унаследовал всё у отца
// let ParrotSon = function() {};
// ParrotSon.prototype = Object.create(ParrotFather.prototype);
//
// let grandfather = new ParrotGrandfather();
// let father = new ParrotFather()
// let son = new ParrotSon();
//
// console.log('parot', grandfather.species, father.species, son.species);
// // Parrot Parrot Parrot - все попугаи!
// console.log(grandfather.paws, father.paws, son.paws);
// // 2 2 2 - у каждого по 2 лапы
//
// // Дед меняет количество лап
// ParrotGrandfather.prototype.paws++;
// console.log('paws', grandfather.paws, father.paws, son.paws);
// // 3 3 3 - у каждого теперь по 3 лапы
//
// // Отец меняет вид
// ParrotFather.prototype.species = 'eagle'; // отец меняет свойство, поэтому уже на ласточку не будет реагировать
// console.log('eagle', grandfather.species, father.species, son.species);
// // Parrot eagle eagle - дед остался попугаем, отец и сын стали орлами
//
// // Сын уменьшил количество лап
// ParrotSon.prototype.paws--;
// console.log('son - paw', grandfather.paws, father.paws, son.paws);
// // 3 3 2 - дед и отец остались при своих трёх лапах
//
// // Дед решил стать чайкой
// ParrotGrandfather.prototype.species = 'seagull';
// console.log('seagull', grandfather.species, father.species, son.species);
// // seagull eagle eagle - дед чайка, отец и сын орлы
//
// //
// function Rabbit(name) {
//     this.name = name;
//     this.speed = 0;
// }
//
// let rabbit = new Rabbit('Кроль');
// console.log('Rabbit', rabbit);
//
// ////////////////////////
// Array.prototype.toString1 = function(){
//     console.log('this', this);
//     let str = '';
//
//     this.forEach(item => {
//         console.log('item', item, Array.isArray(item));
//         if(Array.isArray(item)){
//             console.log('арр1', item);
//             str += Array.prototype.toString1.call(item)
//         } else if(item === ''){
//             console.log('not !!!!', item);
//             str = str + item + '*';
//         }
//     });
//     str = '[' + str + ']';
//     console.log('str', str);
//     return str;
// }
//
// let letterToEllie = {'weight': 0.004536};
// let house = {'weight': 45000};
// let pushCart = {'weight': 95};
// let lawnChair = {'weight': 5};
//
// function Journey(object, crew, balloons) {
//     this.isPossible = function(){
//         let ans = balloons*4.8/1000 - object.weight - crew*80
//         console.log('answer1', ans);
//     }
// }
// let flyingCart = new Journey(pushCart, 0, 500);
// let loveOfMyLife = new Journey(letterToEllie, 0, 1);
// let gravityFalls = new Journey(house, 2, 20622);
// flyingCart.isPossible();
// loveOfMyLife.isPossible();
// gravityFalls.isPossible();
// /////////////////////////////////////////
// let integersList = [-18, -31, 81, -19, 111, -888];
// let digitsList = [1, 8, 4];
// function List(){
//     this.countSpecDigits = function(integersList, digitsList){
//        let result = [];
//        digitsList.forEach(item => {
//            let filtered = integersList.map( i => Math.abs(i)).join().split('').filter(elem => {
//                return elem.toString().indexOf(item)>=0;
//            });
//            result.push([item, filtered.length]);
//        });
//         return result;
//     }
// }
// let l = new List();
// l.countSpecDigits(integersList, digitsList);
// ///////////////
//
// function work1(a) {
//     console.log(`Argument is ${a}`);
// }
//
// function makeLogging(f, log) {
//     return function () {
//       log.push([].slice.call(arguments));
//       f.apply(this, arguments);
//     }
// }
//
// let log = [];
// work1 = makeLogging(work1, log);
// work1(3,9);
// work1(4);
// work1(5);
// console.log(log);
//
// /////////////////////
// function work2(a, b) {
//     console.log("a", a, b);
//   return a*b;
// }
//
// function makeCache(f, cache) {
//   return function () {
//     let arg = [].slice.call(arguments)[0];
//     let keys = Object.keys(cache);
//
//     if( keys.indexOf(arg.toString()) > -1){
//       return cache[arg]
//     }
//     console.log("ab", arguments);
//     let res = f.call(this, ...arguments);
//     cache[arg]= res;
//     return res;
//   }
// }
//
// let cacheObj = {};
// work2 = makeCache(work2.bind(null, 2), cacheObj);
// work2(3);
// work2(3);
// work2(5);
// console.log('Obj', cacheObj);
//
//
// let z;
// for(let z=0; z<10; z++){
//     console.log('z', z);
// }
// console.log('z', z);

let questions = [];
let score = 0;
function Question(question, correct, variant1, variant2) {
  this.question = question;
  this.correctAnswer = correct;
  this.var = [variant1, variant2];
}

Question.prototype.compare = function (num) {
  if (this.correctAnswer === this.var[num]) {
    score++;
    return 'correct';
  }
  return 'wrong';
};

let quest1 = new Question('What is JS?', 'Language', 'Language', 'Fashion label');
let quest2 = new Question('What is OOP?', 'Object-oriented programming', 'Organization', 'Object-oriented programming');
let quest3 = new Question('Number is primitive or object?', 'Primitive', 'Primitive', 'Object');
questions.push(quest1, quest2, quest3);

function getQuestion() {
    let index = Math.round(Math.random()*(questions.length - 1));
    console.log(questions[index].question);
    console.log('0: ', questions[index].var[0]);
    console.log('1: ', questions[index].var[1]);

    let answer;
    do {
      answer = + window.prompt("Input a number or the correct answer");
      console.log(answer, typeof answer);
    }
    while (answer !== 0 || answer !== 1);

    if(answer === 0 || answer === 1) {
      console.log('Your answer is:', questions[index].compare(answer));
      console.log('Correct answers:', score);
      console.log('-------------------------------');
      getQuestion();
    }
}
// getQuestion();
/////////////////////////////////////////////////////////////////////////

let uiControler = (function () {
  let DOMElements = {
    type: 'type',
    desc: 'desc',
    addId: 'add',
    amount: 'amount',
    notes: '.notes',
    left: '.left',
    right: '.right'
  };

  function insertHtmlLine(type, obj) {
    let left = document.querySelector(DOMElements.left);
    let right = document.querySelector(DOMElements.right);
    let template = "<div><span>%desc%</span> <span>%amount%</span></div>";
    let newtempl = template.replace('%desc%', obj.desc).replace('%amount%', obj.amount);

    if(type === 'inc') {
      left.insertAdjacentHTML("beforeEnd", newtempl);
    } else {
      right.insertAdjacentHTML("beforeEnd", newtempl);
    }
  }

  return {
    domElements: DOMElements,
    add: function (b) {
      return add(b);
    },
    insertHtml: function (type, obj) {
      insertHtmlLine(type, obj);
    },
    clearFields: function () {
      let fields = document.querySelectorAll('#desc, #amount');
      fields.forEach(item => {
        item.value = '';
      });
      fields[0].focus();
    }
  }
})();

let budgetControler = (function () {

  let Income = function (id, desc, value) {
    this.id = id;
    this.desc = desc;
    this.value = +value;
  };

  let Expense = function (id, desc, value) {
    this.id = id;
    this.desc = desc;
    this.value = +value;
  };

  let items = {
    allItems: {
      exp: [],
      inc: []
    },
    total: {
      exp: 0,
      inc: 0
    },
    budget: 0
  };

  function createId(type) {
    if (items.allItems[type].length > 0){
      return items.allItems[type][items.allItems[type].length - 1].id + 1;
    }  else {
      return 0;
    }
  }

  function createItem(type, desc, value) {
    let id, newItem;

    id = createId(type);

    if (type === 'exp') {
      newItem = new Expense(id, desc, value);
    } else {
      newItem = new Income(id, desc, value);
    }

    items.allItems[type].push(newItem);
    console.log(items.allItems);
  }

  function calculateBudget() {
    let inc = items.allItems.inc.map(item => item.value).reduce((a,b) => {
      console.log(a, b);
      return a + b;
    }, 0);

    let exp = items.allItems.exp.map(item => item.value).reduce((a,b) => {
      console.log(a, b);
      return a + b;
    }, 0);

    items.total.inc = inc;
    items.total.exp = exp;
    items.budget = inc - exp;
    console.log(inc, exp);
  }

  return {
    addItem: function (type, desc, value) {
      return createItem(type, desc, value);
    },
    calculate: function () {
      calculateBudget()
    }
  }
})();

let controller = (function (uiCtrl, budCtrl) {

  function initEventListeners () {
    setTimeout(function () {
      document.getElementById(uiCtrl.domElements.addId).addEventListener('click', function (event) {
        let input = {
          desc: document.getElementById(uiCtrl.domElements.desc).value,
          amount: document.getElementById(uiCtrl.domElements.amount).value
        };
        console.log('input', input);
        budCtrl.addItem(document.getElementById(uiCtrl.domElements.type).value, document.getElementById(uiCtrl.domElements.desc).value, document.getElementById(uiCtrl.domElements.amount).value);
        budCtrl.calculate();
        uiCtrl.insertHtml(document.getElementById(uiCtrl.domElements.type).value, input);
        uiCtrl.clearFields();
      });
    }, 0);
  }

  return {
    init: function () {
      initEventListeners()
    }
  }
})(uiControler, budgetControler);

controller.init();