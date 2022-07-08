const app = Vue.createApp({
    data() {
        return {
            text: ""
        }
    },
    methods: {
        RandomColors() {
              document.getElementById("texto").style.color = '#'+Math.floor(Math.random()*16777215).toString(16);
    }
}
})

app.mount('#app');
