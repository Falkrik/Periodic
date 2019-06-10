
var nameArray = ["Väte" , "Helium", "Litium", "Beryllium", "Bor", "Kol", "Kväve", "Syre", "Flour", "Neon", "Natrium", "Magnesium", "Aluminium", "Kisel",
				 "Fosfor", "Svavel", "Klor", "Argon", "Kalium", "Kalcium", "Skandium", "Titan", "Vanadin", "Krom", "Mangan", "Järn", "Kobolt", "Nickel",
				 "Koppar", "Zink", "Gallium", "Germanium", "Arsenik", "Selen", "Brom", "Krypton", "Rubidium", "Strontium", "Yttrium", "Zirkonium", "Niob",
				 "Molybden", "Teknetium", "Rutenium", "Rodium", "Palladiun", "Silver", "Kadmium", "Indium", "Tenn", "Antimon", "Tellur", "Jod", "Xenon",
				 "Cesium", "Barium", "Lantan", "Cerium", "Praseodym", "Neodym", "Prometium", "Samarium", "Europium", "Gadolinium", "Terbium", "Dysprosium",
				 "Holmium", "Erbium", "Tulium", "Ytterbium", "Lutetium", "Hafnium", "Tantal", "Volfram", "Rhenium", "Osmium", "Iridium", "Platina", "Guld",
				 "Kvicksilver", "Tallium", "Bly", "Vismut", "Polonium", "Astat", "Radon", "Francium", "Radium", "Aktinium", "Torium", "Protaktinium",
				 "Uran", "Neptunium", "Plutonium", "Amercium", "Curium", "Berkelium", "Californium", "Einsteinium", "Fermium", "Mendelevium", "Nobelium",
				 "Lawrencium", "Rutherfordium", "Dubnium", "Seaborgium", "Bohrium", "Hassium", "Meitnerium", "Darmstadtium", "Roentgenium", "Copernicium",
				 "Nihonium", "Flerovium", "Moskovium", "Livermorium", "Tenness", "Oganesson"];

var symbolArray = ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si","P","S","Cl","Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn",
                   "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag","Cd",
		     	   "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu",
                   "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb","Bi", "Po", "At","Rn", "Fr","Ra","Ac","Th", "Pa", "U", "Np", "Pu", "Am",
                   "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs","Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og"];

var mode = 0;
var inputF;
var hintP;

var realAnswer;

var correctScore = 0;
var wrongScore = 0;


function Start() 
{
	inputF = document.getElementById("GameField");
	hintP = document.getElementById("Hint");
}

function ChangeGame(number) 
{
	if(mode != number)
	{
		mode = number;
		GenerateNew();
	}
}

function UserTyped()
{
	if(window.event.keyCode == '13') 
	{
		CheckAnswer();
		
	}

}

function CheckAnswer() 
{
	var answer = inputF.value;

	if(("" + realAnswer).toLowerCase() == answer.toLowerCase())
	{
		correctScore += 1;
		hintP.style.color = "green";
		document.getElementById("Comment").innerHTML = "";
	} else {
		wrongScore += 1;
		hintP.style.color = "red";
		document.getElementById("Comment").innerHTML = "Your answer on: " + hintP.innerHTML + " was " + answer + ". Correct answer was: " + realAnswer;
	}

	UpdateScore();

	inputF.value = "";
	GenerateNew();
}

function GenerateNew()
{
	var random = Math.random() * 118;
	random = Math.floor(random);

	switch(mode) 
	{
		case 1:
			realAnswer = random + 1;
			hintP.innerHTML = nameArray[random];
			break;
		case 2:
			realAnswer = nameArray[random];
			hintP.innerHTML = random+1;
			break;
		case 3:
			realAnswer = random + 1;
			hintP.innerHTML = symbolArray[random];
			break;
	}
}

function UpdateScore() 
{
	document.getElementById("Cor").innerHTML = "CORRECT: " + correctScore;
	document.getElementById("Incor").innerHTML = "INCORRECT: " + wrongScore;
}