if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/timetable-quiz/sw.js', { scope: '/timetable-quiz/' })})}