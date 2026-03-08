import { ref } from 'vue';

export interface Toast {
    id: number;
    message: string;
    type: 'success' | 'error' | 'info' | 'warning';
}

export const toasts = ref<Toast[]>([]);
let nextToastId = 0;

export function showToast(message: string, type: Toast['type'] = 'success') {
    const id = nextToastId++;
    toasts.value.push({ id, message, type });

    setTimeout(() => {
        toasts.value = toasts.value.filter(t => t.id !== id);
    }, 3000);
}
