// напишите функции x1 и x2 и измените функцию solve, 
// так, чтобы она показывала решения (решение) 
// уравнения, введенного пользователем на странице 

function solve() {
	// получаем данные в виде строк из полей ввода на странице
	var a = document.getElementById("a").value;
	var b = document.getElementById("b").value;
	var c = document.getElementById("c").value;
	// получаем числа из строк
	a = parseFloat(a);
	b = parseFloat(b);
	c = parseFloat(c);
	if(a <= 0 | b <= 0 | c <= 0){
		alert("СТОРОНА ТРЕУГОЛЬНИКА НЕ МОЖЕТ БЫТЬ МЕНЬШЕ ЛИ РАВНО НУЛЮ");
	} else if(a >= (b + c) | b >= (a + c) | c >= (a + b)){
		alert("ДЛИНА ГИПОТЕНУЗЫ НЕ МОЖЕТ БЫТЬ БОЛЬШЕ ИЛИ РАВНО СУММЕ КАТЕТОВ");
	} else{
		alert("Площадь треугольника равна "+S(a, b, c).toString());
	}

	// дальше вам надо заменить код, чтобы он показывал решения,
	// или строку "РЕШЕНИЙ НЕТ", если дискриминант уравнения < 0
}

function S(a,b,c){ //площадь треугольника
	p = P(a, b, c);
	return Math.sqrt(p*(p-a)*(p-b)*(p-c));
}
function P(a,b,c){ //полупериметр треугольника
	return (a+b+c)/2;
}

