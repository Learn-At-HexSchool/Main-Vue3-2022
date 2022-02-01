import { createApp } from '/node_modules/vue/dist/vue.esm-bundler.js';
// import { createApp } from 'vue/dist/vue.esm-bundler';
// import { createApp } from 'vue'

import TodoVue from "/src/components/TodoItem.js";
import SayHiVue from "/src/components/SayHi.js";
// import HelloWorldVue from "/src/components/HelloWorld.vue";

/** end of import */


const app = createApp({
    data() {
        return {
            text: '【Outer-text】_Hi!',

            productsList: [
                { id: 0, text: 'A', },
                { id: 1, text: 'B', },
            ]
        }
    },
    /** end of data() */

    components: {
        'todo-item': TodoVue,

        'say-hi': SayHiVue,

        // HelloWorld: HelloWorldVue,
    },
    /** end of components: */

    mounted() {
        console.log('mounted-mainApp');

    },
    /** end of mounted() */

    template: `  
        <ol class="alert alert-info" role="alert">
            <todo-item
                v-for="item in productsList"
                :todo="item" :key="item.id"
            ></todo-item>
        </ol>

        <div class="alert alert-primary" role="alert">
            {{ text }}  
            <say-hi :msg ='text' />
        </div>

        <div class="alert alert-warning" role="alert">                        
            <say-hi msg ='text'></say-hi>            
        </div>

        <section class="alert alert-dark" role="alert">
            <say-hi msg ="Hi!!!" />
        </section>
        
        <img alt="Vue logo" src="/src/assets/logo.png" />

    `,
    /** end of template */
})

app.mount('#app')
