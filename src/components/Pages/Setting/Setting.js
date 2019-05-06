export default {
    data() {
        return {
            active:0
        }
    },
    computed: {
        
    },
    methods: {
        onClickLeft:function(){
            this.$router.go(-1);
        }
    },
    created() {
        
    },  
}