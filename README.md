# Budget Planner App

## Overview
This Budget Planner App is a React-based web application designed to help users manage and allocate their budgets efficiently across different channels. The application utilizes the MERN stack and offers a clean, user-friendly interface for budget management.

## Features

### Header
- Displays the main title, subtitle, and a brief description of the app's purpose.
- Button for adding new budget channels.

### Tabs
- Two tabs allowing the user to switch between budget planning and channel overview.

### Budget Management
- Users can define and edit budget channels with options like baseline budget, frequency (monthly, quarterly, annually), and allocation method (equal or manual).
- The app provides an interactive table to visualize and edit monthly budgets for each channel.
- Budget breakdowns can be adjusted manually or divided equally across time periods.

### Channel Table
- A responsive table showing each channel with its corresponding monthly budget allocation.
- Editable fields for adjusting individual month budgets for each channel.

### Context and Hooks
- Utilizes React Context API for state management across the application.
- Custom hooks for managing budget-related operations and state.

## Installation and Setup

### Prerequisites
- Node.js
- npm or yarn
- A modern web browser

### Installation
1. Clone the repository to your local machine.
2. Navigate to the root directory of the project in your terminal.
3. Run `npm install` or `yarn install` to install dependencies.

### Starting the App
- Run `npm start` or `yarn start` to start the application.
- The app will be available at `localhost:3000` in your web browser.

## Usage
- On launching the app, users can view and manage budget channels.
- Use the tabs to switch between different views.
- Budgets can be added, edited, or removed using the provided interfaces.

## Technologies Used
- React (Functional Components, Hooks, Context API)
- CSS for styling
- Bootstrap for responsive tables and components
- Nanoid for unique identifiers

## Contributing
Contributions to the project are welcome. Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes with clear, descriptive messages.
4. Push your branch and submit a pull request.