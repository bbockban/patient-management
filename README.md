# Patient Management

This is a React project built with Vite.
The project uses node v22.1.0

## Installation

To get started with the application run the following commands

```bash
git clone <repository-url>
cd patient-management
npm install
npm run dev
```
This command runs the app in development mode. Open http://localhost:5173 to view it in your browser.

Add .env file for API calls as exemplified on .env.example where the API url is the one provided for the challenge.

## Tools

- @hookform/resolvers: Provides resolver support for react-hook-form with Yup validation.
- @reduxjs/toolkit: Simplifies state management for data.
- classnames: Allows conditional joining of class names.
- prop-types: Used for runtime type-checking of props.
- react-hook-form: Manages form state and validation.
- react-loading-skeleton: Displays loading placeholders for components.
- react-modal: Provides a modal component that follows accessibility standards.
- react-toastify: Enables customizable toast notifications.
- vite-plugin-svgr: Allows you to import SVG files as React components.
- yup: Schema validation library, integrated with react-hook-form for form validation.
- sass: Schema validation library, integrated with react-hook-form for form validation.

## Folder Structure

```
patient-management/
├── public/             # Static assets
├── src/
│   ├── assets/         # Images, icons, and other assets
│   ├── components/     # Reusable components
│   ├── constants/      # Reusable scss constants
│   ├── api/            # API fetch configurations
│   ├── features/       # Redux slices and state management
│   ├── conatiners/     # Main application pages
│   ├── main.jsx        # Main application component
│   └── index.jsx       # Entry point for the React application
├── package.json        # Project configuration and dependencies
└── vite.config.js      # Vite configuration file
```
