const form = document.querySelector('.login-form')

form.addEventListener('submit', onSubmitForm)

function onSubmitForm(event) {
    event.preventDefault();
    const currentForm = event.currentTarget;
    console.log(currentForm.elements)
    const formData = new FormData(currentForm)
    const user = {}

    formData.forEach((value, name) => {
        if (value === '') {
            alert("Fill in all fields")
        }
        else {
            user[name] = value
        }
    })
    console.log(user)
    currentForm.reset()
}