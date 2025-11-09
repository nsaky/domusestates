# Domus Estates - Luxury Villa Rental Website

Domus Estates is a sleek, modern, and responsive landing page for a luxury real estate and villa rental agency. This project is built with pure HTML5 and CSS3, demonstrating a clean design aesthetic, responsive layout principles, and attention to detail in the user interface.

The design focuses on an elegant, high-end feel, using a professional color palette, premium typography from Google Fonts, and engaging hover effects to create a compelling user experience.

-----

## 🚀 Features

This landing page is divided into several well-structured sections:

  * **Responsive Navbar:** A fixed navigation bar that sticks to the top. It includes the brand logo and navigation links. On smaller screens (\<= 768px), it collapses into a hamburger menu (functionality intended to be handled by `script.js`).
  * **Hero Section:** A full-viewport hero section with a striking background image, a bold headline ("BE OUR GUEST"), and a clear call-to-action (CTA) button.
  * **Top Villas Section:** A grid layout showcasing 9 "Top Pick" villas. Each property card includes:
      * A high-quality image with a price tag.
      * Villa name, location, and type (e.g., "Italy | Mountains").
      * Key specifications with icons (guests, bedrooms, area, bathrooms).
      * A subtle hover effect that scales the card.
  * **Our Regions Section:** A two-card layout highlighting the main property regions (Mountains and Seaside) with background images and property counts.
  * **Specialities Section:** An icon-based feature list showcasing property specialities like "Seafront," "Pet friendly," and "Fitness/Gym."
  * **"Become a Host" CTA:** A large, visually distinct section with a background image encouraging users to partner as hosts.
  * **About Us Section:** A clean, two-column layout providing information about the company, paired with an image.
  * **Contact Section:** A comprehensive, two-part contact area:
      * **Left Side:** Contact details (Phone, Email, Address) and social media links.
      * **Right Side:** A complete, styled contact form (Name, Email, Message, Terms checkbox).
  * **Footer:** A multi-part footer with the company description, contact info, social links, legal links (Terms, Privacy), and a copyright notice.

-----

## 🛠️ Technologies Used

  * **HTML5:** Semantic HTML for a well-structured and accessible site.
  * **CSS3:** Modern CSS for all styling, including:
      * **Flexbox:** Used extensively for layout and alignment (e.g., in listings, features, and forms).
      * **Media Queries:** Used for the responsive navigation bar.
      * **Custom Fonts:** Imports 'Playfair Display', 'Raleway', and 'Rufina' from Google Fonts for a distinct typographic style.
      * **Transitions & Hover Effects:** Smooth transitions are applied to buttons and property cards for an interactive feel.

-----

## 🔧 Setup and Usage

To run this project locally, follow these steps:

1.  **Clone the Repository:**
    Open your terminal or command prompt and run the following git command:

    ```bash
    git clone https://github.com/nsaky/domusestates.git
    ```

2.  **Navigate to the Directory:**

    ```bash
    cd domusestates
    ```

3.  **Ensure `resources` Folder is Populated:**
    The code references numerous images in a `resources` folder. Make sure this folder exists in the main directory and contains all the necessary image files (e.g., `hero.png`, `prop1.png`, `about.png`, etc.).

4.  **Add JavaScript (Optional):**
    To make the mobile hamburger menu functional, the `script.js` file (linked in the HTML) needs the correct JavaScript to toggle an `.active` class on the `#nav-links` element when the `#nav-toggle` button is clicked.

5.  **Open in Browser:**
    Open the `index.html` file in your web browser to view the website.

-----

## 👨‍💻 Author

  * **Yasir Eqbal**

© 2025-2026 Domus Estates. All rights reserved.