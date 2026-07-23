const humburger = document.getElementById('humburger');
const sidebar = document.getElementById('sidebar');

humburger.addEventListener('click', ()=>{
    sidebar.classList.toggle('hidden');
});

const toggleNotifications = document.getElementById('toggleNotifications');
const notifications = document.getElementById('notifications');

toggleNotifications.addEventListener('click', ()=>{
    notifications.classList.toggle('hide-notification-bar');
});

const dashboard = document.getElementById('dashboard');
const dashboardButton = document.getElementById('dashboardButton');
const pending = document.getElementById('pending');
const pendingButton = document.getElementById('pendingButton');

function removeClasslist(el, classname){
    el.classList.remove(classname);
    console.log('removed ' + classname + ' from ' + el)
}

function addClasslist(el, classname){
    el.classList.add(classname);
}

function changeTabs(tab, btn) {
    removeClasslist(pendingButton, 'active-sidebar-btn');
    removeClasslist(dashboardButton, 'active-sidebar-btn');
    pending.style.display = 'none';
    dashboard.style.display = 'none';
    tab.style.display = 'block';
    btn.classList.add('active-sidebar-btn');
}

dashboardButton.addEventListener('click', ()=>{
    changeTabs(dashboard, dashboardButton);
});

pendingButton.addEventListener('click', ()=>{
    changeTabs(pending, pendingButton);
});
const pendingReqTable = document.getElementById('pendingReqTable');
const tbody = document.createElement('tbody');
const fragment = document.createDocumentFragment();

const allReqs = [
    {
    
        name: 'Jordan',
        type: 'deposit',
        amount: '7,000',
        tel: '0756 339 975',
        names: '- -',
        time: '08:51',
},


];

const withdrawReqs = [

    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },


   // {name: '', type: amount: tel: time: },
   // {name: '', type: amount: tel: time: },
];

const depositReqs = [
    { name: 'Jordan', type: 'deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},

];

let count = 0;

function addRow(dataObj) {
    dataObj.forEach((data) =>  {
        count++;
        console.log(count)
        const tr = document.createElement('tr');

        const noId = document.createElement('td');
        noId.textContent = count;
        
        const nameId = document.createElement('td');
        nameId.textContent = data.name;
        
        const typeId = document.createElement('td');
        typeId.textContent = data.type;
        
        const amountId = document.createElement('td');
      //  amountId.classList.add('scroll-wrapper');
        amountId.textContent = data.amount;
        
        const telId = document.createElement('td');
      //  telId.classList.add('scroll-wrapper');
        telId.textContent = data.tel;

        const namesId = document.createElement('td');
        namesId.textContent = data.names;
        
        const timeId = document.createElement('td');
        timeId.textContent = data.time;
        
        const actionId = document.createElement('td');
        const actionDiv = document.createElement('div');
        actionDiv.className = 'action-buttons';

        const approveBtn = document.createElement('button');
        approveBtn.className = 'accept-btn';
        approveBtn.textContent = 'Approve';

        const rejectBtn = document.createElement('button');
        rejectBtn.className = 'reject-btn';
        rejectBtn.textContent = 'Reject';

        actionDiv.appendChild(approveBtn);
        actionDiv.appendChild(rejectBtn);
        actionId.appendChild(actionDiv);

        tr.appendChild(noId);
        tr.appendChild(nameId);
        tr.appendChild(typeId);
        tr.appendChild(amountId);
        tr.appendChild(telId);
        tr.appendChild(namesId);
        tr.appendChild(timeId);
        tr.appendChild(actionId);

        fragment.appendChild(tr);
    });

    tbody.appendChild(fragment);
    pendingReqTable.appendChild(tbody);
}

const allReqsBtn = document.getElementById('allReqs');
allReqsBtn.addEventListener('click', ()=>{
    withdrawBtn.classList.remove('active-tab');
    depositsBtn.classList.remove('active-tab');
    allReqsBtn.classList.add('active-tab');
   tbody.textContent = '';
    count = 0;
    addRow(allReqs);
});

allReqsBtn.classList.add('active-tab');
addRow(allReqs);

const withdrawBtn = document.getElementById('withdrawBtn');
withdrawBtn.addEventListener('click', function () {
    allReqsBtn.classList.remove('active-tab');
    depositsBtn.classList.remove('active-tab');
    tbody.textContent = '';
    count = 0;
    this.classList.add('active-tab');
    addRow(withdrawReqs);

});

const depositsBtn = document.getElementById('depositsBtn');
depositsBtn.addEventListener('click', function () {
    allReqsBtn.classList.remove('active-tab');
    withdrawBtn.classList.remove('active-tab');
    tbody.textContent = '';
    count = 0;
    this.classList.add('active-tab');
    addRow(depositReqs);
})
//pendingReqTable.textContent = 'No requests yet';


