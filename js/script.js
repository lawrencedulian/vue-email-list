const { createApp } = Vue;

createApp ({
    data() {
        return {
            newMail: [],
        };
    },
    methods: {
        getEmail: function () {
        const arrayMail = []
        for (let i=0; i < 10; i++) {
            arrayMail.push(axios.get("https://flynn.boolean.careers/exercises/api/random/mail"));
            console.log(arrayMail);
        }
        for (let i=0; i<10; i++) {
            Promise.all(arrayMail)
            .then((resp) => {
                this.newMail.push(resp[i].data.response)
            })
        }}
    },
    created () {
        this.getEmail()
    }
}).mount("#app");

