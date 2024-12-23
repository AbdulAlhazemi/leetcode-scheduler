document.getElementById("start").addEventListener("click", () => {
  // Redirect to LeetCode website when Start button is clicked
  const leetcodeURL = "https://leetcode.com";
  chrome.tabs.create({ url: leetcodeURL });

  // Start the timer to open a random question every 2 hours
  chrome.alarms.create("leetcodeTimer", { periodInMinutes: 120 });
  document.getElementById("status").textContent = "Running";
});

document.getElementById("stop").addEventListener("click", () => {
  // Stop the alarm and prevent the LeetCode question from opening
  chrome.alarms.clear("leetcodeTimer");
  document.getElementById("status").textContent = "Stopped";
});