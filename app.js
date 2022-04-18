const app = Vue.createApp({
    data() {
        return {
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
    }
});

app.component('frined-contact', {
    template: `
        <li>
            <h2>{{ friend.name }}</h2>
            <button @click="toggleDetails(friend.id)">{{ detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
            <ul v-if="detailsAreVisible">
                <li><strong>Phone:</strong> {{ friend.phone }}</li>
                <li><strong>Email:</strong> {{ friend.email }}</li>
            </ul>
        </li>`,
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: 'Hiren',
                name: 'Hiren Patel',
                phone: '+919726977958',
                email: 'patelhiren.hp19@gmail.com',
            },
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
    },
});
app.mount('#app');