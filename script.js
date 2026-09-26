<script>
  function cb(response) {
      document.getElementById('visits').innerText = response.value;
  }

  // Requests the API to increment your website's key and returns data to the callback function
  const script = document.createElement('script');
  script.src = 'https://countapi.xyz';
  document.head.appendChild(script);
</script>
