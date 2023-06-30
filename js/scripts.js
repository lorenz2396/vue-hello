const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            text: 'Hello World!'
        }
    },

});

console.log(app);

app.mount('#testo-hello');
