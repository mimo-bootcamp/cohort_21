const todos = [
    {
        userId: 1,
        id: 0,
        emoji: '🏃',
        title: "go running ",
        completed : true
    },
    {
        userId: 1,
        id: 1,
        emoji: '🏃',
        title: "take cold shower",
        completed : false
    },
    {
        userId: 1,
        id: 2,
        emoji: '🏃',
        title: "cook dinner",
        completed : true
    },
    {
        userId: 1,
        id: 3,
        emoji: '🏃',
        title: "wash the dishes",
        completed : false
    },
    {
        userId: 1,
        id: 4,
        emoji: '🏃',
        title: "do the homework",
        completed : true
    },

];

const taskContainer = document.querySelector('#the-one');
const taskInput = document.querySelector('.task-input');
const emojiInput = document.querySelector('.emoji-input');

function renderTask(emoji, title, completed  ) {
    const taskCard = document.createElement('li'); 
    taskCard.className = 'card'
    taskCard.innerHTML =`
    <p>${emoji}</p> 
    <p>${title}</p>
    <input type="checkbox" ${completed ? 'checked': '' } >
    `
    taskContainer.appendChild(taskCard) 
}

for(let i = 0 ;i < todos.length; i++) {
    renderTask(todos[i].emoji,todos[i].title,todos[i].completed)
}

function addTask() {
    if(taskInput.value !== '') {
        renderTask(emojiInput.value,taskInput.value, false )
        taskInput.value = '';
    }
}