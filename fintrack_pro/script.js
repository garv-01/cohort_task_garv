let dashboardMenuBtn= document.querySelector('#dashboard')
let settingMenuBtn= document.querySelector('#setting')
let addTransactionBtn= document.querySelector('#add_transaction')
let heroSection= document.querySelector('.hero-section')
let settingPage= document.querySelector('.setting')
let transactionForm = document.querySelector('.transaction-form')
let mainContent = document.querySelector('.main-content-area')
let transactionFormCloseBtn = document.querySelector('.ri-close-line')
let typeSelect = document.querySelector('#exp-inc')
let descriptionInput = document.querySelector('#des-for-exp')
let amountInput = document.querySelector('#amt-input')
let dateInput = document.querySelector('#date-input')
let categorySelect = document.querySelector('#categ')
let tableBody = document.querySelector('tbody')

//for toggle btn
let toggleBtnDiv = document.querySelector('.toggle-btn')
let toggleBtn = document.querySelector('.btn')
let navBar = document.querySelector('nav')
let logoutBtn = document.querySelector('.logout-btn')
let sideBar = document.querySelector('#sidebar')
let cardOne = document.querySelector("#crd1")
let cardFour = document.querySelector("#crd4")
let chartFlowAnalysisHead = document.querySelector(".chrt-flow-head")
let prefHead = document.querySelector(".pref")
let resetBtnDiv = document.querySelector(".reset-block")
let main = document.querySelector("main")
let kpiCard1 = document.querySelector('#card1')
let kpiCard2 = document.querySelector('#card2')
let kpiCard3 = document.querySelector('#card3')
let kpiCard4 = document.querySelector('#card4')
let chartDiv = document.querySelector('.chart')
let darkModeDiv = document.querySelector('.drk-mode')
let transactionDetailsDiv = document.querySelector('.transactions-details')
let canvas = document.querySelector('canvas')
let searchBarInput = document.querySelector('.searchbar-input');
let searchBarDiv = document.querySelector('.srch-bar');
let dropDown = document.querySelector('.drp-dwn');
let cashFlowHead = document.querySelector('.chrt-flow-head');
let darkModeText = document.querySelector('.drkmode-text');
let finanOverHead = document.querySelector('.finan');
let allTransactionHead = document.querySelector('.alltranst');
let transactionTypeOption = document.querySelector('#transactions-type');
let searchIcon = document.querySelector('.srch-icon');
let TableDate = document.querySelector('.date');
let TableDes = document.querySelector('.description');
let TableFood = document.querySelector('.food');
let TableExpense = document.querySelector('.expense');
let PenIcon = document.querySelector('.pen-icon');
let BinIcon = document.querySelector('.bin-icon');
let TableDiv = document.querySelector('table');
let userName = document.querySelector('#username');
let sideBarLogo = document.querySelector('.sidebar-logo-heading');
let sideBarIcon = document.querySelector('.ri-stack-fill');
let SettingHead = document.querySelector('.SettingHead');
let SettingProfileDetails = document.querySelector('.profile-det');
let SettingProfileFullName = document.querySelector('.full-name');
let SettingProfileCurrencyType = document.querySelector('.currency-type');
let SettingProfileNameDiv = document.querySelector('.name-div');
let SettingProfileCurrencyDiv = document.querySelector('#drpdwn-currency-list');
let SettingSaveBtn = document.querySelector('.save-btn');
let SettingProfileDiv = document.querySelector('.profile-details');
let SaveTransactionBtn = document.querySelector('#save-transaction-btn');
let transactionFormArray = JSON.parse(localStorage.getItem('transactions')) || [];
let editingId = null;

settingMenuBtn.addEventListener("click",()=>{
    console.log("setting btn is clicked");
    heroSection.style.display='none';
    settingPage.style.display='block';

    settingMenuBtn.style.backgroundColor="#DBEAFE";
    settingMenuBtn.style.color="#1E40AF";
    dashboardMenuBtn.style.backgroundColor="white";
    dashboardMenuBtn.style.color="black";

    addTransactionBtn.style.pointerEvents = 'none'; 
    addTransactionBtn.style.cursor='not-allowed'
    
})

SettingSaveBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('Save btn in the setting tab is clicked');

    let fullName = SettingProfileNameDiv.value.trim();
     let currency = SettingProfileCurrencyDiv.value;

     if(!fullName){
        alert('Pelase enter your full name befor saving')
        return;
     }

     localStorage.setItem('userName',fullName)
     localStorage.setItem('currency',currency)
     userName.textContent = fullName;
     renderTable()
     updateKPI();
     updateChart();

     alert('Profile updated successfully')
    
})

function getCurrencySymbol() {
    return localStorage.getItem('currency') || '₹';
}


dashboardMenuBtn.addEventListener("click",()=>{
    console.log("dashboard btn is clicked");
    heroSection.style.display='block';
    settingPage.style.display='none';

    settingMenuBtn.style.backgroundColor="white";
    settingMenuBtn.style.color="black";
    dashboardMenuBtn.style.backgroundColor="#DBEAFE";
    dashboardMenuBtn.style.color="#1E40AF";

    addTransactionBtn.style.pointerEvents = 'auto';
    addTransactionBtn.style.cursor = 'pointer';
})


addTransactionBtn.addEventListener('click',()=>{
    console.log('add transaction btn is clicked');
    transactionForm.style.display='block';
    mainContent.style.display='block';

    
})

transactionFormCloseBtn.addEventListener('click',()=>{
    console.log('transactionFormCloseBtn is clicked');
    transactionForm.style.display='none';
    mainContent.style.display='none';
})

let darkModeOn = false;
function enableDarkMode() {
    toggleBtn.style.transform = "translateX(22px)";
    toggleBtnDiv.style.backgroundColor="#3B82F6";
    toggleBtn.style.backgroundColor="white";
    navBar.style.backgroundColor="#1F2937";
    sideBar.style.backgroundColor="#1F2937";
    logoutBtn.style.color="white";
    settingMenuBtn.style.backgroundColor="#374151";
    settingMenuBtn.style.color="#9CA3AF";
    dashboardMenuBtn.style.backgroundColor="#374151";
    dashboardMenuBtn.style.color="#9CA3AF";
    addTransactionBtn.style.backgroundColor="#3B82F6";
    addTransactionBtn.style.color="white";
    heroSection.style.backgroundColor="#111827";
    main.style.backgroundColor="#111827";
    kpiCard1.style.backgroundColor="#1F2937";
    kpiCard2.style.backgroundColor="#1F2937";
    kpiCard3.style.backgroundColor="#1F2937";
    kpiCard4.style.backgroundColor="#1F2937";
    chartDiv.style.backgroundColor="#1F2937";
    darkModeDiv.style.backgroundColor="#1F2937";
    transactionDetailsDiv.style.backgroundColor="#1F2937";
    canvas.style.backgroundColor="#111827";
    searchBarInput.style.backgroundColor="#111827";
    searchBarDiv.style.backgroundColor="#111827";
    dropDown.style.backgroundColor="#111827";
    dropDown.style.color="white";
    cashFlowHead.style.color="white";
    prefHead.style.color="white";
    darkModeText.style.color="white";
    finanOverHead.style.color="white";
    allTransactionHead.style.color="white";
    transactionTypeOption.style.color="white";
    TableDiv.style.backgroundColor="#111827";
    userName.style.color="white";
    logoutBtn.style.color="white";
    sideBarLogo.style.color="white";
    sideBarIcon.style.color="white";
    cardOne.style.color="white";
    cardFour.style.color="white";
    SettingHead.style.color="white";
    SettingProfileDetails.style.color="white";
    SettingProfileDiv.style.backgroundColor="#111827";

    document.querySelectorAll('.date, .description, .food').forEach(el => el.style.color = 'white');
    document.querySelectorAll('.expense').forEach(el => el.style.color = 'white');
}

