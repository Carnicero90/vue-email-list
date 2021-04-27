var app = new Vue({
    el: '#root',
    data: {
        mailArr: [],
    },
    methods: {},
    created() { },
    mounted() {
        
        for (let i=0; i< 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response)=> this.mailArr.push(response.data.response))
        }
    }
})

/* 
 * function (detailed!) description
 *
 * @param  || description
 * @param  || description
 * 
 * @return || description
*/
