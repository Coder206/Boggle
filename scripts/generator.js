const board    = document.getElementById("board");
const letters  = board.getElementsByTagName("td");

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for (let letter of letters)
{
	letter.textContent = numberToCharacter(getRandom());
}

function getRandom() 
{
	return Math.floor(Math.random() * Math.floor(26));
}

function numberToCharacter(number) 
{
	if (number >= 0 && number < 26)
		return alphabet[number];
}
