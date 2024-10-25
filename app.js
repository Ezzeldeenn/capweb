// Navbar toggle for mobile view
document.querySelector('.navbar-toggler').addEventListener('click', function() {
    document.querySelector('.navbar-collapse').classList.toggle('show');
});

// Form validation (Example for login form)
document.querySelector('#loginForm').addEventListener('submit', function(e) {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    if (email === '' || password === '') {
        alert('Please fill in all fields');
        e.preventDefault();
    }
});

// Dynamically loading restaurant details (just an example of how JS could be used)
function loadRestaurantDetails(restaurantId) {
    // Fetch restaurant details via API or JSON
    // This is a placeholder example
    const restaurant = {
        name: "Sample Restaurant",
        description: "This is a sample restaurant description.",
        menu: [
            {name: "Pizza", price: "$12"},
            {name: "Pasta", price: "$10"}
        ]
    };

    document.querySelector('.restaurant-name').textContent = restaurant.name;
    document.querySelector('.restaurant-description').textContent = restaurant.description;
    
    const menuList = document.querySelector('.menu-list');
    restaurant.menu.forEach(item => {
        const menuItem = document.createElement('li');
        menuItem.textContent = `${item.name} - ${item.price}`;
        menuList.appendChild(menuItem);
    });
}

// Call function on page load for restaurant details
if (window.location.pathname === '/restaurant-details.html') {
    loadRestaurantDetails(1);  // Pass the restaurant ID dynamically
}

// map
function initMap() {
    var mapOptions = {
        zoom: 14,
        center: new google.maps.LatLng(37.7749, -122.4194),
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(37.7749, -122.4194),
        map: map,
        title: 'Restaurant Location',
    });
}
