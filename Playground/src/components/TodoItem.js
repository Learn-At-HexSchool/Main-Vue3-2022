export default {
    name: "TodoApp",

    props: ['todo'],

    template: `  
        <li>{{ todo.text }}</li>
    `,
    /** end of template */
};