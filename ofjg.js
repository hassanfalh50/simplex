        const timerButton = document.getElementById('timer-button');
        const timer = document.getElementById('timer');
        const downloadLink = document.getElementById('download-link');
        const countdownDuration = 5; // عدد الثواني للعد التنازلي

        const updateTimer = (timeRemaining) => {
            timer.textContent = `الوقت المتبقي: ${timeRemaining} ثواني`;
        };

        const showDownloadLink = () => {
            timer.style.display = 'none';
            downloadLink.style.display = 'block';
        };

        timerButton.addEventListener('click', () => {
            timerButton.disabled = true;
            let timeRemaining = countdownDuration;

            updateTimer(timeRemaining);

            const countdown = setInterval(() => {
                timeRemaining--;
                updateTimer(timeRemaining);

                if (timeRemaining <= 0) {
                    clearInterval(countdown);
                    showDownloadLink();
                }
            }, 1000);
        });
