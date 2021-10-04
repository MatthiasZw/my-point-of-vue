<template>
    <h3>Calculator</h3>
    <form>
        <input type="number" v-model="num1">
        <input type="number" v-model="num2">
      </form>
        <p>Result sum: {{ sum }} </p>
        <p>Result diff: {{diff}}</p>
        <p>Result mul: {{mul}}</p>
        <p>Result div: {{div}}</p>
        <p><strong>{{ fact }}</strong></p>
        <hr>
        <h2>Separate Module</h2>
        <h3>Differenz</h3>
      <form>  
        <input type="number" v-model="num3">
        <input type="number" v-model="num4">
    </form>
    <p>Result dif: {{dif}}</p>

    <h3>Multiplikation</h3>

    <form>  
        <input type="number" v-model="num5">
        <input type="number" v-model="num6">
    </form>
    <p>Result multi: {{multi}}</p>

    <h3>Division</h3>
      <form>  
        <input type="number" v-model="num7">
        <input type="number" v-model="num8">
    </form>
    <p>Result dif: {{divi}}</p>

    
   
</template>

<script>

import useAddition from '@/modules/use-addition';
import useSubstraction from '@/modules/use-substraction';
import useMultiplication from '@/modules/use-multiplication';
import useDivision from '@/modules/use-division';
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
        const {num1, num2, sum, diff, mul, div, }= useAddition();
        const {num3, num4, dif} = useSubstraction();
        const {num5, num6, multi} = useMultiplication();
        const {num7, num8, divi} = useDivision();
        const {fact} = useApi(sum);
       
        return {
            num1,
            num2,
            num3,
            num4,
            num5,
            num6,
            num7, 
            num8,
            sum,
            dif,
            div,
            divi,
            mul,
            multi,
            diff,
            fact,
            
        };
    },
};

</script>