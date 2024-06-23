let todos=[];
let ans = document.getElementsByClassName("todo")[0];
let button=document.getElementById("sub");
window.onload=()=>
    {
        todos=JSON.parse(localStorage.getItem("todo"))||[];
        console.log(todos);
        todos.forEach(todo1 => {
        console.log(todo1);
        add(todo1);


            
        })
        
    };

button.addEventListener("click",()=>{
    todos.push(ans.value);
    localStorage.setItem('todo',JSON.stringify(todos));
    let ans2=ans.value;
    ans.value="";
    add(ans2);




})
function add(ans)
{
  
    console.log(ans);

    // Create form element
    var form = document.createElement('form');
    form.setAttribute('class', 'c1');
    
    // Create textarea element
    var inputtext = document.createElement('textarea');
    inputtext.setAttribute('class', 'todo1');
   
    inputtext.value=ans;
    

    
    console.log(todos);
    ans="";
    inputtext.setAttribute('readonly', true);
    form.appendChild(inputtext);
    
    // Find the div with class "main2_child"
    
    
    var div1 = document.createElement("div");
    div1.setAttribute("class","main2_child");
    div1.appendChild(form);
    
    // Create checkbox element
    var checkbox1 = document.createElement('input');
    checkbox1.setAttribute('type', 'checkbox');
    checkbox1.setAttribute('id', 'check');
    checkbox1.addEventListener('change',function(){
        check(checkbox1,inputtext.value);
    });
    div1.appendChild(checkbox1);
    var editIcon = document.createElement('i');
    editIcon.setAttribute('class', 'fas fa-edit');
    editIcon.style.marginLeft = '20px';
    editIcon.style.marginTop='18px';
    div1.appendChild(editIcon);
    editIcon.addEventListener('click', function() {
        editTask(inputtext);
    });
    var trashIcon = document.createElement('i');
    trashIcon.setAttribute('class', 'fas fa-trash');
    trashIcon.style.marginTop='18px';
    trashIcon.style.marginLeft = '30px';

   
    div1.appendChild(trashIcon);
    trashIcon.addEventListener('click', function() {
        TrashTask(div1,inputtext.value);

    });


    
    // Find the div with class "main2"
    var div2 = document.getElementsByClassName('main2')[0];
    div2.appendChild(div1);
    
    // Set the value of the textarea
   
    


    








}
function check(checkbox,inputtext)
{
    console.log(inputtext);
  
   if(checkbox.checked)
    {
        let parentDiv = checkbox.closest('.main2_child');
        if (parentDiv) {
            parentDiv.remove();
        }


    }
    
    let index=todos.indexOf(inputtext);
    console.log(index);
    todos.splice(index,1);
    localStorage.setItem('todo',JSON.stringify(todos));


    console.log(todos);




}
function editTask(inputtext)
{
    let index=todos.indexOf(inputtext.value);

    inputtext.removeAttribute('readonly');
    inputtext.focus();
    

    inputtext.addEventListener('blur', function() {
        inputtext.setAttribute('readonly', true);
        todos[index]=inputtext.value;
        console.log(todos);
        localStorage.setItem('todo',JSON.stringify(todos));
    });
    

}
function TrashTask(parentDiv,inputtext)
{
    let index=todos.indexOf(inputtext)

    
    if (parentDiv) {
        parentDiv.remove();
    }

todos.splice(index,1);

console.log(todos);

localStorage.setItem('todo',JSON.stringify(todos));




}