import LogModalVue from "/src/components/LoginModal.js";
/** end of import */

export default {
    name: "DeskAppJS",

    components: {
        'login-modal': LogModalVue,
    },
    /**
     * 【模板格式】
     * :先綁定內層子元素的命名="外面變數的命名"
     * class="alert alert-info" role="alert"
     */
    template: `              
        <login-modal  

        ></login-modal>
    `,
    /** end of template */


    created() {
        console.log("created-DeskAppJS");
    },
    mounted() {
        console.log("mounted-DeskAppJS");
    },
    /** end of mounted() */

};
/** end of export-default */
