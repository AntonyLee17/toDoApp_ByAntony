const toDoList = []

const formulage = document.querySelector('form')
const ul = document.querySelector('ul')
const liNumber = document.querySelector('h1 span:nth-child(3)')
const liElement = document.getElementsByClassName('task')
const input = document.querySelector('input')

const Task = (e) => {

     e.preventDefault()

     const titleTask = input.value

     if (titleTask === '') {

          alert('task must be declared!!!')

          return 0
     }

     const task = document.createElement('li')

     task.className = 'task'

     task.innerHTML = titleTask + "<button class='remove-btn'>remove</button>" + "<button class='remove-btn'>done</button>"

     toDoList.push(task)

     NumberOfTasks()

     task.classList.toggle('liElementStyle')

     ul.appendChild(task)

     input.value = ''

     liNumber.textContent = liElement.length

     task.querySelector('button').addEventListener('click', TaskRemove)

     task.querySelector('button:nth-child(2)').addEventListener('click', TaskDone)

}
const TaskDone = (e) => {

     e.target.parentNode.style.textDecoration = "line-through rgb(255, 255, 255)"

}
const TaskRemove = (e) => {

     e.target.parentNode.remove()

     const TaskIndex = e.target.parentNode.dataset.key
     toDoList.splice(TaskIndex, 1)

     if (liElement.length === 0) {
          alert('Great, u did all quests')
     }

     liNumber.textContent = liElement.length
}

const NumberOfTasks = () => {

     toDoList.forEach((toDoElement, datakey) => {
          toDoElement.dataset.datakey = datakey
          ul.appendChild(toDoElement)
     })
}

formulage.addEventListener('submit', Task)