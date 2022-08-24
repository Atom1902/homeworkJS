

const url = new URL(window.location.href);

const urlUser = url.searchParams.get('user');

const user = JSON.parse(urlUser);

document.title = `Posts ${user.name}`;

const wrapDetailsDiv = document.createElement('div');
wrapDetailsDiv.classList.add('wrapperDetail');

document.body.appendChild(wrapDetailsDiv);


const userBlockDetails = document.createElement('div');
userBlockDetails.classList.add('userBlockDetails');

wrapDetailsDiv.appendChild(userBlockDetails);

const leftUserBlock = document.createElement('div');
const centerUserBlock = document.createElement('div');
const rightUserBlock = document.createElement('div');

const topBlockUser = document.createElement('div');
topBlockUser.style.display = 'flex';
topBlockUser.style.justifyContent = 'space-around';

const bottomBlockUser = document.createElement('div');
bottomBlockUser.style.display = 'flex';
bottomBlockUser.style.justifyContent = 'center'

const postsBlock = document.createElement('div');
postsBlock.classList.add('postsBlock');


userBlockDetails.append(topBlockUser, bottomBlockUser, postsBlock);

topBlockUser.append(leftUserBlock, centerUserBlock, rightUserBlock);

const userInfo = document.createElement('h2');
userInfo.innerText = 'User info';

const userInfoBlock = document.createElement('div');

const userId = document.createElement('h3');
userId.style.fontWeight = 'normal';
userId.innerText = `ID: ${user.id}`;

const userName = document.createElement('h2');
userName.style.fontWeight = '200';
userName.innerText = `Name: ${user.name}`;

const userUsername = document.createElement('h3');
userUsername.style.fontWeight = '200';
userUsername.innerText = `Username: ${user.username}`;

const userEmail = document.createElement('h4');
userEmail.style.fontWeight = '200';
userEmail.innerText = `Email: ${user.email}`;

const userPhone = document.createElement('h3');
userPhone.style.fontWeight = '200';
userPhone.innerText = `Phone: ${user.phone}`;

const userWebsite = document.createElement('h4');
userWebsite.style.fontWeight = '200';
userWebsite.innerText = `Website: ${user.website}`;

const userAddressBlock = document.createElement('div');

const userAddress = document.createElement('h2');
userAddress.innerText = 'Address';

centerUserBlock.append(userAddress, userAddressBlock);

const userAddressZipcode = document.createElement('h3');
userAddressZipcode.style.fontWeight = '200';
userAddressZipcode.innerText = `Zipcode: ${user.address.zipcode}`;

const userAddressSuite = document.createElement('h3');
userAddressSuite.style.fontWeight = '200';
userAddressSuite.innerText = `Suite: ${user.address.suite}`;

const userAddressCity = document.createElement('h3');
userAddressCity.style.fontWeight = '200';
userAddressCity.innerText = `City: ${user.address.city}`;

const userAddressGeo = document.createElement('h3');
userAddressGeo.style.fontWeight = '200';
userAddressGeo.innerText = `Geo: ${user.address.geo.lat}, ${user.address.geo.lng}`;


userAddressBlock.append(userAddressZipcode, userAddressSuite, userAddressCity, userAddressGeo);


const userCompany = document.createElement('h2');
userCompany.innerText = 'Company';

const userCompanyBlock = document.createElement('div');

const userCompanyName = document.createElement('h2');
userCompanyName.style.fontWeight = '200';
userCompanyName.innerText = `${user.company.name}`;

const userCompanyCatchPhase = document.createElement('h3');
userCompanyCatchPhase.style.fontWeight = '200';
userCompanyCatchPhase.innerText = `Catch phase: ${user.company.catchPhrase}`;

const userCompanyBS = document.createElement('h3');
userCompanyBS.style.fontWeight = '200';
userCompanyBS.innerText = `Bs: ${user.company.bs}`;

userCompanyBlock.append(userCompanyName, userCompanyCatchPhase, userCompanyBS);

rightUserBlock.append(userCompany, userCompanyBlock);


const buttonUserDetails = document.createElement('button');
buttonUserDetails.classList.add('buttonUserDetails');
buttonUserDetails.innerText = 'Показати пости поточного користувача';


leftUserBlock.append(userInfo, userInfoBlock);
userInfoBlock.append(userId, userName, userUsername, userEmail, userPhone, userWebsite);

buttonUserDetails.addEventListener('mouseover', () => {
    buttonUserDetails.style.transition = '0.2s';
    buttonUserDetails.style.textDecoration = 'underline';
    buttonUserDetails.style.textUnderlineOffset = '1px';
    buttonUserDetails.style.boxShadow = '2px 2px 5px';
});

buttonUserDetails.addEventListener('mouseleave', () => {
    buttonUserDetails.style.transition = '0.2s';
    buttonUserDetails.style.boxShadow = '';
    buttonUserDetails.style.textDecoration = '';

});


fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
    .then(response => response.json())
    .then(posts => {
        for (const post of posts) {

            const postBlock = document.createElement('div');
            postBlock.classList.add('postBlock');


            postsBlock.append(postBlock);

            const titlePost = document.createElement('p');
            titlePost.innerText = `${post.title}`;

            const buttonPost = document.createElement('button');
            buttonPost.classList.add('buttonPost');
            buttonPost.innerText = 'Детальніше про пост';

            postBlock.append(titlePost, buttonPost);

            buttonPost.addEventListener('mouseover', () => {
                buttonPost.style.transition = '0.2s';
                buttonPost.style.textDecoration = 'underline';
                buttonPost.style.textUnderlineOffset = '1px';
                buttonPost.style.boxShadow = '1px 1px 3px';
            });

            buttonPost.addEventListener('mouseleave', () => {
                buttonPost.style.transition = '0.2s';
                buttonPost.style.boxShadow = '';
                buttonPost.style.textDecoration = '';

            });

            buttonPost.addEventListener('click', () => {
                window.location.href=`post-details.html?post=${JSON.stringify(post)}`;
            });
        }

        let click = false;

        buttonUserDetails.addEventListener('click', () => {

                postsBlock.style.display = 'flex';
                click = false;
                buttonUserDetails.innerText = 'Показати пости поточного користувача';


        });

    });


bottomBlockUser.appendChild(buttonUserDetails);





