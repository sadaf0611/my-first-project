//Examin the document object
//console.dir(document)
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title= 123;
//console.log(document.doctype);
//console.log(document.head);
///console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//document.all[10].textContent='hello';
//console.log(document.forms);
//console.log(document.links);

// getelementByID
console.log(document.getElementById('header-title'));
var headerTitle=document.getElementById('header-title');
console.log(headerTitle);
headerTitle.textContent='Hello';
headerTitle.innerText='Good Bye';

// console.log(headerTitle.textContent);
//console.log(headerTitle.innerText);
// headerTitle.innerHTML='<h3>header 3 </h3>';
// headerTitle.style.borderBottom='solid 3px black';
// header.style.borderBottom='solid 3px black';

var items=document.getElementsByClassName("list-group-item");
console.log(items);
console.log(items[1]);
items[1].textContent='hello';
items[1].style.fontWeight='bold'; 
items[3].style.backgroundColor='green';

for(var i=0;i<items.length;i++)
{
    items[i].style.fontWeight='bold'; 
} 

//list li

var items=document.getElementsByTagName("li");
console.log(items);
console.log(items[1]);
li[1].textContent='hello';
li[1].style.fontWeight='bold'; 
li[3].style.backgroundColor='green';

for(var i=0;i<li.length;i++)
{
    li[i].style.fontWeight='bold'; 
} 
// var items=document.getElementsByTagName("li");
// items[1].style.backgroundColor='green';
// items[2].style.color='white';

var item = document.querySelector('.list-group-item:nth-child(2)');
item.style.color='green';

var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='green'; 
}
