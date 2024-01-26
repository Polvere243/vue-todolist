console.log("Vue Ok", Vue);

const {createApp} = Vue;
const app = createApp ({
    data: () => ({ 
        tasks: [
            { id: 1, done: false, text: 'Fare la spesa' },
            { id: 2, done: true, text: 'Lavare i capelli' },
            { id: 3, done: false, text: 'Comprare una marca da bollo' },
            { id: 4, done: false, text: 'Aggiornare il PC' }
        ],
        newTaskText: ""
    }),
    computed: {
        
    },
    methods: {
        // metodo per cancellare i singoli task 
        deleteTask(id) {
           const filteredTasks = this.tasks.filter(task => id !== task.id)
           this.tasks = filteredTasks;
        },
        // metodo per creare un nuovo oggetto task e aggiungerlo all'array
        addNewTask() {
            if(!this.newTaskText) return;
            const newTask= {
                id: new Date().toISOString(),
                done: false,
                text: this.newTaskText 
            }
            this.tasks.push(newTask);
            this.newTaskText = "";
        },
        // metodo per invertire il booleano delle proprietà "done"
        toggleTaskDone(id) {
            this.tasks.forEach( task => {
                if (id === task.id) {
                    task.done = !task.done;
                } 
            });

        }

    
    }
})

app.mount("#root");