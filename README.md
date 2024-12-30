
---

# AI Image Gallery 🚀

An AI-powered image gallery that generates images based on user prompts using OpenAI's DALL·E API. This project is built with **React** and **TypeScript** and includes features like:

- Dynamic image generation based on user input.
- A gallery view for displaying multiple images.
- Secure API key management using environment variables.
- Unit tests with React Testing Library and Jest.

---

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Environment Variables](#environment-variables)
- [Testing](#testing)
- [Technologies Used](#technologies-used)
- [License](#license)

---

## Demo
![App Demo Screenshot](https://via.placeholder.com/800x400?text=Demo+Placeholder)  
*(Replace this with an actual screenshot or gif of your application.)*

---

## Features
- Enter prompts to generate AI images.
- Displays a gallery of generated images.
- Responsive design for a seamless user experience.
- Environment variable support for secure API key storage.

---

## Getting Started

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v16 or later)
- **Yarn** (Package Manager)
- An OpenAI API key. [Get your API key here](https://platform.openai.com/signup/).

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ai-image-gallery.git
   cd ai-image-gallery
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Add the required environment variables (see [Environment Variables](#environment-variables)).

---

## Running the App
Start the development server:
```bash
yarn start
```

Visit the app in your browser at `http://localhost:3000`.

---

## Environment Variables
Create a `.env` file in the root of your project and add the following:
```env
REACT_APP_OPENAI_API_KEY=your_openai_api_key
```

**Note**: Replace `your_openai_api_key` with your actual OpenAI API key.

Make sure `.env` is listed in your `.gitignore` file to prevent exposing your API key.

---

## Testing
Run unit tests with:
```bash
yarn test
```

---

## Technologies Used
- **React**: Frontend library for building the user interface.
- **TypeScript**: Adds type safety to the project.
- **Axios**: For making API requests to OpenAI.
- **React Testing Library**: For writing unit tests.
- **Jest**: Testing framework.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

---

## Acknowledgments
- [OpenAI DALL·E API](https://platform.openai.com/docs/guides/images) for image generation.
- React and TypeScript communities for excellent documentation and tools.
