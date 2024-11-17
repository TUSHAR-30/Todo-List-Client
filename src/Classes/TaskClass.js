export class Task{
    constructor(title,description,isCompleted,taskCreationDate,dueDate,id){
        this.title=title;
        this.description=description;
        this.isCompleted=isCompleted;
        this.taskCreationDate=taskCreationDate;
        this.dueDate=dueDate;
        this.id=id
    }
    editTask(title,description,dueDate){
        this.title=title;
        this.description=description;
        this.dueDate=dueDate;
        return this
    }
    computeTaskId(tasks){

         // If no tasks, start IDs from 1
         if (tasks.length === 0){
            this.id=1; 
            return this;
        } 

        let maxId = tasks[0].id;
        for (let i = 1; i < tasks.length; i++) {
            if (tasks[i].id > maxId) maxId = tasks[i].id;
        }
    
        this.id=maxId + 1; // Return new ID, incremented by 1
        return this;
    }
}