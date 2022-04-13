import * as Vue from 'vue/dist/vue.esm-bundler.js'

const Num = {
    props: ['number'],
    template: `
    <button
        v-bind:class="getClass(number)"
        @click="click"
    >
        {{ number }}
    </button>
    `,
    methods: {
        click() {
            this.$emit('chosen', this.number)
        },
        isEven(val) {
            return val % 2 === 0
        },
        getClass(number) {
            return this.isEven(number) ? 'blue': 'red'
        }
    }
}
const app = Vue.createApp({
    components: {
        Num
    },
    template: `
    <num 
        v-for="number in numbers"
        :number="number"
        v-on:chosen="addNumber"> 
    </num>
    <hr/>
    <num 
        v-for="number in numberHistory"
        :number="number"> 
    </num>
    `,

    data() {
        return {
            numbers: [1,2,3,4,5,6,7,8,9,10],
            numberHistory: []
        }
    },

    computed: {
        evenList() {
            return this.numbers.filter(num => this.isEven(num))
        }
    },
    methods: {
        addNumber(number) {
            this.numberHistory.push(number)
        }
    }
})
app.mount("#app")