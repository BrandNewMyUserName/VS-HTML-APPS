const btn_1 = document.querySelector(".button-task_1");

function showCountries() {
	var countriesList = document.getElementById('input-countries').value; // Отримуємо значення
	var result_1 = countriesList.split(','); // Розділяємо за комою

	var html = "<ul>";
	for (let i = 0; i < result_1.length; i++) {
		html += "<li>" + result_1[i].trim() + "</li>"; // Додаємо кожну країну в окремий елемент li
	}
	html += "</ul>";
	document.getElementById("task_1-list").innerHTML = html;
}

btn_1.addEventListener("click", () => {
	showCountries();
});


const cells = document.querySelectorAll("td");

cells.forEach(cell => {
    // Додаємо подію кліку для кожної комірки
    cell.addEventListener("click", function handleClick() {
        // Перевіряємо, чи комірка вже містить поле введення (щоб уникнути повторного кліку)
        if (cell.querySelector("input")) return;

        // Зберігаємо початковий текст комірки
        const originalText = cell.textContent;
        // Створюємо поле введення і кнопку "Зберегти"
        const input = document.createElement("input");
        input.type = "text";
        input.value = originalText;
        input.className = "edit-input";

        const saveButton = document.createElement("button");
        saveButton.textContent = "Зберегти";
        saveButton.className = "save-button";

        // Очищаємо комірку і додаємо поле введення та кнопку
        cell.textContent = "";
        cell.appendChild(input);
        cell.appendChild(saveButton);

        // Видаляємо обробник події, щоб уникнути повторного кліку
        cell.removeEventListener("click", handleClick);

        // Додаємо подію для кнопки "Зберегти"
        saveButton.addEventListener("click", function() {
            // Зберігаємо новий текст у комірку
			console.log("Button clicked");
			var text = input.value;
            cell.removeChild(input)
            cell.removeChild(saveButton)
			cell.textContent = text;

            // Повертаємо обробник події кліку для комірки
            cell.addEventListener("click", handleClick);
        });
    });
});

