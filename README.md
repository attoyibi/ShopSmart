# ShopSmart

[ShopSmart](https://shop-smart-eta.vercel.app/) is a cutting-edge e-commerce platform designed to offer a smooth, intelligent shopping experience. Built using modern technologies such as **Next.js**, **Zustand**, **SCSS**, and **Vercel**, ShopSmart focuses on user convenience, personalized recommendations, and secure transactions to make online shopping faster and more efficient.

## Features

### 1. **Hero Section**
   - The Hero Section welcomes users with attractive visuals and a clear call to action, ensuring users feel engaged from the moment they arrive.
   - **Technology Used**: 
     - **Next.js** for server-side rendering (SSR) to load the content dynamically.
     - **SCSS** for responsive and clean styling.

### 2. **Catalog List**
   - The Catalog Page displays a list of products fetched from the API, designed to be responsive and user-friendly, enabling seamless product browsing.
   - **Technology Used**:
     - **Next.js (SSG - Static Site Generation)** for pre-rendering the product catalog for better performance.
     - **Zustand** for state management of the product list and category filters.
     - **SCSS** for modern, responsive styling.

### 3. **Product Detail Page**
   - Displays detailed information about a selected product, including images, price, and descriptions.
   - **Technology Used**:
     - **Next.js (SSR)** for fetching and rendering product data dynamically based on the product slug.
     - **Zustand** for managing product-specific state.
     - **ImageZoom** for zooming into product images.

### 4. **Contact Us Page**
   - A simple contact form for users to get in touch with the company.
   - **Technology Used**:
     - **Next.js (CSR - Client-Side Rendering)** for handling form submissions.

### 5. **Login Page**
   - A user authentication page where customers can log in securely.
   - **Technology Used**:
     - **Next.js (CSR)** for handling authentication and secure login.

### 6. **About Us Page**
   - This page provides information about the company's vision, mission, and team.
   - **Technology Used**:
     - **Next.js** for static content generation (SSG) to improve loading speed.

### 7. **Category-based Navigation**
   - Allows users to browse products by category (e.g., **Food**, **Fashion**, **Electronics**) and dynamically loads the products associated with each category.
   - **Technology Used**:
     - **Zustand** for managing the state of the selected category and fetching the corresponding products.
     - **Next.js (SSR)** to dynamically load category data and display it on the page.

### 8. **Responsive Design**
   - The entire site is built with a mobile-first approach, ensuring an optimized experience across devices (mobile, tablet, desktop).
   - **Technology Used**:
     - **SCSS** with responsive media queries to ensure layouts adapt seamlessly to various screen sizes.

### 9. **Incremental Static Regeneration (ISR)**
   - **ISR** is used to ensure that the product catalog is updated periodically without requiring full rebuilds, improving performance and ensuring fresh content.
   - **Technology Used**:
     - **Next.js ISR** allows the site to be fast, but still up-to-date by regenerating static pages in the background at runtime.

### 10. **SEO Optimization**
   - ShopSmart includes SEO optimizations to improve search engine rankings, using features like meta tags, Open Graph tags, and efficient server-side rendering to improve discoverability.
   - **Technology Used**:
     - **Next.js** for SSR to ensure search engines can crawl pages effectively.
     - **Dynamic Meta Tags** based on the product or page content for improved SEO.

## Technologies Used

- **Next.js**: A React framework that supports SSR, SSG, and CSR, providing flexibility in rendering methods.
- **Zustand**: A lightweight but powerful state management library used to manage product data, category selection, and other UI states.
- **SCSS**: A CSS preprocessor used for more modular and maintainable styling. SCSS helps in writing DRY (Don't Repeat Yourself) styles.
- **Vercel**: The platform used for deployment, which enables automatic builds and optimizations for production.
- **TypeScript**: Strongly typed JavaScript was used to ensure code quality and catch errors early in the development process.
- **Image Optimization**: **Next.js Image** component was used to optimize images and improve page load speed.
- **API Integration**: The platform fetches product data dynamically from a mock API using the **Fetch API** and **Zustand** for managing state.
