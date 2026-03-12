<script lang="ts" setup>
defineProps<{
    isOpen: boolean;
    title?: string;
    subtitle?: string;
}>();

const emit = defineEmits<{
    close: [];
    confirm: [];
}>();
</script>

<template lang="pug">
Teleport(to="body")
    Transition(name="modal")
        .modal-overlay(v-if="isOpen" @click.self="emit('close')")
            .modal
                button.modal__close(@click="emit('close')") ×

                .modal__header
                    h2.modal__title
                        slot(name="title") {{ title }}
                    p.modal__subtitle(v-if="$slots.subtitle || subtitle")
                        slot(name="subtitle") {{ subtitle }}

                .modal__body
                    slot

                .modal__actions
                    slot(name="actions")
                        button.modal__btn-secondary(@click="emit('close')") Скасувати
                        button.modal__btn-primary(@click="emit('confirm')") Підтвердити
</template>

<style lang="scss" scoped>
.modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 20px;
}

.modal {
    background: #fff;
    max-width: 520px;
    width: 100%;
    padding: 48px 40px 40px;
    position: relative;
    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.14);

    &__close {
        position: absolute;
        top: 14px;
        right: 18px;
        background: none;
        border: none;
        font-size: 24px;
        line-height: 1;
        cursor: pointer;
        color: #888;
        transition: color 0.2s;

        &:hover { color: #111; }
    }

    &__header {
        margin-bottom: 24px;
    }

    &__title {
        font-family: 'Palanquin Dark', sans-serif;
        font-size: 26px;
        font-weight: 700;
        color: #111;
        margin: 0 0 6px;

        :deep(span) { color: #4B7D11; }
    }

    &__subtitle {
        font-family: 'Palanquin', sans-serif;
        font-size: 15px;
        color: #555;
        margin: 0;
    }

    &__body {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    &__actions {
        display: flex;
        gap: 12px;
        margin-top: 28px;
    }

    &__btn-primary {
        flex: 1;
        height: 48px;
        background: #111;
        color: #fff;
        border: none;
        font-family: 'Palanquin Dark', sans-serif;
        font-size: 15px;
        font-weight: 700;
        cursor: pointer;
        transition: background 0.2s;

        &:hover { background: #4B7D11; }
    }

    &__btn-secondary {
        flex: 1;
        height: 48px;
        background: transparent;
        color: #111;
        border: 1.5px solid #111;
        font-family: 'Palanquin', sans-serif;
        font-size: 15px;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.2s, color 0.2s;

        &:hover {
            background: #111;
            color: #fff;
        }
    }
}

.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.22s ease;

    .modal {
        transition: transform 0.22s ease, opacity 0.22s ease;
    }
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;

    .modal {
        transform: translateY(-20px);
        opacity: 0;
    }
}
</style>
