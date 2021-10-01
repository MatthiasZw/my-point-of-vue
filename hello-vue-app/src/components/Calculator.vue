<template>
    <h3>Calculator</h3>
    <form>
        <input type="number" v-model="num1">
        <input type="number" v-model="num2">
    </form>
    <p>Result: {{ sum }} </p>
    <p><strong>{{ fact }}</strong></p>
</template>

<script>

import useAddition from '@/modules/use-addition';
import useApi from '@/modules/use-api';


export default{
    /* Vue Version 2 */
   /*  data(){
        return {
            num1: 0,
            num2: 0,
            sum: 0,
        };
    }, 
    methods:{
        add: function(){
            this.sum = parseInt(this.num1, 10) + parseInt(this.num2, 10);
        }
    } */

    /* Vue Version 3 */

    setup(){
        const {num1, num2, sum }= useAddition();
        const {fact} = useApi(sum);
       
        return {
            num1,
            num2,
            sum,
            fact,
            
        };
    },
};

</script>

<style scoped>

</style>
