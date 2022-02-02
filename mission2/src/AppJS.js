import LoginVue from "/src/components/LoginCard.js";
/** end of import */


export default {
    name: "AppJS",

    data() {
        return {
            user: {
                username: '',
                password: '',
            },
        }
    },

    components: {
        'login-card': LoginVue,
    },

    /**
     * 【模板格式】
     * :先綁定內層子元素的命名="外面變數的命名"
     * class="alert alert-info" role="alert"
     */
    template: `  
        <login-card  id="login-card"  
            :user="user"   

        ></login-card>

    `,
    /** end of template */


    created() {
        console.log("created-AppJS");
    },
    mounted() {
        console.log("mounted-AppJS");
    },
};