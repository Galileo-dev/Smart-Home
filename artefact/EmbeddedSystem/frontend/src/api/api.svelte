<script context="module">
	const API_ENDPOINT = 'http://localhost:5000/api';

	export function light_state(toggle) {
		return fetch(API_ENDPOINT + '/');
	}

	export function getData() {
		return fetch('http://localhost:5000/api/turnLightOn')
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				return data;
			});
	}
</script>
