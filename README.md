# Dimension UI - Dark Landing Page

This is a modern, fully responsive landing page inspired by the design and style of Dimension.dev. It is built using React and styled with TailwindCSS, featuring smooth animations, a dark theme, and an interactive particle background. The layout is optimized for performance using Vite and is designed to provide a sleek, polished experience across all screen sizes.

## Features

The landing page includes all the essential sections you would expect in a marketing site. It has a visually appealing hero section, a features section, a list of use cases, testimonials from users, integration logos, a call-to-action block, and a simple footer. It also features a dynamic animated background created with react-tsparticles, along with scroll-based animations and glowing effects to enhance the visual experience.

## Technology Stack

This project uses the following tools and technologies:
- React for building the user interface
- Vite for fast development and optimized production builds
- TailwindCSS for utility-first, customizable styling
- react-tsparticles for animated background effects

## Getting Started

To get started, clone the repository and install the required dependencies using npm or yarn. Then run the development server to see the landing page locally.

git clone https://github.com/aadilaliofficial/dimension-ui.git
cd dimension-ui
npm install
npm run dev


After running the development server, open your browser and go to `http://localhost:5173` to view the landing page.

## Build for Production

To build the project for production, use the following command:

npm run build


The output will be generated in the `dist` folder, ready to be deployed.

## Folder Structure

The project structure is organized for clarity and reusability. All main sections of the page are separated into components under the `src/components` folder:

src/
   components/
       Hero.jsx
       Features.jsx
       Integrations.jsx
       UseCases.jsx
       Testimonials.jsx
       CtaSection.jsx
       Footer.jsx
       ParticlesBg.jsx
   App.jsx
   main.jsx


## Customization

You can update the particle animation by modifying the configuration in `ParticlesBg.jsx`. The visual theme including colors and fonts can be customized in `tailwind.config.js` and `index.css`. Additional animations can be added using Tailwind's `@keyframes` or third-party libraries if needed.

## Credits

This project is inspired by Dimension.dev and built as a learning or production-ready template for developers and designers who want a fast, stylish landing page built with modern tools.

## License

This project is open source and available under the MIT License. You are free to use, modify, and distribute it for personal or commercial use.
