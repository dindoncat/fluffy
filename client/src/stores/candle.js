import { CANDLE_API } from '@/api/api';
import { defineStore } from 'pinia';

export const useCandleStore = defineStore('candle', {
	state: () => ({
		candles: [],
	}),
	getters: {},
	actions: {
		async fetchCandles() {
			try {
				this.candles = await CANDLE_API.getAll();
			} catch (error) {
				throw new Error(error);
			}
		}
	},
});

export default useCandleStore;
