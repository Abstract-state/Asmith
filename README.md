# Asmith's Portfolio Website

## Overview

Welcome to Asmith's Portfolio Website! This is a personal project that showcases my journey, skills, work, and accomplishments. It is built using modern web technologies including React, TailwindCSS, and Vite. The aim is to highlight my expertise in software development, machine learning, data science, and projects I've been involved in, while giving a polished, visually appealing representation of my work.

### Live Demo
[View the Portfolio Website](https://your-portfolio-link.vercel.app)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Customizations](#customizations)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Responsive Design**: Optimized for different screen sizes, ensuring that it works well on mobile, tablet, and desktop devices.
- **Dark Mode**: Toggle between light and dark themes for an improved user experience.
- **Dynamic Contact Form**: Easily reach out through the integrated contact form powered by Formspree.
- **Animated Hero Section**: Stylish animated introduction with modern design elements.
- **Download Resume**: Instantly download my latest resume as a PDF.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast development build tool optimized for modern web projects.
- **TailwindCSS**: A utility-first CSS framework for rapid UI development.
- **React Icons**: To provide elegant and consistent icons throughout the website.
- **Formspree**: To handle contact form submissions.
- **Vercel**: For deployment, providing an easy and reliable way to deploy the project.

## Installation

Follow these instructions to get a local copy of this project up and running.

### Prerequisites

- [Node.js](https://nodejs.org/) (v12 or above)
- [Git](https://git-scm.com/)

### Clone the Repository
```bash
$ git clone https://github.com/Abstract-state/portfolio.git
$ cd portfolio
```

### Install Dependencies

Install project dependencies by running:

```bash
$ npm install
```

### Run the Project Locally

To start the development server, run:

```bash
$ npm run dev
```

The application should now be running at `http://localhost:5173`.

## Usage

### Development

- **Theme Toggle**: Switch between light and dark modes by clicking on the icon at the top-right corner.
- **Mobile Navigation**: A responsive menu is available for mobile users, accessible via a hamburger icon.
- **Resume Download**: The "Download Resume" button instantly downloads the resume from `/public/assets/Asmith-Resume.pdf`.

### Customizing the Content

All main components and sections can be found in the `src/components` directory. To update any specific information such as personal details or links, edit the respective component files.

#### Example - Updating Hero Component

To change the introduction text or image in the Hero section, update `src/components/Hero.jsx` accordingly.

```jsx
<h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
  Hi, I’m Asmith <span role="img" aria-label="waving hand">👋</span>
</h1>
```

To replace the profile image, change the import statement to link to your new image in `src/assets/`.

## Project Structure

- `src/components/`: Contains individual React components for each section.
  - **Header**: The navigation bar including theme toggle.
  - **Hero**: Introduction section with animated elements.
  - **Skills**: A list of skills and technologies with relevant icons.
  - **Projects**: Showcasing work samples.
  - **Testimonials**: Recommendations from colleagues.
  - **Contact**: Form to reach out, linked with Formspree.
- `public/assets/`: Static files like images and the downloadable resume.
- `src/App.jsx`: Main component rendering the entire app.

## Deployment

The project is currently deployed via Vercel, which integrates easily with GitHub for CI/CD.

### Deploying to Vercel

1. Create a [Vercel account](https://vercel.com/).
2. Link your GitHub repository to Vercel.
3. Set up your project as a new deployment.
4. Vercel will handle the rest, including domain setup and continuous deployment.

## Customizations

To customize the design and branding:

- **Colors & Styles**: TailwindCSS makes it easy to update the styles. You can find the classes within each component to tweak the design.
- **Icons**: Icons used in this project are from `react-icons`. You can replace or add more icons as per your preference.

### Example - Changing Colors
In `Header.jsx`, update the Tailwind classes to change colors:

```jsx
<a href="#about" className="text-black dark:text-white hover:text-black dark:hover:text-yellow-400 transition">About</a>
```

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

### How to Contribute

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

Feel free to report issues or suggest improvements via the [issues tab](https://github.com/Abstract-state/portfolio/issues).

## License

Distributed under the **MIT License**. See `LICENSE` for more information.

## Acknowledgments

- **Vercel**: For easy deployment and hosting.
- **Formspree**: For simplifying contact form submissions.
- **React Icons**: For beautiful icons.
- **TailwindCSS**: For making the UI development so much quicker and easier.

---

Feel free to explore and use this project as a template for your own personal portfolio website. Let me know if you have any questions or suggestions for improving this project!

