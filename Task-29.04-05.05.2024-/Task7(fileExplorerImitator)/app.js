let currentFolderName = document.getElementById("folderName")
let Ul = document.getElementById('root')
let Child = document.getElementById('child')
let parent = document.getElementById('parent')

let rootElement = Ul

function createFolder() {
    if(currentFolderName.value == ""){
        alert("Invalid input")
    }
    else{
        const li = document.createElement('li')
        const i = document.createElement('i')
        const I = document.createElement('i')
        const span = document.createElement('span')

        i.classList.add("bi-folder2-open",'bi')
      
        span.textContent = currentFolderName.value;
        li.appendChild(i)
        li.appendChild(span);
        rootElement.appendChild(li)

        i.addEventListener('click',function (e) {
            rootElement = Child
            Ul.style.display = 'none';
            Child.style.display = 'block'
            
            parent.innerText = e.target.nextElementSibling.innerText
            

        })

    }
    currentFolderName.value  = ""
}

