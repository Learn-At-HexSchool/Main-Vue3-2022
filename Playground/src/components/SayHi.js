export default {
    name: "SayApp",

    // data() {
    //     return {
    //         msg: '這是子元件的-msg'
    //     }
    // },
    /** end of data() */

    // props: ["parentTxt"],
    props: {
        'msg': {
            /**
             * 指定資料格式
             * 注意：這裡無需用引號包成字串，而且首字要大寫
             * [ 同時允許 String 與 Number 型別的資料傳入 ]
             */
            type: [String, Number],
            default: '這是子元件的-msg',
        }
    },

    template: `  
        <h1>{{ msg }}</h1>
    `,
    /** end of template */
};