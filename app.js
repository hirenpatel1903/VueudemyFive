const app = Vue.createApp({
    data() {
        return {
            detailsAreVisible: false,
            friends: [{
                    id: 'Hiren',
                    name: 'Hiren Patel',
                    phone: '+919726977958',
                    email: 'patelhiren.hp19@gmail.com',
                },
                {
                    id: 'Archana',
                    name: 'Archana Patel',
                    phone: '+919726977123',
                    email: 'patelarchana.ap19@gmail.com',
                },
            ],
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    },
});

app.mount('#app');