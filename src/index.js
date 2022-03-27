import * as Vue from 'vue/dist/vue.esm-bundler.js'

const app = Vue.createApp({
    template: `
    <button @click="increment">Increment</button>
    <p> {{ count }} </p>

    <div v-for="number in evenList">
        {{ number }} 
    </div>

    <div v-if="isEven()"> Even</div>
    <div v-else> Odd</div>
    `,

    data() {
        return {
            count: 0,
            numbers: [1,2,3,4,5,6,7,8,9,10]
        }
    },

    computed: {
        evenList() {
            return this.numbers.filter(num => this.isEven(num))
        }
    },
    methods: {
        increment() {
            this.count += 1
        },
        isEven(val) {
            return val % 2 === 0
        }
    }
})
app.mount("#app")