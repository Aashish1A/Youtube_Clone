# 🎥 YouTube Clone

A fully responsive YouTube clone built with **React.js** and **Tailwind CSS**, featuring dynamic video browsing, category filtering, and real-time data from the YouTube Data API.

## 🚀 Features

- **📱 Responsive Design**: Seamlessly adapts to all screen sizes
- **🎯 Category Filtering**: Browse videos by different categories (Gaming, Sports, Technology, etc.)
- **🔍 Dynamic Video Loading**: Real-time data fetching from YouTube API
- **▶️ Video Player**: Embedded YouTube video player with autoplay
- **💬 Comments Section**: Display video comments and engagement metrics
- **📊 Channel Information**: Show channel details, subscriber count, and statistics
- **🎛️ Collapsible Sidebar**: Toggle sidebar for better viewing experience
- **⚡ Smooth Animations**: Fluid transitions and responsive interactions

## 🛠️ Tech Stack

- **Frontend**: React.js, React Router DOM
- **Styling**: Tailwind CSS
- **API**: YouTube Data API v3
- **State Management**: React useState & useEffect hooks
- **Date Handling**: Moment.js
- **Build Tool**: Vite

## 📁 Project Structure

```
src/
├── Components/
│   ├── Navbar/
│   │   └── Navbar.jsx
│   ├── SideBar/
│   │   └── Sidebar.jsx
│   ├── Feed/
│   │   └── Feed.jsx
│   └── PlayVideo/
│       └── PlayVideo.jsx
├── Pages/
│   ├── Home/
│   │   └── Home.jsx
│   └── Video/
│       └── Video.jsx
├── assets/
│   └── [images and icons]
└── data.js
```

## 🔄 Component Architecture

```
Parent Component (App.jsx)
   |
   |---> State: sidebar (true), setSidebar
   |
   |---> Pass setSidebar to Navbar
   |---> Pass sidebar to Home
   |
   |---> Navbar.jsx
   |       |
   |       |-- Receives setSidebar
   |       |-- Toggles sidebar state when menu icon is clicked
   |
   |---> Home.jsx
           |
           |---> State: category (0), setCategory
           |
           |---> Pass category and setCategory to Sidebar
           |---> Pass category to Feed
           |
           |---> Sidebar.jsx
           |       |
           |       |-- Receives category and setCategory
           |       |-- Updates category using setCategory when a category is clicked
           |
           |---> Feed.jsx
                   |
                   |-- Receives category
                   |-- Fetches data from API using category
                   |-- Stores data in state (data, setData)
                   |-- Maps over data to render video cards
                   |-- Passes videoId to PlayVideo via Link
   |
   |---> PlayVideo.jsx
           |
           |-- Receives videoId from URL via useParams
           |-- Fetches video details, channel data, and comments from API
           |-- Displays video, channel info, and comments
```

## ⚙️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/Aashish1A/Youtube_Clone.git
   cd Youtube_Clone
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up YouTube API Key**

   - Get your API key from [Google Cloud Console](https://console.cloud.google.com/)
   - Enable YouTube Data API v3
   - Add your API key to `src/data.js`:

   ```javascript
   export const API_KEY = "YOUR_YOUTUBE_API_KEY_HERE";
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🎯 Key Functionalities

### 🏠 Home Page

- Displays trending videos based on selected category
- Responsive grid layout for video thumbnails
- Real-time view counts and upload dates
- Dynamic category filtering through sidebar

### 📺 Video Player Page

- Embedded YouTube video player with autoplay
- Video details (title, description, views, likes)
- Channel information with subscriber count
- Comments section with user interactions
- Related video recommendations

### 🎨 Sidebar Navigation

- Category-based video filtering
- Collapsible design for mobile responsiveness
- Active category highlighting
- Subscribed channels section

### 📱 Responsive Design

- Mobile-first approach with Tailwind CSS
- Adaptive layouts for different screen sizes
- Touch-friendly interactions
- Dynamic sidebar behavior

## 🔧 API Integration

The project uses the **YouTube Data API v3** for:

- Fetching trending videos by category
- Getting video details and statistics
- Retrieving channel information
- Loading video comments
- Getting video thumbnails and metadata

## 🚀 Future Enhancements

- [ ] **🔍 Search Functionality**: Search videos by keywords
- [ ] **📄 Search Results Page**: Dedicated page for search results
- [ ] **👤 User Authentication**: Login/logout functionality
- [ ] **💾 Favorites System**: Save favorite videos
- [ ] **🌙 Dark Mode**: Toggle between light and dark themes
- [ ] **📱 Progressive Web App**: Offline functionality
- [ ] **🔔 Notifications**: Real-time updates and notifications

## 📱 Screenshots

_Add screenshots of your application here_

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- YouTube Data API v3 for providing video data
- React.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Moment.js for date formatting

---

## 📞 Contact

**Aashish Kumar** - [@Aashish1A](https://github.com/Aashish1A)

Project Link: [https://github.com/Aashish1A/Youtube_Clone](https://github.com/Aashish1A/Youtube_Clone)

---

_Built with ❤️ by Aashish Kumar_