function disableDarkMode() {
    toggleBtn.style.transform = "translateX(0px)";
    toggleBtnDiv.style.backgroundColor="";
    toggleBtn.style.backgroundColor="red";
    navBar.style.backgroundColor="white";
    sideBar.style.backgroundColor="white";
    logoutBtn.style.color="black";
    settingMenuBtn.style.backgroundColor="white";
    settingMenuBtn.style.color="black";
    dashboardMenuBtn.style.backgroundColor="#DBEAFE";
    dashboardMenuBtn.style.color="#1E40AF";
    addTransactionBtn.style.backgroundColor="black";
    addTransactionBtn.style.color="white";
    heroSection.style.backgroundColor="#F8F9FB";
    main.style.backgroundColor="#F8F9FB";
    kpiCard1.style.backgroundColor="white";
    kpiCard2.style.backgroundColor="white";
    kpiCard3.style.backgroundColor="white";
    kpiCard4.style.backgroundColor="white";
    chartDiv.style.backgroundColor="white";
    darkModeDiv.style.backgroundColor="white";
    transactionDetailsDiv.style.backgroundColor="white";
    canvas.style.backgroundColor="white";
    searchBarInput.style.backgroundColor="#F8F9FB";
    searchBarDiv.style.backgroundColor="#F8F9FB";
    dropDown.style.backgroundColor="#F8F9FB";
    dropDown.style.color="black";
    cashFlowHead.style.color="black";
    prefHead.style.color="black";
    darkModeText.style.color="black";
    finanOverHead.style.color="black";
    allTransactionHead.style.color="black";
    transactionTypeOption.style.color="black";
    TableDiv.style.backgroundColor="white";
    userName.style.color="black";
    logoutBtn.style.color="black";
    sideBarLogo.style.color="black";
    sideBarIcon.style.color="black";
    cardOne.style.color="black";
    cardFour.style.color="black";
    SettingHead.style.color="black";
    SettingProfileDetails.style.color="black";
    SettingProfileDiv.style.backgroundColor="white";

    document.querySelectorAll('.date, .description, .food').forEach(el => el.style.color = 'black');
    document.querySelectorAll('.expense').forEach(el => el.style.color = 'black');
}

toggleBtn.addEventListener("click", () => {
    darkModeOn = !darkModeOn;

    if (darkModeOn) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

SaveTransactionBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('save btn in the transaction form is clicked');

    let type = typeSelect.value;
    let description = descriptionInput.value.trim();
    let amount = amountInput.value;
    let date = dateInput.value;
    let category = categorySelect.value;

     if (!description || !amount || Number(amount) <= 0 || !date || !category) {
        console.log('alert is showing');
        
        alert('Please fill in all fields with a valid amount before saving.');
        return;
    }

    let newTransaction = {
        id: Date.now(),
        type:typeSelect.value,
        description:descriptionInput.value.trim(),
        date:dateInput.value,
        amount:amountInput.value,
        category:categorySelect.value,
    }
    
   if (editingId!==null) {
         let existing = transactionFormArray.find(t => t.id === editingId);
    existing.type = type;
    existing.description = description;
    existing.amount = amount;
    existing.date = date;
    existing.category = category;

    editingId = null;
   } else {
      transactionFormArray.push(newTransaction);
   }    

    console.log(transactionFormArray);
    saveToLocalStorage()
    renderTable()
    updateKPI()
    updateChart();
    descriptionInput.value = '';
    amountInput.value = '';
    dateInput.value = '';
    categorySelect.value = '';
    typeSelect.value = 'expense';
    
    transactionForm.style.display='none';
    mainContent.style.display='none';
    
   
})


