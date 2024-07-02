# Artistry Studio

## Links
[Live site link](https://artistry-studio-yamin39.web.app/)

[Server side repo link](https://github.com/Yamin39/artistry-studio-server)

## Overview

- **Project Concept**: Artistry Studio is an online platform for browsing, adding, and managing art and craft items, with a focus on painting and drawing categories.
- **Problem Solved**: It provides a centralized place for artists to showcase and manage their artworks, making it easier for users to explore and purchase unique art pieces.
- **Technologies Used**: HTML, CSS, JavaScript, ReactJS, Firebase, Tailwind CSS, Daisy UI.
- **Best Features**:
  - User authentication with Google and GitHub login options.
  - Ability for users to add, update, and delete their own art items.
  - Support for both light and dark modes on the homepage.

## Setup Process

To run the project locally, follow these steps:

1. **Clone the repository**:
```bash
git clone https://github.com/Yamin39/artistry-studio-client.git
```

2. **Navigate to the project directory**:
```bash
cd artistry-studio-client
```

3. **Install dependencies**:
```bash
npm install
```

4. **Set up Firebase credentials**: Create a .env.local file and add your Firebase credentials
```javascript
VITE_APIKEY=yourAPIKEY
VITE_AUTHDOMAIN=yourAUTHDOMAIN
VITE_PROJECTID=yourPROJECTID
VITE_STORAGEBUCKET=yourSTORAGEBUCKET
VITE_MESSAGINGSENDERID=yourMESSAGINGSENDERID
VITE_APPID=yourAPPID
```

5. **Run the project**:
```bash
npm run dev
```
