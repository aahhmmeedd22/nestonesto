class Task {
    constructor(taskDescription) {
      this.taskDescription = taskDescription;
      this.taskId = Date.now();
    }
  }
  
  const taskList = [];
  
  while (true) {
    const userChoice = Number(prompt("Choose one task:\n 1. Add one task,\n 2. See all tasks,\n 3. Chenge task,\n 4. Delete task,\n 0. Leave"));
  
    switch (userChoice) {
      case 1:
        const descriptionInput = prompt("Enter task description:");
        const newTask = new Task(descriptionInput);
        taskList.push(newTask);
        localStorage.setItem(taskList.length - 1, descriptionInput);
        console.log('Task added:', newTask);
        break;
      case 2:
        if (taskList.length === 0) {
          console.log('No saved tasks.');
        } else {
          console.log('All tasks:');
          taskList.forEach((task, index) => {
            console.log(`ID: ${index}, Description: ${task.taskDescription}`);
          });
        }
        break;
      case 3:
        const editIndex = prompt("Enter task number to edit:");
        const taskToEdit = taskList[editIndex];
        if (taskToEdit) {
          const newDescriptionEdit = prompt(`Enter new description for task number ${editIndex}:`);
          taskToEdit.taskDescription = newDescriptionEdit;
          localStorage.setItem(editIndex, newDescriptionEdit);
          console.log('Task edited:', taskToEdit);
        } else {
          console.log('Task with the entered number does not exist.');
        }
        break;
      case 4:
        const deleteIndex = prompt("Enter task number to delete:");
        const taskToDelete = taskList[deleteIndex];
        if (taskToDelete) {
          localStorage.removeItem(deleteIndex);
          taskList.splice(deleteIndex, 1);
          console.log('Task deleted:', taskToDelete);
        } else {
          console.log('Task with the entered number does not exist.');
        }
        break;
      case 0:
        console.log('Exiting the task manager.');
        break;
      default:
        console.log('Unknown option. Please try again.');
    }
  
    if (userChoice === 0) {
      break;
    }
  }
  
  console.log('Tasks:', taskList);  