function renderTable(){
    tableBody.innerHTML = "";
    transactionFormArray.forEach((t)=>{
        let row = document.createElement('tr');

        row.innerHTML = `
            <td class="date">${t.date}</td>
            <td class="description">${t.description}</td>
            <td class="food"><span class="category">${t.category}</span></td>
            <td class="expense">${getCurrencySymbol()}${t.amount}</td>
            <td class="actions">
                <img class="pen-icon" src="/pen.png" alt="edit">
                <img class="bin-icon" src="/trash-bin.png" alt="delete">
            </td>
        `;

        tableBody.appendChild(row);

       
        let binIcon = row.querySelector('.bin-icon');

        binIcon.addEventListener('click', () => {
            console.log('bin icon clicked for id:', t.id);

            if (confirm('Delete this transaction?')) {
                transactionFormArray = transactionFormArray.filter(tx => tx.id !== t.id);
                saveToLocalStorage()
                renderTable();
                updateKPI();
                updateChart();
            }
        });

        let penIcon = row.querySelector('.pen-icon');
        penIcon.addEventListener('click', () => {
            console.log('pen icon in the table body is clicked');
            editingId = t.id;
            typeSelect.value = t.type;
            descriptionInput.value = t.description;
            amountInput.value = t.amount;
            dateInput.value = t.date;
            categorySelect.value = t.category;

            transactionForm.style.display = 'block';
            mainContent.style.display = 'block';
}); 
    });
}

function updateKPI (){
    let income = transactionFormArray
        .filter(t => t.type ==='income')
        .reduce((sum,t)=> sum + Number(t.amount),0)
    let expense = transactionFormArray
        .filter(t => t.type === 'expense')
        .reduce((sum, t) => sum + Number(t.amount), 0);
    let balance = income - expense;

    cardOne.textContent = `${getCurrencySymbol()}${balance.toFixed(2)}`;
    document.querySelector('#crd2').textContent = `${getCurrencySymbol()}${income.toFixed(2)}`;
    document.querySelector('#crd3').textContent = `${getCurrencySymbol()}${expense.toFixed(2)}`;
    cardFour.textContent = transactionFormArray.length;
}

