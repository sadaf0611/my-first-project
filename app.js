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
items[1].style.backgroundColor='yellow';

for(var i=0;i<items.length;i++)
{
    items[i].style.backgroundColor='pink'; 
}
items[2].style.backgroundColor='pink'; 
