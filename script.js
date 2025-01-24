// script.js

document.addEventListener("DOMContentLoaded", function() {
    const movieForm = document.getElementById("movie-form");
    const message = document.getElementById("message");

    movieForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting normally
        
        // Collect form data
        const formData = new FormData(movieForm);

        // Convert formData to JSON
        const movieData = {};
        formData.forEach((value, key) => {
            movieData[key] = value;
        });

        // Store movie data in localStorage
        localStorage.setItem("movieData", JSON.stringify(movieData));

        // Display success message
        message.textContent = "Movie added successfully!";
        movieForm.reset(); // Clear form fields
    });
});
