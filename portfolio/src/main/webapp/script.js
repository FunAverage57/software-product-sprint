function getEmail() {
  console.log('Fetching email from /data.');

  const responsePromise = fetch('/data');

  responsePromise.then(handleResponse);
}

function handleResponse(response) {
  console.log('Handling the response.');

  const textPromise = response.text();

  textPromise.then(addEmailToDom);
}

function addEmailToDom(email) {
  console.log('Adding email to dom: ' + email);

  const emailContainer = document.getElementById('email-container');
  emailContainer.innerText = email;
}

function getHello() {
  fetch('/data').then(response => response.json()).then((hi) => {

    const hiListElement = document.getElementById('hello-container');
    hiListElement.innerHTML = '';
    hiListElement.appendChild(
        createListElement("Simple English: " + hi.get(0)));
    hiListElement.appendChild(
        createListElement("Long English: " + hi.get(1)));
    hiListElement.appendChild(
        createListElement("Spanish: " + hi.get(2)));
  });
  }

  function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}