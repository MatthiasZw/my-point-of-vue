import {ref, computed, } from 'vue';

export default() => {
    const num7 = ref(0);
    const num8 = ref(0);
    const divi = computed( () => parseInt(num7.value) / parseInt(num8.value));

    return{
        num7, num8, divi,
    };
}