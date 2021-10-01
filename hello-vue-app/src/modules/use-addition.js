import {ref, computed, } from 'vue';

export default() => {
    const num1 = ref(0);
    const num2 = ref(0);
    const sum = computed( () => parseInt(num1.value) + parseInt(num2.value));

    return{
        num1, num2, sum,
    };
}