import { createRouter, createWebHistory } from 'vue-router'

const lazyImportComponent = (name) => () => import(`../views/${name}.vue`)

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: lazyImportComponent('Home'),
		},
		{
			path: '/about',
			name: 'about',
			component: lazyImportComponent('Doll'),
		},
		{
			path: '/candle',
			name: 'candle',
			component: lazyImportComponent('Candle'),
		},
		{
			path: '/cart',
			name: 'cart',
			component: lazyImportComponent('Cart'),
		},
		{
			path: '/about',
			name: 'about',
			component: lazyImportComponent('About'),
		},
		{
			path: '/contact',
			name: 'contact',
			component: lazyImportComponent('Contact'),
		},
		{
			path: '/admin',
			name: 'admin',
			component: lazyImportComponent('Admin'),
		},
		{
			path: '/:catchAll(.*)',
			name: 'NotFound',
			component: lazyImportComponent('NotFound'),
		},
	],
})

export default router
