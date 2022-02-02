export default {
    name: "LoginApp",

    // 子元件的自訂命名、數值是來自外層資料
    // props: ['user'],

    props: {
        'user': {
            'username': {
                type: [String],
                default: 'Email',
                required: true,
            },
            'password': {
                type: [String],
                default: '******',
                required: true,
                // validator: value => value > 0
                validator(value) {
                    return value.length > 5
                }
            },

            /**
             * 指定資料格式
             * 注意：這裡無需用引號包成字串，而且首字要大寫
             * [ 同時允許 String 與 Number 型別的資料傳入 ]
             */
            type: [Object],
            // default: '這是子元件的-msg',
        }
    },

    // data() {
    //     return {


    //     }
    // },


    mounted() {
        console.log('mounted-loginApp')
    },

    // <li>{{ user.username }}</li>
    // @submit.prevent="login"
    template: `        
        <form class="login-form">
            <div class="email">
                <label for="inputEmail"></label>
                <input	type="email"
                        name="username"
                        id="inputEmail"
                        v-model.lazy="user.username"
                        v-model.trim="user.username"
                        placeholder="example@test.com"
                        required
                        autofocus
                />
            </div>

            <div class="password">
				<label for="inputPassword"></label>
				<input  type="password"
						name="password"
						id="inputPassword"
						v-model.lazy="user.password"
						v-model.trim="user.password"
						placeholder="******"
						required
						/>
			</div>

            
        </form>
    `,
    /**
     * <button type="submit" class="btn login-btn btn-success">Login</button>
     */
    /** end of template */
};