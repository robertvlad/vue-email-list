const {
    createApp
} = Vue;

createApp({
    data() {
        return {
            mails: []
        }
    },
    methods: {

    },
    mounted() {
        for (let i=0; i<10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((risultato) => {
                this.mails.push(risultato.data.response)
            })
        }
    }
    
}).mount("#app")
