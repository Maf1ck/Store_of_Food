import { ref } from 'vue';

export const toasts = ref([]);
let nextToastId = 0;

export function showToast(message, type = 'success') {
    const id = nextToastId++;
    toasts.value.push({ id, message, type });

    setTimeout(() => {
        toasts.value = toasts.value.filter(t => t.id !== id);
    }, 3000);
}
