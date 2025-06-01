function sendMail(){
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        service: document.getElementById("service").value,
        message: document.getElementById("message").value,
    }
    emailjs.send("service_4x8h8sm","template_c0qf59z", parms).then(alert("Message Sent!"))
}

