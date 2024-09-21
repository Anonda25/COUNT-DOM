// write a function
document.getElementById('calculate').addEventListener('click', function () {
    const income = parseFloat(document.getElementById('income').value);
    const softwer = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);
    const errorValue = document.getElementById('income-error');

    if (income <= 0 || isNaN(income)) {
        errorValue.classList.remove('hidden');
        return
    }
    if (softwer <= 0 || isNaN(softwer)) {
        document.getElementById('software-error').classList.remove('hidden')

    }
    if (courses <= 0 || isNaN(courses)) {
        document.getElementById('courses-error').classList.remove('hidden')
    }
    if(internet <=0 || isNaN(internet)){
        document.getElementById('internet-error').classList.remove('hidden')
    }


    
    const totalExpences = softwer + internet + courses;
    const balance = income - totalExpences;

    if (totalExpences > income) {
        document.getElementById('logic-error').classList.remove('hidden');
        return;
    }

    const expences = document.getElementById('total-expenses');
    const balanceInputValue = document.getElementById('balance');
    expences.innerText = totalExpences;
    balanceInputValue.innerText = balance;

    const result = document.getElementById('results');
    result.classList.remove('hidden')

    const historyItem = document.createElement('div');
    historyItem.className = "bg-white p-3 rounded-md border-l-2 border-indigo-500"
    historyItem.innerHTML = `
    <p>Time: ${new Date().toLocaleTimeString()}</p>
    <p>Date: ${new Date().toLocaleDateString()}</p>
    <p>TotalExpencess: ${income}</p>
    <p>TotalExpencess: ${totalExpences}</p>
    <p>Balance: ${balance}</p>
    
    `
    const historyListValue = document.getElementById('history-list');
    historyListValue.insertBefore(historyItem, historyListValue.firstChild);

})

// calclute saving function

document.getElementById('calculate-savings').addEventListener('click', function () {
    const savingAmount = parseFloat(document.getElementById('savings').value)
    const income = parseFloat(document.getElementById('income').value);
    const softwer = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);

    const totalExpences = softwer + internet + courses;
    const balance = income - totalExpences;
    const amoutnSaving = document.getElementById('savings-amount');
    const savingAmountValue = (savingAmount * balance) / 100;
    amoutnSaving.innerText = savingAmountValue;

    if(savingAmount <=0 || isNaN(savingAmount)){
        document.getElementById('savings-error').classList.remove('hidden');
        return;
    }

    const remainderBalance = balance - savingAmountValue;
    const remainderBalanceValue = document.getElementById('remaining-balance');
    remainderBalanceValue.innerText = remainderBalance;

})


const historyTab = document.getElementById("history-tab");
const assistantTab = document.getElementById('assistant-tab');
historyTab.addEventListener("click", function () {
    historyTab.classList.add(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    )
    historyTab.classList.remove("text-gray-600")
    assistantTab.classList.remove(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    )
    assistantTab.classList.add('text-gray-600')

    document.getElementById('expense-form').classList.add('hidden')
    document.getElementById('history-section').classList.remove('hidden')
});

assistantTab.addEventListener('click', function () {
    assistantTab.classList.add(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    )
    assistantTab.classList.add("text-gray-600")
    historyTab.classList.remove(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    )
    historyTab.classList.remove(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    )
    historyTab.classList.add('text-gray-500')
    document.getElementById('expense-form').classList.remove('hidden')
    document.getElementById('history-section').classList.add('hidden')
})

