
const expenses = [
  { title: "Food", amount: 150 },
  { title: "Travel", amount: 80 },
  { title: "Books", amount: 300 },
  {title: "Coffie", amount: 70 },
];

function calculateTotal(items) {
  return items.reduce((total, item) => total + item.amount, 0);
}

const expenseList = document.getElementById("expense-list");
const totalElement = document.getElementById("total");

// expenses.forEach(function (expense) {
//   const li = document.createElement("li");
//   li.textContent = `${expense.title}: ₹${expense.amount}`;
//   expenseList.appendChild(li);
// });

function renderExpenses() {
  expenseList.innerHTML = "";

  expenses.forEach(function (expense) {
    const li = document.createElement("li");
    li.textContent = `${expense.title}: ₹${expense.amount}`;
    expenseList.appendChild(li);
  });

  totalElement.textContent =
    `Total Expenses: ₹${calculateTotal(expenses)}`;
}

renderExpenses();

const form = document.getElementById("expense-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = document.getElementById("title").value.trim();
  const amount = Number(document.getElementById("amount").value);

  if (!title || !Number.isFinite(amount) || amount <= 0) return;

  expenses.push({ title, amount });
  renderExpenses();
  form.reset();
});

totalElement.textContent = `Total Expenses: ₹${calculateTotal(expenses)}`;