function updateChart() {
    let grouped = {};

    transactionFormArray.forEach((t) => {
        if (!grouped[t.date]) {
            grouped[t.date] = { income: 0, expense: 0 };
        }
        grouped[t.date][t.type] += Number(t.amount);
    });

    let dates = Object.keys(grouped).sort((a, b) => new Date(a) - new Date(b));
    let incomeData = dates.map(d => grouped[d].income);
    let expenseData = dates.map(d => grouped[d].expense);

    if (window.cashFlowChart) {
        window.cashFlowChart.data.labels = dates;
        window.cashFlowChart.data.datasets[0].data = incomeData;
        window.cashFlowChart.data.datasets[1].data = expenseData;
        window.cashFlowChart.update();
    } else {
        window.cashFlowChart = new Chart(canvas, {
            type: 'bar',
            data: {
                labels: dates,
                datasets: [
                    {
                        label: 'Income',
                        data: incomeData,
                        backgroundColor: '#16A34A',
                        borderRadius: 4
                    },
                    {
                        label: 'Expense',
                        data: expenseData,
                        backgroundColor: '#DC2626',
                        borderRadius: 4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { position: 'top' } },
                scales: {
                    y: { beginAtZero: true }
                }
            }
        });
    }
}

function saveToLocalStorage(){
    localStorage.setItem('transactions',JSON.stringify(transactionFormArray))
}

resetBtnDiv.addEventListener('click',()=>{
    console.log('reset btn is clicked');

    if(confirm('this will permenantly delete all the transaction.Continue?')){
        transactionFormArray=[]
        editingId=null;
        saveToLocalStorage();
        renderTable();
        updateKPI()
        updateChart();
    }
    
})

renderTable()
updateKPI()
updateChart()

let savedName = localStorage.getItem('userName');
let savedCurrency = localStorage.getItem('currency');

if (savedName) {
    userName.textContent = savedName;
    SettingProfileNameDiv.value = savedName;
}

if (savedCurrency) {
    SettingProfileCurrencyDiv.value = savedCurrency;
}


/* ==========================================================
   AUTH: REGISTER / LOGIN / LOGOUT
   ========================================================== */

let registerPage = document.querySelector('register-page');
let loginPage = document.querySelector('login-page');

// inputs aren't id'd in the markup, so scope by the wrapping divs
let registerForm = registerPage.querySelector('form');
let registerUsernameInput = registerPage.querySelector('.username-div input');
let registerPasswordInput = registerPage.querySelector('.password-div input');
let goToLoginLink = registerPage.querySelector('.login-page-link a');

let loginForm = loginPage.querySelector('form');
let loginUsernameInput = loginPage.querySelector('.username-div input');
let loginPasswordInput = loginPage.querySelector('.password-div input');
let goToRegisterLink = loginPage.querySelector('.login-page-link a');

// remember the app's normal display values so we can restore them exactly
let navDefaultDisplay = getComputedStyle(navBar).display;
let sideBarDefaultDisplay = getComputedStyle(sideBar).display;

function getUsers() {
    return JSON.parse(localStorage.getItem('fintrack_users')) || [];
}

function saveUsers(users) {
    localStorage.setItem('fintrack_users', JSON.stringify(users));
}

function hideAllScreens() {
    navBar.style.display = 'none';
    sideBar.style.display = 'none';
    heroSection.style.display = 'none';
    settingPage.style.display = 'none';
    transactionForm.style.display = 'none';
    mainContent.style.display = 'none';
    registerPage.style.display = 'none';
    loginPage.style.display = 'none';
}

function applyDisplayName() {
    let currentSavedName = localStorage.getItem('userName');
    let loggedInUser = localStorage.getItem('loggedInUser');
    userName.textContent = currentSavedName || loggedInUser || 'User';
}

function showApp() {
    hideAllScreens();
    navBar.style.display = navDefaultDisplay;
    sideBar.style.display = sideBarDefaultDisplay;
    heroSection.style.display = 'block';

    // land on the Dashboard tab every time the app is shown
    settingMenuBtn.style.backgroundColor = "white";
    settingMenuBtn.style.color = "black";
    dashboardMenuBtn.style.backgroundColor = "#DBEAFE";
    dashboardMenuBtn.style.color = "#1E40AF";
    addTransactionBtn.style.pointerEvents = 'auto';
    addTransactionBtn.style.cursor = 'pointer';

    applyDisplayName();
}

function showLoginPage() {
    hideAllScreens();
    loginPage.style.display = 'block';
    loginForm.reset();
}

function showRegisterPage() {
    hideAllScreens();
    registerPage.style.display = 'block';
    registerForm.reset();
}

registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = registerUsernameInput.value.trim();
    const password = registerPasswordInput.value;


    if (username === "" || password === "") {
        alert("Please fill all fields.");
        return;
    }

    if (username.length < 3) {
        alert("Username must be at least 3 characters.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }


    let users = JSON.parse(localStorage.getItem("fintrack_users")) || [];


    let userExists = users.some(user =>
        user.username.toLowerCase() === username.toLowerCase()
    );

    if (userExists) {
        alert("Username already exists. Please Login.");
        return;
    }


    users.push({
        username: username,
        password: password
    });

    localStorage.setItem("fintrack_users", JSON.stringify(users));

  
    localStorage.setItem("loggedInUser", username);

    alert("Account Created Successfully!");

    registerForm.reset();

    
    showApp();
});

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = loginUsernameInput.value.trim();
    const password = loginPasswordInput.value;

  
    if (username === "" || password === "") {
        alert("Please enter both username and password.");
        return;
    }

   
    const users = JSON.parse(localStorage.getItem("fintrack_users")) || [];

    // Find matching user
    const user = users.find(
        (u) =>
            u.username.toLowerCase() === username.toLowerCase() &&
            u.password === password
    );

    if (!user) {
        alert("Invalid Username or Password.");
        return;
    }

 
    localStorage.setItem("loggedInUser", user.username);

    userName.textContent = user.username;

    alert("Login Successful!");


    loginForm.reset();

 
    showApp();
});

goToLoginLink.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('go to login link clicked');
    showLoginPage();
});

goToRegisterLink.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('go to register link clicked');
    showRegisterPage();
});

logoutBtn.addEventListener('click', () => {
    console.log('logout btn clicked');
    localStorage.removeItem('loggedInUser');
    showLoginPage();
});

/* ---- decide what to show when the page first loads ---- */
let currentUser = localStorage.getItem('loggedInUser');

if (currentUser) {
    showApp();
} else if (getUsers().length > 0) {
    showLoginPage();
} else {
    showRegisterPage();
}