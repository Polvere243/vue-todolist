console.log("Vue Ok", Vue);

const {createApp} = Vue;
const app = createApp ({
    data: () => ({ 
        tasks: [
            { id: 1, done: false, text: 'Fare la spesa' },
            { id: 2, done: true, text: 'Lavare i capelli' },
            { id: 3, done: false, text: 'Comprare una marca da bollo' },
            { id: 4, done: false, text: 'Aggiornare il PC' }
        ]
    }),
    computed: {
        isTaskDone(id) {
            this.task.done === true
        }
    },
    methods: {
        deleteTask(id) {
           const filteredTasks = this.tasks.filter(task => id !== task.id
           )
           this.tasks = filteredTasks;
        }
    }
})

app.mount("#root");