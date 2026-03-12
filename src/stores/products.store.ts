import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {
    state: () => ({
        activeFilter: 'all',
        nextId: 9,
        allProducts: ([
            {
                id: 1,
                title: 'Kiwi',
                price: 9,
                image: 'kiwi.svg',
                rating: 4,
                type: 'fruit',
            },
            {
                id: 2,
                title: 'Banana',
                price: 12,
                image: 'banana.svg',
                rating: 3,
                type: 'fruit',
            },
            {
                id: 3,
                title: 'Apple',
                price: 13,
                image: 'apple.svg',
                rating: 4,
                type: 'fruit',
            },
            {
                id: 4,
                title: 'Milk',
                price: 5,
                image: 'Milk2.svg',
                rating: 5,
                type: 'drinks',
            },
            {
                id: 5,
                title: 'Water',
                price: 3,
                image: 'water.svg',
                rating: 5,
                type: 'drinks',
            },
            {
                id: 6,
                title: 'Tomato',
                price: 10,
                image: 'tomato.svg',
                rating: 5,
            },
            {
                id: 7,
                title: 'Spices',
                price: 10,
                image: 'Spices.svg',
                rating: 5,
            },
            {
                id: 8,
                title: 'Cheese',
                price: 15,
                image: 'Cheese2.svg',
                rating: 5,
            },
        ]),
    }),
    getters: {
        getFilteredProducts(state) {
            let result = [...state.allProducts];

            if (state.activeFilter === 'rating') {
                result.sort((a, b) => b.rating - a.rating);
            } else if (state.activeFilter === 'price') {
                result.sort((a, b) => b.price - a.price);
            } else if (state.activeFilter === 'drinks' || state.activeFilter === 'fruit') {
                result = result.filter(p => p.type === state.activeFilter);
            }

            return result;
        }
    },
    actions: {
        sortByRating() {
            this.activeFilter = 'rating';
        },
        sortByPrice() {
            this.activeFilter = 'price';
        },
        sortByType(type: string) {
            this.activeFilter = type;
        },
        sortAll() {
            this.activeFilter = 'all';
        },
        showMore() {
            const itemsToAdd = this.allProducts.slice(0, 8).map(p => ({ ...p, id: this.nextId++ }));
            this.allProducts.push(...itemsToAdd);
        }
    }
});
