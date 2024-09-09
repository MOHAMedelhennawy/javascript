let container = document.createElement('div');
let form = document.createElement('form')
let input = document.createElement('input');
let btn = document.createElement('button');
let list = document.createElement('ul');

container.className = 'container';
input.placeholder = 'Add new...';
btn.innerText = 'ADD';
list.className = 'list'

form.appendChild(input)
form.appendChild(btn)
container.appendChild(form)
document.body.appendChild(container)
document.body.appendChild(list)

const removeElement = el => {
    el.remove()
}

const toggleStrikeThrough = check => {
    const listItem = check.parentElement;
    console.log(listItem)
    if (check.checked) {
        listItem.style.textDecoration = 'line-through';
    } else {
        listItem.style.textDecoration = 'none';
    }
}

const createNewElement = () => {
    let item = document.createElement('div');
    let buttons = document.createElement('div');
    let newListElement = document.createElement('li');
    let checkBox = document.createElement('input');
    let deleteButton = document.createElement('button');

    if (input.value !== '' && input.value !== undefined) {
        checkBox.type = 'checkbox'
        checkBox.onchange = () => toggleStrikeThrough(checkBox);
        newListElement.appendChild(checkBox);
        newListElement.append(input.value);
        input.value = ''
    }

    deleteButton.innerText = 'Delete'

    item.appendChild(newListElement)
    buttons.appendChild(deleteButton)
    item.appendChild(buttons)
    deleteButton.onclick  = removeElement.bind(null, item)

    newListElement.style.listStyleType = 'none'
    buttons.style.display = 'flex'
    buttons.style.gap = '5px'
    item.style.width = '100%';
    item.style.display = 'flex'
    item.style.justifyContent = 'space-between'

    deleteButton.style.background = 'rgb(227, 36, 36)'
    deleteButton.style.border = 'none'
    deleteButton.style.color = 'white'
    deleteButton.style.borderRadius = '5px'
    deleteButton.style.fontSize = '9px'
    deleteButton.style.width = 'auto'
    deleteButton.style.height = '15px'
    deleteButton.style.cursor = 'pointer'
    
    return item
}

form.onsubmit =  event => {
    event.preventDefault();
    let newListElement = createNewElement();
    list.appendChild(newListElement)
}


// styling
container.style.textAlign = 'center'

form.style.background = '#424242'
form.style.display = 'flex'
form.style.justifyContent = 'space-between'
form.style.width = '50%'
form.style.margin = 'auto'
form.style.padding = '14px'
form.style.borderRadius = '20px'

input.style.background = '#303030'
input.style.border = 'none'
input.style.color = 'rgb(232, 232, 232)'
input.style.fontSize = '8px'
input.style.fontWeight = '400'
input.style.width = '62%'
input.style.paddingLeft = '5px'

btn.style.border = 'none'
btn.style.background = '#3b71ca'
btn.style.fontSize = '6px'
btn.style.fontWeight = '700'
btn.style.padding = '5px'
btn.style.width = '15%'
btn.style.color = 'white'
btn.style.borderRadius = '5px'
btn.style.cursor = 'pointer'

list.style.width = '54%'
list.style.display = 'flex'
list.style.flexDirection = 'column'
list.style.alignItems = 'flex-start'
list.style.margin = 'auto'