import { faker } from 'https://esm.sh/@faker-js/faker';

function createCards(username='undefiend', userAge='undefiend') {
    let container = document.createElement('div');
    document.body.appendChild(container);
    container.style.textAlign = 'center';

    function createElements() {
        let card = document.createElement('div');
        let title = document.createElement('h1');
        let age = document.createElement('p');
        let image = document.createElement('img');
        
        let titleContent = document.createTextNode(username);
        let ageContent = document.createTextNode(userAge);
        
        image.src = 'jquery.jpg';
        title.appendChild(titleContent);
        age.appendChild(ageContent);

        card.appendChild(title)
        card.appendChild(age)
        card.appendChild(image)
        container.appendChild(card)

        function styling() {
            container.style.display = 'inline-block'
            image.style.width = '100%'
            card.style.width = '300px';
            card.style.background = '#333'
            card.style.padding = '20px';
            card.style.margin = '5px'
            title.style.color = 'white'
            age.style.color = 'white'


        }

        styling()
    }

    createElements()
}
for (let i = 0; i < 100; i++) {
    const randomName = faker.person.firstName();
    const randomage = faker.number.int(80);
    createCards(randomName, randomage)
}