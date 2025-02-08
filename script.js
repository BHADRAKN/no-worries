document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");

    if (username === "test.html" && password === "12345") {
        window.location.href = "dashboard.html";
    } else {
        errorMessage.textContent = "Invalid username or password!";
        errorMessage.style.color = "red";
    }
});

// Function to Share Location
function sendLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                let latitude = position.coords.latitude;
                let longitude = position.coords.longitude;

                let locationMessage = `My current location: https://www.google.com/maps?q=${latitude},${longitude}`;

                let contacts = [
                    "9977882132",
                    "8432113488",
                    "1234567890",
                    "0987654321"
                ];

                alert("Sending location to trusted contacts:\n" + locationMessage);
                console.log("Message sent to contacts:", contacts, locationMessage);

                // This is just a simulation; in a real app, you'd integrate SMS or WhatsApp API.
            },
            function(error) {
                alert("Location access denied or unavailable.");
            }
        );
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}
// Function to check health status
function checkHealth() {
    let heartRate = Math.floor(Math.random() * (140 - 60 + 1)) + 60; // Simulated random heart rate
    let oxygenLevel = Math.floor(Math.random() * (100 - 85 + 1)) + 85 + "%";
    let temperature = (Math.random() * (103 - 95) + 95).toFixed(1) + "°F";

    document.getElementById("heart-rate").innerText = heartRate;
    document.getElementById("oxygen-level").innerText = oxygenLevel;
    document.getElementById("temperature").innerText = temperature;

    if (heartRate > 120 || oxygenLevel < "90%" || temperature > "101°F") {
        alert("🚨 Critical health condition detected! Sending emergency alert...");
        sendEmergencyAlert();
    }
}

// Function to send emergency alert
function sendEmergencyAlert() {
    let emergencyContacts = ["9977882132", "8432113488", "1234567890", "0987654321"];
    let message = "🚨 Health Emergency! My current condition is critical. Here is my location: ";

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;
            let googleMapsLink = https://www.google.com/maps?q=${latitude},${longitude};

            // Final message
            let finalMessage = message + googleMapsLink;
            
            // Displaying alert (Replace this with actual SMS API call)
            alert("SOS sent to: " + emergencyContacts.join(", ") + "\nMessage: " + finalMessage);
        });
    } else {
        alert("Geolocation is not supported on this device.");
    }
}

// Function to send location manually from dashboard
function sendLocation() {
    let emergencyContacts = ["9977882132", "8432113488", "1234567890", "0987654321"];

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;
            let googleMapsLink = https://www.google.com/maps?q=${latitude},${longitude};

            alert("📍 Location sent to: " + emergencyContacts.join(", ") + "\n" + googleMapsLink);
        });
    } else {
        alert("Geolocation is not supported on this device.");
    }
}
