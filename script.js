document.addEventListener('DOMContentLoaded', () => {
    const incrementButton = document.getElementById('increment-btn');
    const daysAbsent = document.getElementById('days-absent');
    const creditScore = document.getElementById('credit-score'); // Ensure this element exists in HTML
    const warningMessage = document.createElement('div');
    warningMessage.classList.add('warning');
    warningMessage.textContent = "Chronic Absenteeism";

    let absenceDays = 4;
    let socialCredit = 100;

    incrementButton.addEventListener('click', () => {
        absenceDays++;
        daysAbsent.textContent = absenceDays;

        // Decrease social credit
        socialCredit -= 10;
        creditScore.textContent = socialCredit;

        // Display chronic absenteeism warning
        if (absenceDays > 15) {
            if (!document.body.contains(warningMessage)) {
                document.body.appendChild(warningMessage);
            }
            warningMessage.style.display = 'block';
        } else {
            warningMessage.style.display = 'none';
        }

        // Check for execution warning
        if (socialCredit <= -200) {
            executionWarning.innerHTML = "<h2>EXECUTION DATE: 明天</h2>";
            executionWarning.style.display = 'block';
        }
    });
});
