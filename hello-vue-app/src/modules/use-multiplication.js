import {ref, computed, } from 'vue';

export default() => {
    const num5 = ref(0);
    const num6 = ref(0);
    const multi = computed( () => parseInt(num5.value) * parseInt(num6.value));

    return{
        num5, num6, multi,
    };
}