document.addEventListener('DOMContentLoaded', () => {
    const incrementButton = document.getElementById('increment-btn');
    const daysAbsent = document.getElementById('days-absent');
    const warningMessage = document.createElement('div');
    warningMessage.classList.add('warning');
    warningMessage.textContent = "Chronic Absenteeism";

    let absenceDays = 0;
    let socialCredit = 0;	

    incrementButton.addEventListener('click', () => {
        absenceDays++;
        daysAbsent.textContent = absenceDays;

        if (absenceDays > 15) {
            if (!document.body.contains(warningMessage)) {
                document.body.appendChild(warningMessage);
            }
            warningMessage.style.display = 'block';
        } else {
            warningMessage.style.display = 'none';
        }

	socialCredit -= 10;
        creditScore.textContent = socialCredit;

        if (socialCredit <= -200) {
            executionWarning.innerHTML = "<h2>EXECUTION DATE: 明天</h2>";
            executionWarning.style.display = 'block';
        }
    });
});
