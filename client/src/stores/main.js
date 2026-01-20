import { useWindowSize } from '@vueuse/core';
import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
	state: () => ({
		windowSize: useWindowSize(),
	}),
	getters: {},
	actions: {},
});

export default useMainStore;
