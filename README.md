
# LeetCode Scheduler Chrome Extension

## Description  
LeetCode Scheduler is a simple Chrome extension that helps you stay on top of your algorithm practice by automatically opening LeetCode questions. With this extension, you can:
- Open the LeetCode website with a click of the "Start" button.
- Set a timer that will open a random LeetCode question every two hours.
- Track the status of the timer (Running/Stopped) via the extension popup.

## Key Features
- **Auto-redirection**: Click "Start" to open the LeetCode website in a new tab.
- **Automatic Question Opening**: After starting, the extension opens a random LeetCode question in a new tab every 2 hours.
- **Timer Control**: You can start or stop the timer directly from the extension’s popup.
- **Customizable Timer**: The timer interval is currently set to 2 hours, but can be modified for different intervals based on user needs.

## Technologies Used
- **HTML** for the extension popup UI
- **JavaScript** for handling timer functionality and interactions
- **Chrome Extensions API** for managing alarms and tabs

## Installation Instructions
1. Download the repository files.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" and click on "Load unpacked".
4. Select the folder containing the extension files.
5. The extension will appear in your Chrome toolbar, ready to use!

## Usage
1. Click the extension icon.
2. Hit "Start" to open the LeetCode website and start the timer.
3. Hit "Stop" to stop the timer.

## Future Improvements
- Add a feature to open a specific random problem from LeetCode.
- Allow custom intervals for opening the questions.
- Display notifications for upcoming questions.

