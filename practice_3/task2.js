async function fetchCurrentTime() {
    try {
        const response = await fetch('https://www.worldtimeserver.com/current_time_in_RU-SPE.aspx?city=Saint_Petersburg');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const htmlText = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlText, 'text/html');
        const timeElement = doc.querySelector('.current-time');
        if (timeElement) {
            const currentTime = timeElement.textContent.trim();
            console.log(`Текущее время: ${currentTime}`);
            return currentTime;
        } else {
            console.error('Не удалось найти элемент с текущим временем.');
            return null;
        }
    } catch (error) {
        console.error('Ошибка при получении времени:', error);
    }
}
fetchCurrentTime();
