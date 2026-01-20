import { useWindowSize } from '@vueuse/core';
import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
	state: () => ({
		windowSize: useWindowSize(),
		minBigScreen: 800
	}),
	getters: {
		isMobile() {
			return this.windowSize.width < this.minBigScreen;
		},
	},
	actions: {},
});

export default useMainStore;
