const humburger = document.getElementById('humburger');
const sidebar = document.getElementById('sidebar');

const fragment = document.createDocumentFragment();

const PhoneTable = document.querySelector('.phone-table-container');
const mobileTable = document.querySelector('.mobile-table');
function createMobileTable(arr){
   arr.forEach((prop, len) =>{
      const div1 = document.createElement('div');
       const div2 = document.createElement('div');
       const div3 = document.createElement('div');
       const div4 = document.createElement('div');
       const div5 = document.createElement('div');
       const div6 = document.createElement('div');
       const div7 = document.createElement('div');
       const div8 = document.createElement('div');
       const p1 = document.createElement('p');
       const p2 = document.createElement('p');
       const p3 = document.createElement('p');
       const p4 = document.createElement('p');
       const p5 = document.createElement('p');
       const p6 = document.createElement('p');
       const p7 = document.createElement('p');
       const p8 = document.createElement('p');
       const p9 = document.createElement('p');
       const p10 = document.createElement('p');
       const p11 = document.createElement('p');
       const p12 = document.createElement('p');
       const button1 = document.createElement('button');
       const button2 = document.createElement('button');

       div1.classList.add('mobile-table', 'deposits');
       div2.classList.add('box-1');
       div3.classList.add('row');
       div4.classList.add('row');
       div5.classList.add('row');
       div6.classList.add('row');
       div8.classList.add('row');
       div7.classList.add('action-buttons');
       button1.classList.add('accept-btn');
       button2.classList.add('reject-btn');
       p1.classList.add('req-type');
       p2.classList.add('counter');

       p1.textContent = prop.type;
       p2.textContent = len + 1;
       console.log(len)
       p3.textContent = 'User';
       p4.textContent = prop.name;
       p5.textContent = 'Amount';
       p6.textContent = prop.amount;
       p7.textContent = 'Phone';
       p8.textContent = prop.tel;
       p9.textContent = 'Time';
       p10.textContent = prop.time;
       p11.textContent = 'Names';
       p12.textContent = prop.names;
       button1.textContent = '\u{2713} Approve';
       button2.textContent = '\u{2717} Reject';

       div7.append(button1, button2);
       div6.append(p9, p10);
       div5.append(p7, p8);
       div4.append(p5, p6);
       div3.append(p3, p4);
       div2.append(p1, p2);
       div8.append(p11, p12);
       div1.append(div2, div3, div4, div5, div8, div6, div7);

       fragment.appendChild(div1);
   });
    PhoneTable.appendChild(fragment);
}

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


const allReqs = [
    {
    
        name: 'Jordan',
        type: 'deposit',
        amount: '7,000',
        tel: '0756 339 975',
        names: '- -',
        time: '08:51',
},
{name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
];

const withdrawReqs = [

    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },
    {name: 'kakembo05', type: 'Withdraw', amount: '35,000', tel: '0758 325 876', names: 'Wasswa Robert', time: '11:45' },

   // {name: '', type: amount: tel: time: },
   // {name: '', type: amount: tel: time: },
];

const depositReqs = [
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},
    { name: 'Jordan', type: 'Deposit', amount: '7,000', tel: '0748 339 905', names: '- -', time: '08:51',},

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
    PhoneTable.textContent = '';
    createMobileTable(allReqs);
    count = 0;
    addRow(allReqs);
});

allReqsBtn.classList.add('active-tab');
addRow(allReqs);
createMobileTable(allReqs);

const withdrawBtn = document.getElementById('withdrawBtn');
withdrawBtn.addEventListener('click', function () {
    allReqsBtn.classList.remove('active-tab');
    depositsBtn.classList.remove('active-tab');
    tbody.textContent = '';
    count = 0;
    this.classList.add('active-tab');
    addRow(withdrawReqs);
    PhoneTable.textContent = '';
    createMobileTable(withdrawReqs);
});

const depositsBtn = document.getElementById('depositsBtn');
depositsBtn.addEventListener('click', function () {
    allReqsBtn.classList.remove('active-tab');
    withdrawBtn.classList.remove('active-tab');
    tbody.textContent = '';
    count = 0;
    this.classList.add('active-tab');
    addRow(depositReqs);

    PhoneTable.textContent = '';
    createMobileTable(depositReqs);;
});
//pendingReqTable.textContent = 'No requests yet';


