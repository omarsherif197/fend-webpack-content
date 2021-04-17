function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}

async function APICall(event){
    event.preventDefault()
    console.log("::: Form Submitted :::")
    const res = await fetch("https://jsonplaceholder.typicode.com/albums/3")
    const data = await res.json()
    document.getElementById('results2').innerHTML = data.id + " " + data.title
}

export { handleSubmit, APICall }