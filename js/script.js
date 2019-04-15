const type1 = document.getElementById('type1');
const name1 = document.getElementById('name1');
// const commit1 = document.getElementById('commit1');
const date1 = document.getElementById('date1');

const type2 = document.getElementById('type2');
const name2 = document.getElementById('name2');
// const commit2 = document.getElementById('commit2');
const date2 = document.getElementById('date2');

const type3 = document.getElementById('type3');
const name3 = document.getElementById('name3');
// const commit3 = document.getElementById('commit3');
const date3 = document.getElementById('date3');

const type4 = document.getElementById('type4');
const name4 = document.getElementById('name4');
// const commit4 = document.getElementById('commit4');
const date4 = document.getElementById('date4');

const type5 = document.getElementById('type5');
const name5 = document.getElementById('name5');
// const commit5 = document.getElementById('commit5');
const date5 = document.getElementById('date5');

const type6 = document.getElementById('type6');
const name6 = document.getElementById('name6');
// const commit6 = document.getElementById('commit6');
const date6 = document.getElementById('date6');

const type7 = document.getElementById('type7');
const name7 = document.getElementById('name7');
// const commit7 = document.getElementById('commit7');
const date7 = document.getElementById('date7');

const type8 = document.getElementById('type8');
const name8 = document.getElementById('name8');
// const commit8 = document.getElementById('commit8');
const date8 = document.getElementById('date8');

const type9 = document.getElementById('type9');
const name9 = document.getElementById('name9');
// const commit9 = document.getElementById('commit9');
const date9 = document.getElementById('date9');

const type10 = document.getElementById('type10');
const name10 = document.getElementById('name10');
// const commit10 = document.getElementById('commit10');
const date10 = document.getElementById('date10');

fetch ('https://api.github.com/users/glorianaa80/events') 
  .then((data) => data.json())
  .then((json) => activity(json))

  function activity(data){
    type1.innerHTML = `Event: ${data[0].type}`;
    name1.innerHTML = `Repository Name: ${data[0].repo.name}`;
    date1.innerHTML = `Date: ${data[0].created_at}`;

    type2.innerHTML = `Event: ${data[1].type}`;
    name2.innerHTML = `Repository Name: ${data[1].repo.name}`;
    date2.innerHTML = `Date: ${data[1].created_at}`;

    type3.innerHTML = `Event: ${data[2].type}`;
    name3.innerHTML = `Repository Name: ${data[2].repo.name}`;
    date3.innerHTML = `Date: ${data[2].created_at}`;

    type4.innerHTML = `Event: ${data[3].type}`;
    name4.innerHTML = `Repository Name: ${data[3].repo.name}`;
    date4.innerHTML = `Date: ${data[3].created_at}`;

    type5.innerHTML = `Event: ${data[4].type}`;
    name5.innerHTML = `Repository Name: ${data[4].repo.name}`;
    date5.innerHTML = `Date: ${data[4].created_at}`;

    type6.innerHTML = `Event: ${data[5].type}`;
    name6.innerHTML = `Repository Name: ${data[5].repo.name}`;
    date6.innerHTML = `Date: ${data[5].created_at}`;

    type7.innerHTML = `Event: ${data[6].type}`;
    name7.innerHTML = `Repository Name: ${data[6].repo.name}`;
    date7.innerHTML = `Date: ${data[6].created_at}`;

    type8.innerHTML = `Event: ${data[7].type}`;
    name8.innerHTML = `Repository Name: ${data[7].repo.name}`;
    date8.innerHTML = `Date: ${data[7].created_at}`;

    type9.innerHTML = `Event: ${data[8].type}`;
    name9.innerHTML = `Repository Name: ${data[8].repo.name}`;
    date9.innerHTML = `Date: ${data[8].created_at}`;
    
    type10.innerHTML = `Event: ${data[9].type}`;
    name10.innerHTML = `Repository Name: ${data[9].repo.name}`;
    date10.innerHTML = `Date: ${data[9].created_at}`;
    
    console.log(data)
}


// for (let i = 0; i < data.length; i =+ 1) {
  //   const type = data[i].type;
  //   const name = data[i].repo.name;
  //   const commit = data[i].payload.commits[0].message;
  //   const date = data[i].created_at
  //   const divActivity = document.createElement('div');
  //   divActivity.setAttribute('class', 'git-hub--info-content')

  //   const itemType = document.createElement('h2');
  //   itemType.innerHTML = type;

  //   const itemName = document.createElement('p');
  //   itemName.innerHTML = name;

  //   const itemCommit = document.createElement('p');
  //   itemCommit.innerHTML = commit;

  //   const itemDate = document.createElement('p');
  //   itemDate.innerHTML = date;

  //   divActivity.appendChild(itemType);
  //   divActivity.appendChild(itemName);
  //   divActivity.appendChild(itemCommit);
  //   divActivity.appendChild(itemDate);
  //   container.appendChild(divActivity);
// }