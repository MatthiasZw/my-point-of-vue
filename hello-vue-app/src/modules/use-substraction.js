import {ref, computed, } from 'vue';

export default() => {
    const num3 = ref(0);
    const num4 = ref(0);
    const dif = computed( () => parseInt(num3.value) - parseInt(num4.value));

    return{
        num3, num4, dif,
    };
}