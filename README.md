# CommercialHub

CommercialHub is a dynamic web application dedicated to showcasing commercial real estate properties, including office buildings, retail spaces, warehouses, restaurants, and more. Designed with a user-friendly interface, the platform offers a seamless browsing experience for property seekers and real estate enthusiasts.

## Live Demo
[CommercialHub Live Website](https://commercialhub.netlify.app/)

## Features
1. **Responsive Design**  
   - Optimized for mobile, tablet, and desktop views to ensure accessibility across all devices.

2. **Authentication**  
   - User authentication via email and password, with support for Google Login.  
   - Protected routes that redirect unauthenticated users to the login page.  

3. **Dynamic Property Listings**  
   - Displays commercial properties with detailed information such as price, location, status, and facilities.  
   - Clickable "View Property" button to access detailed property descriptions on a protected route.

4. **User Profile Management**  
   - Logged-in users can view and update their profile information, including name and profile picture, using Firebase’s `updateProfile()` method.

5. **Interactive UI Enhancements**  
   - Includes animations powered by AOS and a Swiper slider for an engaging user experience.

## Main Components
1. **Navbar**  
   - Displays website title, navigation links, and conditional login/logout buttons.  
   - Shows user profile picture and name upon login.

2. **Banner**  
   - Eye-catching slider with a minimum of three slides using the Swiper slider.

3. **Estates Section**  
   - A JSON-based data structure for properties, showcasing images, titles, descriptions, prices, status, areas, and facilities.

4. **Footer**  
   - Provides essential contact information and quick navigation links.

5. **Extra Pages**  
   - 404 Not Found Page for invalid routes.  
   - Additional protected route to display user-specific content.

## Challenges Implemented
1. **Password Visibility Toggle**  
   - Users can toggle the visibility of passwords during registration.

2. **Packages Used**  
   - AOS for animations.  
   - React Hook Form for handling form validation.  
   - Swiper slider for the banner section.

3. **Profile Update Page**  
   - Allows logged-in users to edit their name and profile picture securely using Firebase.

## Tech Stack
- **Frontend**: React.js  
- **Backend**: Firebase Authentication  
- **Styling**: Tailwind CSS, DaisyUI  
- **Animation**: AOS, Swiper  

## Installation
To run the project locally:  
1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/commercialhub.git



