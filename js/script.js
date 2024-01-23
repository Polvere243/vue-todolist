console.log("Vue Ok", Vue);

const {createApp} = Vue;
const app = createApp ({
    data() { 
        return {
            tasks
        }
    }
})

app.mount("#root");