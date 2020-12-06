let money = +prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};


for(let i=0;i<2;i++) {
let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
	b = +prompt("Во сколько обойдется?", '');

    if((typeof(a)) ==="string" && typeof(b)==="string" && typeof(a)!=null && typeof(b)!=null && a.length < 50 && b.length < 50 ){
appData.expenses[a] = b;
} else {
	continue;
}
}
// Важно! В последних версиях браузеров поведение работы со свойствами объектов поменялось. 
// Теперь синтаксис через точку может не работать. Поэтому выше я использовал квадратные скобки. 
// Если вы это читаете - то в скором времени обновится и видео в самом курсе. Спасибо за внимание!

appData.moneyPerDay = appData.budget / 30;
alert("budget per day: " + appData.moneyPerDay);

if (appData.moneyPerDay <100){
	console.log("minimum level budget");
} else if(appData.moneyPerDay > 100 && appData.moneyPerDay<2000) {
	console.log("average level budget");
} else if(appData.moneyPerDay > 2000) {
	console.log("high level budget");
} else {
	console.log("error is here");
}