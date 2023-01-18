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
// parent child nodes

// var itemList = document.querySelector("#items");
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// parent Element

  var itemList = document.querySelector("#items");
// console.log(itemList.parentElement);
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

//child node

// console.log(itemList.childNodes);
// console.log(itemList.children);
// itemList.children[1].style.color='red';

// // first child
// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);

// itemList.lastElementChild.textContent='last element changed';

// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);

// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='green';

//create element

var newDiv=document.createElement('div');
newDiv.className='divDesign';
newDiv.id='myDiv';
newDiv.setAttribute('title','divTitle');
var dtext=document.createTextNode('Hello');
newDiv.appendChild(dtext);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

newDiv.style.fontSize='40px';
console.log(newDiv);
container.insertBefore(newDiv,h1);

parentNode=document.getElementById('items');
parentNode.innerHTML='<li class="list-group-item">Hello</li>'+parentNode.innerHTML;

var itemList = document.querySelector("#items");
var form=document.getElementById('addForm');
var filter=document.getElementById('filter');

form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItems)

function addItem(e){
    e.preventDefault();

    var newItem=document.getElementById('item').value;
    var newItem2=document.getElementById('itemDetails').value;
    var li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(newItem2));
    var addBtn=document.createElement('button');
    addBtn.className='btn btn-danger btn-sm float-right delete';
    addBtn.appendChild(document.createTextNode('X'));
    li.appendChild(addBtn);

    itemList.appendChild(li);
    
    // save data on local storage
    localStorage.setItem(newItem,newItem2);
}

function removeItem(e)
{
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }   
}

function filterItems(e)
{
    var text=e.target.value.toLowerCase();
    var items=document.getElementsByTagName('li');
    Array.from(items).forEach(function(items){
        var itemName=items.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!= -1){
            items.style.display='block'; 
        }
        else{
            items.style.display='none';
        }
    });
}
