// Set the page time acquisition logic  @Junchen Yi  2023-9-17

// Get the element with class="settingTime"
const settingTimeElement = document.querySelector('.settingTime');

// Update time function
function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0'); // 补零
    const seconds = now.getSeconds().toString().padStart(2, '0'); // 补零

    let timeOfDay = '';

    if (hours < 12) {
        timeOfDay = 'Morning';
    } else if (hours < 18) {
        timeOfDay = 'Afternoon';
    } else {
        timeOfDay = 'Evening';
    }

    // Inject time into the HTML element if it exists
    if (settingTimeElement) {
        settingTimeElement.textContent = `${timeOfDay} ${hours}:${minutes}:${seconds}`;
    }
}

// Initial update
updateTime();

// Update every second
setInterval(updateTime, 1000);
