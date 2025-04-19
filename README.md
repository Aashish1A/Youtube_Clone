Parent Component (Home.jsx)
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