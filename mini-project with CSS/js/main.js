document.title = 'Users';

const wrapDiv = document.createElement('div');
wrapDiv.classList.add('wrapperDiv');
document.body.appendChild(wrapDiv);

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const itemUser of users) {
            const userBlock = document.createElement('div');
            userBlock.classList.add('userBlock');

            wrapDiv.appendChild(userBlock);

            const userId = document.createElement('h3');
            userId.style.fontWeight = 'normal';
            userId.innerText = `ID: ${itemUser.id}`;

            const userName = document.createElement('h2');
            userName.style.fontWeight = '200';
            userName.innerText = `Name: ${itemUser.name}`;

            const buttonUser = document.createElement('button');
            buttonUser.classList.add('buttonUser');
            buttonUser.innerText = 'Детальніше про користувача';


            userBlock.append(userId, userName, buttonUser);

            buttonUser.addEventListener('mouseover', () => {
                buttonUser.style.transition = '0.2s';
                buttonUser.style.textDecoration = 'underline';
                buttonUser.style.textUnderlineOffset = '1px';
                buttonUser.style.boxShadow = '2px 2px 5px';
            })

            buttonUser.addEventListener('mouseleave', () => {
                buttonUser.style.transition = '0.2s';
                buttonUser.style.boxShadow = '';
                buttonUser.style.textDecoration = '';

            })

            buttonUser.addEventListener('click', () => {
                window.location.href = `user-details.html?user=${JSON.stringify(itemUser)}`;
            });
        }
    });



