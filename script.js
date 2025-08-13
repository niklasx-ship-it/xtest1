document.addEventListener('DOMContentLoaded', () => {
    const patientContainer = document.getElementById('patient-container');
    const xrayViewer = document.getElementById('xray-viewer');
    const diagnoseButton = document.getElementById('diagnose-button');
    const diagnosisInput = document.getElementById('diagnosis-input');
    const message = document.getElementById('message');

    const correctDiagnosis = 'key';

    patientContainer.addEventListener('mouseenter', () => {
        xrayViewer.style.display = 'block';
    });

    patientContainer.addEventListener('mouseleave', () => {
        xrayViewer.style.display = 'none';
    });

    patientContainer.addEventListener('mousemove', (e) => {
        const rect = patientContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const viewerSize = xrayViewer.offsetWidth;
        xrayViewer.style.left = `${x - viewerSize / 2}px`;
        xrayViewer.style.top = `${y - viewerSize / 2}px`;

        const bgX = -x + viewerSize / 2;
        const bgY = -y + viewerSize / 2;
        xrayViewer.style.backgroundPosition = `${bgX}px ${bgY}px`;
    });

    diagnoseButton.addEventListener('click', () => {
        const userDiagnosis = diagnosisInput.value.trim().toLowerCase();
        if (userDiagnosis === correctDiagnosis) {
            message.textContent = 'Correct! The diagnosis is a key.';
            message.style.color = '#28a745'; // Green color for success
        } else {
            message.textContent = 'Incorrect diagnosis. Please try again.';
            message.style.color = '#d9534f'; // Red color for error
        }
    });
});
