# Contest Tracker Backend & Frontend

This project aggregates contest information from various coding platforms such as Codeforces, CodeChef, and LeetCode, and provides a frontend to display and interact with the data.

## Features (Frontend)

1. **Display** upcoming and past contests from platforms like Leetcode, Codeforces, and CodeChef.
2. **Filter** contests based on platforms.
3. **Bookmark** a contest.
4. **Video Solution Link** if available from the TLE YouTube channel.
5. **Responsive UI** for mobile and tablet, with both light and dark mode.

## Backend Repository
- **Repo:** [Contest Tracker Backend](https://github.com/pavanydg/contest_backend)

## Tech Stack Used
- **Frontend:** Next.js, TailwindCSS, Framer Motion
- **Backend:** Express.js

## APIs Used

### Codeforces
- **Endpoint:** [`https://codeforces.com/api/contest.list`](https://codeforces.com/api/contest.list)
- **Description:** Provides a list of contests hosted on Codeforces.

### CodeChef
- **Endpoint:** [`https://www.codechef.com/api/list/contests/all?sort_by=START&sorting_order=asc&offset=0&mode=all`](https://www.codechef.com/api/list/contests/all?sort_by=START&sorting_order=asc&offset=0&mode=all)
- **Description:** Fetches all upcoming contests on CodeChef, sorted by start time in ascending order.

### Leetcode
- **Endpoint:** [`https://leetcode.com/graphql`](https://leetcode.com/graphql)
- **Description:** Uses GraphQL to retrieve contest details from LeetCode.

### YouTube API (for fetching videos)
- **Endpoint:** [`https://www.googleapis.com/youtube/v3/playlistItems`](https://www.googleapis.com/youtube/v3/playlistItems)
- **Description:** Fetches videos related to contests from YouTube playlists.

## Usage

### Backend Setup
1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/contest-tracker-backend.git
   ```

2. **Navigate to the project directory:**
   ```sh
   cd contest-tracker-backend
   ```

3. **Install dependencies:**
   ```sh
   npm install
   ```

4. **Set up environment variables for API keys if necessary.**

5. **Run the application:**
   ```sh
   node server.js
   ```

### Frontend Setup
1. **Clone the frontend repository:**
   ```sh
   git clone https://github.com/your-username/contest-tracker-frontend.git
   ```

2. **Navigate to the project directory:**
   ```sh
   cd contest-tracker-frontend
   ```

3. **Install dependencies:**
   ```sh
   npm install
   ```

4. **Run the development server:**
   ```sh
   npm run dev
   ```

5. **Open in browser:**
   Visit `http://localhost:3000` to see the frontend in action.

## Demo Video

https://github.com/user-attachments/assets/44a2b806-778d-4121-b371-d6809844fa90


## Contributing
Contributions are welcome! Please follow the [contribution guidelines](CONTRIBUTING.md) before submitting pull requests.

## License
This project is licensed under the [MIT License](LICENSE).
