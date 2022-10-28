const input = document.querySelector('input')
const h2 = document.querySelector('h2')

// put it here bcoz javascript willl read from top to bottom

h2.innerHTML = localStorage.getItem("value")


input.addEventListener("keyup", display)

function display() {
    localStorage.setItem('value', input.value)
    h2.innerHTML = localStorage.getItem("value")
}

window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form')
    const input = document.querySelector('#new-task-input')
    const list_el = document.querySelector('#tasks')
    form.addEventListener('submit', (e) => {
        e.preventDefault()

        const task = input.value

        if (!task) {

            alert("please fill them out")

            return;

        }
        const task_el = document.createElement("div")
        task_el.classList.add('task')


        const task_content = document.createElement("div")
        task_content.classList.add("content")

        task_el.appendChild(task_content)


        const tasks_input = document.createElement('input')
        tasks_input.classList.add('text')
        tasks_input.type = 'text'
        tasks_input.value = task
        tasks_input.setAttribute('readonly', 'readonly')

        task_content.appendChild(tasks_input)

        const task_action = document.createElement('div')
        task_action.classList.add('actions')

        const task_edit = document.createElement('button')
        task_edit.classList.add('edit')
        task_edit.innerHTML = 'Edit'

        const task_delete = document.createElement('button')
        task_delete.classList.add('delete')
        task_delete.innerHTML = 'Delete'


        task_action.appendChild(task_delete)
        task_action.appendChild(task_edit)

        task_el.appendChild(task_action)

        list_el.appendChild(task_el)

        input.value = "";


        task_edit.addEventListener('click', () => {
            if (task_edit.innerText.toLowerCase() == "edit") {
                tasks_input.removeAttribute("readonly")
                tasks_input.focus()
                task_edit.innerText = "save"
            } else {
                tasks_input.setAttribute("readonly", "readonly")
                task_edit.innerText = "edit"
            }
        })
        task_delete.addEventListener('click', () => {
            list_el.removeChild(task_el)
        })

    })
})