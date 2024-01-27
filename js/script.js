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
        newTaskText: "",
        searchText:""
    }),
    computed: {
        // filtro per confrontare in tempo reale il testo nella barra di ricerca col valore degli elementi
        filteredTasks() {
            const searchTerm = this.searchText.toLowerCase();
            return this.tasks.filter(task => 
                task.text.toLowerCase().includes(searchTerm)
                );
            
        }

    },
    methods: {
        // metodo per cancellare i singoli task 
        deleteTask(id) {
           const lessTasks = this.tasks.filter(task => id !== task.id)
           this.tasks = lessTasks;
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
        },

        // metodo per cambiare tutti i valori del done all'occorrenza
        setAllAsBoh(status) {
            this.tasks.forEach(task => {
                task.done = status;
            })
        },
        // metodo per svuotare la lista
        clearList() {
            this.tasks = [];
        }

    
    }
})

app.mount("#root");