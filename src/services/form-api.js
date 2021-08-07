const BASE_URL = "/api/form"

function indexForm () {
  return fetch(BASE_URL)
  .then(res => res.json())
}

function newPost(formData) {
  return fetch(BASE_URL, {
    method: "POST",
    headers: {"content-type": "application/json"},
    body: JSON.stringify(formData),
  })
  .then(res => res.json())
}

export {
  indexForm,
  newPost,
}