// 

// addEventListener('load', (event) => {
//     fetchData()
// })

// async function fetchData() {
//     const userIP = await fetch('https://api.ipify.org?format=json')
//         .then(response => response.json())
//         .then(result => {
//             return result
//         })
//         .catch(error => console.error('Could not retrieve IP address.', error))

//     console.log(userIP);
// }


// addEventListener('load', (event) => {
//     fetchLocation();
// });

// async function fetchLocation() {
//     try {
//         const response = await fetch('http://ip-api.com/json/');
//         const data = await response.json();

//         if (data.status === "success") {
//             const { lat, lon } = data;
//             console.log(`Latitude: ${lat}, Longitude: ${lon}`);
//         } else {
//             console.error("Could not retrieve location data.");
//         }
//     } catch (error) {
//         console.error('Could not retrieve location.', error);
//     }
// }


if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
            // You can use these coordinates for further processing
        },
        (error) => {
            console.error("Error getting location:", error.message);
        }
    );
} else {
    console.log("Geolocation is not available");
}
