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