const budgetInput = document.getElementById('budget-input');
const set = document.getElementById('set');
const totalBudgetHere = document.getElementById('totalBudgetHere');
const balance = document.getElementById('balance');
const titleInput = document.getElementById('title-input');
const costInput = document.getElementById('cost-input');
const check = document.getElementById('check');
const expenses = document.getElementById('expenses');
const expenseList = document.getElementById('expense-list')
set.addEventListener('click' , () => {
    totalBudgetHere.innerText = budgetInput.value;
    balance.innerText = budgetInput.value;
    budgetInput.disabled = true
})

check.addEventListener('click' , () => {
        if (totalBudgetHere.innerText != 0) {
            if (titleInput.value != '' && costInput.value != '') {
            if ((costInput.value - balance.innerText) < 0) {
                expenses.innerText = parseFloat(costInput.value) + parseFloat(expenses.innerText);
                balance.innerText = balance.innerText - costInput.value;
                expenseList.innerHTML += ` <div class="q2 row">
                <h3 class="col-sm-4 col-lg-4"><i class="fa-solid fa-trash bin" id='bin'></i> ${titleInput.value}</h3>
                <h3 class="col-sm-4 col-lg-4 costInputValue">${costInput.value}</h3>
            </div>`
                costInput.value = ''
                titleInput.value = ''


                const costInputValue = document.querySelectorAll('.costInputValue')
                const bin = document.querySelectorAll('.bin');
                bin.forEach((bin,index) => {
                    bin.addEventListener('click' , () => {
                        let parentElements = bin.parentElement.parentElement;
                        balance.innerText = parseFloat(balance.innerText) + parseFloat(costInputValue[index].innerText);
                        expenses.innerText = parseFloat(expenses.innerText) - parseFloat(costInputValue[index].innerText);
                        expenseList.removeChild(parentElements);
                        Swal.fire({
                            icon: "success",
                            title: "The item deleted sucessfully",
                            showConfirmButton: false,
                            timer: 1500
                          });
                    })
                })
            }else{
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "You are going out of budget",
                  });
            }
            }
        }else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You need to add your budget first",
              });
        }
})