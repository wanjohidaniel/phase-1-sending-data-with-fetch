function submitData(name, email) {
  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  });
}
then(response => {
  if (!response.ok) {
    throw new Error('Failed to submit data');
  }
  return response.json();
})
.then(data => {
  document.getElementById('idElement').innerText = data.id;
})
.catch(error => {
  document.getElementById('errorElement').innerText = error.message;
});

