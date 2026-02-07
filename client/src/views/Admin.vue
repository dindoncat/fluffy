<template>
	<div class="admin">
		<h2>Admin Login</h2>
		<form @submit.prevent="login">
			<div class="form-group">
				<label for="username">Username:</label>
				<input type="text" id="username" v-model="username" required>
			</div>
			<div class="form-group">
				<label for="password">Password:</label>
				<input type="password" id="password" v-model="password" required>
			</div>
			<button type="submit">Login</button>
			<p v-if="error" class="error-message">{{ error }}</p>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			username: '',
			password: '',
			error: null,
		};
	},
	methods: {
		async login() {
			this.error = null; // Clear previous errors
			// TODO: Call the backend login API here
			console.log('Attempting login with:', this.username, this.password);
			
			// Placeholder for API call
			try {
				const response = await fetch('http://localhost:3000/users/login', { // Replace with your actual backend URL
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						username: this.username,
						password: this.password,
					}),
				});

				const data = await response.json();

				if (response.ok) {
					console.log('Login successful:', data);
					// TODO: Save token to localStorage/sessionStorage and redirect
					localStorage.setItem('userToken', data.token);
					// Assuming you have a router, you might redirect to an admin dashboard
					this.$router.push('/admin/dashboard'); // Example redirect
				} else {
					this.error = data.message || 'Login failed';
				}
			} catch (err) {
				this.error = 'Network error or server unavailable.';
				console.error('Login error:', err);
			}
		},
	},
};
</script>

<style scoped>
.admin {
	max-width: 400px;
	margin: 50px auto;
	padding: 20px;
	border: 1px solid #ccc;
	border-radius: 8px;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	background-color: #f9f9f9;
}

h2 {
	text-align: center;
	color: #333;
	margin-bottom: 20px;
}

.form-group {
	margin-bottom: 15px;
}

label {
	display: block;
	margin-bottom: 5px;
	color: #555;
}

input[type="text"],
input[type="password"] {
	width: 100%;
	padding: 10px;
	border: 1px solid #ddd;
	border-radius: 4px;
	box-sizing: border-box; /* Ensures padding doesn't increase total width */
}

button {
	width: 100%;
	padding: 10px;
	background-color: #007bff;
	color: white;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	font-size: 16px;
}

button:hover {
	background-color: #0056b3;
}

.error-message {
	color: red;
	text-align: center;
	margin-top: 10px;
}
</style>
