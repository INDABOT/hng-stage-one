document.addEventListener('DOMContentLoaded', () => {
    const utcTimeElement = document.getElementById('utc-time');
    const dayOfWeekElement = document.getElementById('day-of-week');

    function updateTimeAndDay() {
        const now = new Date();
        utcTimeElement.textContent = now.toISOString().split('T')[1].split('.')[0];
        dayOfWeekElement.textContent = now.toLocaleString('en-us', { weekday: 'long' });
    }

    updateTimeAndDay();
    setInterval(updateTimeAndDay, 1000);
});
