document.getElementById('loadUsers').addEventListener('click', function() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        displayfunc(data);
    })
    .catch(error => {
        console.error('Error fetching users:', error);
    });
});

function displayfunc(users) {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';
    
    users.forEach(element => {
        const listItem = document.createElement('li');
        listItem.textContent = `${element.name} - ${element.email}`;
        userList.appendChild(listItem);
    });
}
