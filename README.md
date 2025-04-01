# Playlist UI Automation Tests

## Overview

This project contains automated tests for the Playlist UI using Playwright. The tests cover search functionality, adding tracks to a playlist, and verifying the total playlist duration.

## Setup Instructions

### 1️⃣ Prerequisites

Before running the tests, ensure you have the following installed:

- **Node.js** (v16 or later)
- **npm** (included with Node.js)
- **Playwright** (installed via npm)

### 2️⃣ Clone the Repository

Run the following command to clone the repository:

```sh
git clone InterviewTask
```

### 3️⃣ Install Dependencies

Install the required dependencies by running:

```sh
npm install
```

### 4️⃣ Install Playwright Browsers

Playwright requires browser binaries. Install them with:

```sh
npx playwright install
```

## ▶️ Running the Tests

### Run All Tests

Execute the following command to run all tests:

```sh
npx playwright test
```

### Run a Specific Test File

For example, to run tests for adding tracks:

```sh
npx playwright test tests/addTracks.spec.ts
```

### Run Tests in Headed Mode (with Browser UI)

To visually see the tests running, use:

```sh
npx playwright test --headed
```

### Run Tests with Debug Mode

For debugging purposes, run:

```sh
npx playwright test --debug
```

## 📄 Test Scenarios
### ✅ Search Functionality

- Filters tracks when searching for a specific title.
- Ensures only matching tracks are displayed.

### ✅ Add Track Using the "+" Button

- Adds a track to the playlist when clicking "+".
- Confirms the track is displayed in "Your Playlist".

### ✅ Verify Total Playlist Duration

- Checks if the total duration of the playlist is calculated correctly.

