// On installation, set up the timer
chrome.runtime.onInstalled.addListener(() => {
  chrome.alarms.create("leetcodeTimer", { periodInMinutes: 120 }); // Trigger every 2 hours
});

// Handle alarm event
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "leetcodeTimer") {
    const randomQuestionURL = "https://leetcode.com/problems/random/";
    chrome.tabs.create({ url: randomQuestionURL });
  }
});
