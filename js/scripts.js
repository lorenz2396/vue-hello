const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            text: 'Hello World!',
            imageUrl: 'img/03.webp'
        }
    },

});

console.log(app);

app.mount('#testo-hello');
