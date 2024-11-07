const btn = document.querySelector(".b-button");
const result = document.querySelector(".result");
let html = '';
const friendsData = [
	["Олег", "1995-05-18", "+380501234567"],
	["Марія", "1997-08-22", ""],
	["Андрій", "1995-05-15", "+380671234567"],
	["Світлана", "1996-03-10", "+380931234567"],
	["Іван", "1993-05-18", ""],
	["Тетяна", "1998-06-23", "+380991234567"],
	["Дмитро", "1992-04-14", "+380661234567"],
	["Наталія", "1999-09-30", ""],
	["Сергій", "1996-01-20", "+380631234567"],
	["Оксана", "1995-07-19", "+380441234567"]
];

function showRow (name, date, phone) {
	const currentDate = new Date('1995-05-15');
	const birthDate = new Date(date);
	let difference = birthDate.getTime()-currentDate.getTime();
	difference = Math.floor(difference / (1000 * 3600 * 24));
	phone = phone ? phone : 'Не вказано';
	let text = '';
	if (difference === 3) {
		text = 'Відправити вітальну листівку';
	} else if (difference === 0) {
		text = 'Подзвонити другу';
	} else {
		text = '---';
	}
	html = html + `<tr><td>${name}</td><td>${date}</td><td>${phone}</td><td>${text}</td></tr>`;
}

function showTable () {
	html = '<table>'
	html = html+'<tr><th>Ім\'я</th><th>Дата народження</th><th>Телефон</th><th>Повідомлення</th></tr>';
  for (let i = 0; i < friendsData.length; i++) {
    showRow(friendsData[i][0], friendsData[i][1], friendsData[i][2]);
  }
	html = html + '</table>';
};

btn.addEventListener("click", () => {
	showTable();
	result.innerHTML = html;
});