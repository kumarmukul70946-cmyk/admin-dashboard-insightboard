# InsightBoard – Company Analytics Admin Dashboard

![InsightBoard Preview](https://placehold.co/1200x600/1e293b/ffffff?text=InsightBoard+Preview)

## 🚀 Live Demo

**[View Live Deployment on Vercel](https://admin-dashboard-insightboard.vercel.app/login)**

## 📖 About The Project

InsightBoard is a comprehensive, high-performance Admin Dashboard designed for modern companies to visualize analytics, manage users, track orders, and monitor products. Built with the latest web technologies, it focuses on a premium user experience with a responsive design, smooth animations, and a dual theme (Light/Dark) system.

## 🔄 How It Works

The application follows a secure and intuitive user flow:

1. **Authentication**: Users start at the Login page. Using the provided demo credentials, they can sign in as an 'Admin' or 'Viewer'.
2. **Dashboard Overview**: Upon login, the main dashboard presents real-time visualizations of key metrics like Sales, Revenue, and User Growth.
3. **Data Management**: Users can navigate through the sidebar to manage different resources:
    * **Users & Orders**: View, filter, and search through paginated lists of data.
    * **Products**: Monitor inventory and product status.
    * **Reports**: Analyze detailed graphical reports.
4. **Customization**: The 'Settings' panel allows users to toggle between **Dark** and **Light** modes, persisting their preference.

### Key Features

* **🎨 Premium UI/UX**: Modern, clean aesthetics with glassmorphism effects and smooth transitions using Tailwind CSS.
* **🌓 Dark/Light Mode**: Fully integrated theming system with persistent state using Zustand.
* **📊 Interactive Charts**: Dynamic visualization of sales, revenue, and user growth using Recharts.
* **📱 Fully Responsive**: Optimized for all devices, from desktops to mobile phones, with a collapsible sidebar.
* **🔐 Authentication Flow**: Secure login simulation with Protected Routes to restrict access to authorized personnel.
* **📋 Data Management**: Robust data tables with search, filtering, and pagination.
* **🔔 Interactive Elements**: Toast notifications, skeleton loaders, and micro-interactions for a polished feel.

## 🛠️ Tech Stack

This project is built using a modern frontend ecosystem to ensure performance, scalability, and developer experience:

* **Core**: [React 18](https://reactjs.org/) + [Vite](https://vitejs.dev/) (Fast HMR & Build)
* **Styling**: [Tailwind CSS v3](https://tailwindcss.com/) (Utility-first) + [Lucide React](https://lucide.dev/) (Icons)
* **State Management**: [Zustand](https://github.com/pmndrs/zustand) (Global state)
* **Routing**: [React Router DOM v6](https://reactrouter.com/)
* **Charts**: [Recharts](https://recharts.org/) (Data Visualization)
* **Forms & Validation**: React Hook Form + Zod
* **UI Components**: Headless UI concepts with custom Tailwind implementations
* **Utilities**: `clsx` & `tailwind-merge` (Class conditional logic), `axios` (HTTP requests), `react-hot-toast` (Notifications)

## ⚙️ How to Run Locally

Follow these steps to set up the project locally on your machine.

**Prerequisites**

* Node.js (v18 or higher)
* npm (v9 or higher)

**Installation**

1. **Clone the repository**

    ```bash
    git clone https://github.com/yourusername/insightboard.git
    cd insightboard/frontend
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Start the development server**

    ```bash
    npm run dev
    ```

4. **Open in Browser**
    Visit `http://localhost:5173` to view the application.

## 📂 Project Structure

```
frontend/
├── src/
│   ├── api/            # API configuration and mock services
│   ├── assets/         # Static images and icons
│   ├── components/     # Reusable UI components
│   │   ├── layout/     # Sidebar, Navbar, Layout wrappers
│   │   └── ui/         # Buttons, Cards, Inputs, Tables
│   ├── data/           # Mock data for charts and tables
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Application pages (Dashboard, Orders, etc.)
│   ├── store/          # Zustand state stores (Auth, Theme)
│   ├── utils/          # Helper functions
│   ├── App.jsx         # Main application entry
│   └── main.jsx        # DOM rendering
└── ...
```

## 🧪 Dummy Credentials

For testing the authentication flow, use the following credentials:

* **Admin Role**:
  * Email: `admin@demo.com`
  * Password: `admin`
* **Viewer Role**:
  * Email: `viewer@demo.com`
  * Password: `viewer`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

*Built with ❤️ by [Mukul Anand]*
