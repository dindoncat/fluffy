<template>
	<div class="home">
		<div class="Slide greeting">
			<div class="mock-up-image"><h1>תמונה</h1></div>
			<h1>מה קורה חברים וברוכים הבאים לערוץ המיינקראפט שלי!</h1>
		</div>
		<div class="Slide info">
			<p>אני מעלה סרטונים על שטויות עם רדסטון. תוכלו לקנות אותם! איזה כיף, חנות רדסטון! לכן המערכת בגוון אדמדם. הבנתם? רד-סטון? כי זה אדום! אדום כמו הפיל האדום! אנייי הפיל האדוםםם!</p>
		</div>
		<div class="Slide contact-me">
			<a href="https://wa.me?phone=05050505050&text=AWannaBayYorStaf!">לחצו כאן להזמנה דרך WhatsApp</a>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.greeting {
	background-color: hsl(var(--pink)var(--mid));
	padding-block: 20%;
	height: calc(100svh - 31px);
	text-align: center;
}

.mock-up-image {
	position: relative;
	height: 300px;
	width: 80%;
	background-image: linear-gradient(200deg, hsl(var(--pink)var(--mid)), hsl(var(--sage)var(--high)));
	> h1 {
		position: absolute;
		top: 50%;
		right: 50%;
		transform: translate(50%, -50%) rotateZ(-45deg) scale(2);
		opacity: 0.7;
	}
}

.info {
	padding-block: 20%;
	padding-bottom: 50%;
}

.contact-me {
	background-color: hsl(var(--sage)var(--high));
	padding-block: 15%;
}
</style>
