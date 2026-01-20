import { DOLL_API } from '@/api/api';
import { defineStore } from 'pinia';

export const useDollStore = defineStore('doll', {
	state: () => ({
		dolls: [],
	}),
	getters: {},
	actions: {
		async fetchDolls() {
			try {
				this.dolls = await DOLL_API.getAll();
			} catch (error) {
				throw new Error(error);
			}
		},
	},
});

export default useDollStore;
