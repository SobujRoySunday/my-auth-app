# Authentication App with Next.js & Tailwind CSS

This is a simple authentication application built with **Next.js** and styled using **Tailwind CSS**. It supports:

- User Registration
- User Login
- Modular backend authentication logic for easy database integration

---

## Features

- **User Registration and Login Pages**: Fully responsive and styled with Tailwind CSS.
- **Modular Backend Logic**: Easy-to-extend authentication service (`Authentication.ts`) for custom database integration.
- **Cookie-Based Authentication**: Sets an `authToken` on successful login.
- **Standardized Folder Structure**: Ensures maintainability and scalability.

---

## Folder Structure

```plaintext
├── /public                # Public assets like images
├── /src
│   ├── /components        # Reusable UI components
│   ├── /pages
│   │   ├── /auth          # Auth pages (Login, Signup)
│   ├── /services          # Authentication service
│   ├── /styles            # Tailwind and global styles
│   ├── /utils             # Helper functions
├── tailwind.config.js     # Tailwind configuration
├── next.config.js         # Next.js configuration
├── package.json           # Dependencies and scripts
└── README.md              # Project documentation
```

---

## How to Use

### 1. Clone the Repository

```bash
git clone https://github.com/your-repo-url.git
cd your-repo
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000`.

---

## Authentication Logic

The backend logic is implemented in the `src/services/Authentication.ts` file. It is modular, allowing you to easily integrate any database or third-party service.

### Example: `Authentication` Class

```typescript
export class Authentication {
  constructor() {
    // Initialize database or environment variables here
  }

  async Login(
    username: string,
    password: string
  ): Promise<{ success: boolean; message?: string }> {
    // Replace this logic with your database query
    if (username === "admin" && password === "password") {
      document.cookie = `authToken=12345; path=/`;
      return { success: true };
    }
    return { success: false, message: "Invalid credentials" };
  }

  async Register(data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }): Promise<{ success: boolean; message?: string }> {
    // Replace this logic with your database query
    if (data.email && data.password) {
      return { success: true };
    }
    return { success: false, message: "Failed to register user" };
  }
}
```

### How to Integrate a Database

Modify the `Login` and `Register` methods to query your database (e.g., MongoDB, MySQL, etc.).

---

## Customization

- Update the styling in the `src/styles/globals.css` file or extend the `tailwind.config.js`.
- Modify authentication methods in `Authentication.ts` to connect to your preferred database.
- Add additional features like password recovery or OAuth by extending the `Authentication` class.

---

## Build for Production

To build the application for production, run:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

---

## License

```
This project is licensed under the **MIT License**. Feel free to use, modify, and distribute as needed.
```
