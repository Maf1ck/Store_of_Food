import { defineStore } from "pinia";

export const useCardAndWishlistStore = defineStore('cardAndWishlist', {
    state: () => ({
        card: [] as any[],
        wishlist: [] as any[],
    }),
    persist: true,
    actions: {
        addToCard(product: any) {
            const existing = this.card.find((item: any) => item.id === product.id);
            if (existing) {
                existing.quantity = (existing.quantity || 1) + 1;
            } else {
                this.card.push({ ...product, quantity: 1 });
            }
        },
        toggleWishlist(product: any) {
            const exists = this.wishlist.some((item: any) => item.id === product.id);
            if (exists) {
                this.wishlist = this.wishlist.filter((item: any) => item.id !== product.id);
            } else {
                this.wishlist.push(product);
            }
        },
        removeFromCard(product: any) {
            this.card = this.card.filter((item: any) => item.id !== product.id);
        },
    },
});
