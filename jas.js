// jas.js

document.addEventListener('DOMContentLoaded', loadJejuAirSchedule);

async function loadJejuAirSchedule() {
    try {
        const response = await fetch('https://api.odcloud.kr/api/FlightStatusListDTL/v1/getFlightStatusListDetail?page=1&perPage=10&airline=제주항공', {
            headers: {
                'Authorization': 'Bearer zxCPIqMjXaotvz0ZlhsSk3H51g3R%2BkQIaEbB3YXAaS%2BLa3l1SVFD8zZmC9PwnvN7n%2FpgM3QRCjNq5fw10fQNDg%3D%3D',
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Error fetching Jeju Air schedule');
        }

        const scheduleData = await response.json();
        displayFlightSchedule(scheduleData);
    } catch (error) {
        console.error(`Error fetching Jeju Air schedule: ${error.message}`);
    }
}

function displayFlightSchedule(scheduleData) {
    const sectionContent = document.getElementById('sectionContent');

    // Clear existing content
    sectionContent.innerHTML = '';

    // Display flight information
    scheduleData.forEach(flight => {
        const flightInfoBox = document.createElement('div');
        flightInfoBox.classList.add('content-box', 'flight-info');

        const flightInfo = `
            <h3>${flight.airline}</h3>
            <p>편명: ${flight.flightId}</p>
            <p>도착시간: ${flight.arrivalTime}</p>
            <p>출발시간: ${flight.departureTime}</p>
            <p>스팟: ${flight.gate}</p>
        `;

        flightInfoBox.innerHTML = flightInfo;
        sectionContent.appendChild(flightInfoBox);
    });
}

function openAssignPage() {
    console.log('assign button clicked'); // 디버깅용 메시지
    window.location.href = 'assign.html';
}
