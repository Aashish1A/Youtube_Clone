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