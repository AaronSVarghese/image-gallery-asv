document.addEventListener('DOMContentLoaded', () => {
    // 1. Data: Array of image objects
    const images = [
        // Landscape 1: Mountains
        { src: 'https://media.istockphoto.com/id/824328262/photo/winter-sunrise-above-the-forest.webp?a=1&b=1&s=612x612&w=0&k=20&c=Jx0RUK8YyKBsd66zBNx8T_vyNsWFbyPXdbb4CNMg5YU=', alt: 'Sunrise over snow-capped mountains.' },
        // Landscape 2: Forest
        { src: 'https://plus.unsplash.com/premium_photo-1671805322278-13793483b464?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RGVuc2UlMjBmb3Jlc3QlMjB3aXRoJTIwdGFsbCUyMHRyZWVzJTIwYW5kJTIwbWlzdHxlbnwwfHwwfHx8MA%3D%3D', alt: 'Dense forest with tall trees and mist.' },
        // Landscape 3: Beach/Ocean
        { src: 'https://media.istockphoto.com/id/1450094329/photo/colorful-sunset-viewed-from-the-pink-sea-beach-with-soft-waves.webp?a=1&b=1&s=612x612&w=0&k=20&c=OkgcpM_-_aNLJaT3uw_ICT8QEmX21My-p4Sweq8RTh8=', alt: 'A serene beach at sunset.' },
        // Landscape 4: Desert
        { src: 'https://media.istockphoto.com/id/184268525/photo/xl-desert-sand-sunset.webp?a=1&b=1&s=612x612&w=0&k=20&c=x7241fe8-GbHggtdkAXkkThPXOCHK3DX-InWxzOwemM=', alt: 'Vast desert landscape with sand dunes.' },
        // Landscape 5: Lake/Water
        { src: 'https://plus.unsplash.com/premium_photo-1667424151023-af40e6b49acf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2xlYXIlMjBsYWtlJTIwcmVmbGVjdGluZyUyMG1vdW50YWluc3xlbnwwfHwwfHx8MA%3D%3D', alt: 'Clear lake reflecting mountains.' },
        // You can add more landscape images here!
        { src: 'https://images.unsplash.com/photo-1742992682638-6e98736326d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFqZXN0aWMlMjBtb3VudGFpbnMlMjB3aXRoJTIwc25vdyUyMGNhcHBlZCUyMHBlYWtzfGVufDB8fDB8fHww', alt: 'Majestic mountains with snow-capped peaks.' },
        { src: 'https://images.unsplash.com/photo-1711449411966-031e5bd844fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2xvc2UlMjB1cCUyMG9mJTIwZGVsaWNhdGUlMjBwaW5rJTIwZmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D', alt: 'Close-up of delicate pink flowers.' },
        { src: 'https://media.istockphoto.com/id/1197099409/photo/bursting-fireworks-during-the-divali-festival-of-light-over-the-city-of-chennai-in-south-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=LaM1A72Rgzua1qle21TKHPxkiXL3A-2GxPx8a-mPO0I=', alt: 'A colorful castle illuminated at night.' }

    ];

    // 2. DOM Elements
    const featuredImage = document.getElementById('featured-image');
    const thumbnailContainer = document.getElementById('thumbnail-container');
    let activeThumbnail = null; // To keep track of the currently active thumbnail

    // 3. Functions

    /**
     * Updates the main featured image.
     * @param {Object} imageObject - The image data { src, alt }.
     */
    function updateFeaturedImage(imageObject) {
        featuredImage.src = imageObject.src;
        featuredImage.alt = imageObject.alt;
    }

    /**
     * Creates an image thumbnail element and attaches an event listener.
     * @param {Object} imageObject - The image data { src, alt }.
     * @returns {HTMLImageElement} The created thumbnail img element.
     */
    function createThumbnail(imageObject) {
        const thumbnail = document.createElement('img');
        thumbnail.src = imageObject.src;
        thumbnail.alt = imageObject.alt;
        thumbnail.classList.add('thumbnail'); // Add a class for potential styling

        // Event Listener: When a thumbnail is clicked
        thumbnail.addEventListener('click', () => {
            // Conditional: Check if a new thumbnail is being clicked
            if (activeThumbnail) {
                activeThumbnail.classList.remove('active');
            }
            thumbnail.classList.add('active');
            activeThumbnail = thumbnail;
            updateFeaturedImage(imageObject);
        });

        return thumbnail;
    }

    /**
     * Initializes the image gallery.
     * Loops through images, creates thumbnails, and sets the initial featured image.
     */
    function initGallery() {
        // Loop: Iterate over the images array
        for (let i = 0; i < images.length; i++) {
            const image = images[i];
            const thumbnail = createThumbnail(image);
            thumbnailContainer.appendChild(thumbnail);

            // Conditional: Set the first image as active initially
            if (i === 0) {
                updateFeaturedImage(image);
                thumbnail.classList.add('active');
                activeThumbnail = thumbnail;
            }
        }
    }

    // Call the initialization function when the DOM is ready
    initGallery();
});