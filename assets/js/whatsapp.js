function sendWhatsAppMessage(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Construct WhatsApp message
    const whatsappNumber = "+919846136610"; // Your WhatsApp number with country code
    const whatsappMessage = `Hello,%0A%0AYou have a new message from your website:%0A%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0APhone Number: ${encodeURIComponent(number)}%0ASubject: ${encodeURIComponent(subject)}%0AMessage: ${encodeURIComponent(message)}`;

    // Redirect to WhatsApp Web
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    window.open(whatsappURL, "_blank");
}

