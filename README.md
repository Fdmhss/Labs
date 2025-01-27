# AI-Powered Tutoring Platform

## Overview

This project is a web-based platform that uses AI to provide personalized tutoring for subjects such as math and coding. It tracks user progress, offers learning recommendations, and provides an interactive dashboard for users to manage their learning journey.

---

## Repository Contents

| File/Folder         | Description                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| `index.html`        | The main HTML file for the front-end.                                       |
| `styles.css`        | The CSS file for styling the web interface.                                |
| `script.js`         | JavaScript file for client-side functionality.                             |
| `app.js`            | Main server-side code built with Node.js and Express.                      |
| `package.json`      | Configuration file for managing Node.js dependencies.                      |
| `userModel.js`      | Mongoose schema for user information.                                      |
| `progressModel.js`  | Mongoose schema for storing and managing user learning progress.           |
| `userRoutes.js`     | API routes for user-related operations (e.g., registration, login).        |
| `progressRoutes.js` | API routes for handling user progress data.                                |
| `Zoav.pdf`          | Documentation or project details in PDF format.                           |
| `Zoav.pptx`         | Presentation slides for the project overview.                              |
| `AI Powered Tutoring Platform.mp4` | A video demo of the platform.              |

---

## Features

- **User-Friendly Interface**: Simple and interactive dashboard.
- **Personalized Recommendations**: AI-powered suggestions for learning resources.
- **Progress Tracking**: Monitor completed lessons and overall progress.
- **Multiple Subjects**: Support for subjects like math and coding (expandable to others).

---

## Installation Guide

### Prerequisites
- Node.js and npm installed ([Download Node.js](https://nodejs.org/)).
- MongoDB installed or access to a cloud database ([MongoDB Atlas](https://www.mongodb.com/atlas)).

### Steps
1. Clone this repository:
   ```bash
   git clone https://github.com/Meganathan-KS/AI-Powered-Tutoring-Platform-SHK24006.git
   ```
2. Navigate to the project directory:
   ```bash
   cd AI-Powered-Tutoring-Platform-SHK24006
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   node app.js
   ```
5. Open the `index.html` file in your browser or serve it using an HTTP server (e.g., Live Server).

---

## Usage

1. **Start the Server**:
   Make sure MongoDB is running and start the server using `node app.js`. The server runs on `http://localhost:3000`.

2. **Open the Front-End**:
   Open the `index.html` file in your browser to interact with the platform.

3. **Explore Features**:
   - Register a new user.
   - View your learning progress.
   - Explore AI-recommended resources.

---

## Future Enhancements

- **Authentication System**: Add user login/logout functionality.
- **Enhanced AI Models**: Integrate advanced recommendation systems using TensorFlow.js or external APIs.
- **Deployment**: Deploy the project on Heroku, AWS, or Vercel for public access.
- **Progress Visualization**: Graphs and charts to display user progress.

---

## Contributing

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/new-feature
   ```
3. Commit changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/new-feature
   ```
5. Submit a pull request.

---

## License

This project is licensed under the MIT License. You can use, modify, and distribute it freely.

---

## Contact

**Author**: Meganathan K S  
**Email**: meganathansaravananks@gmail.com 
**GitHub**: https://github.com/Meganathan-KS

Feel free to raise issues or submit pull requests to enhance this project!
```
