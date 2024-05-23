// jas.js

// 페이지 로드 시 호출
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
// jas.js

// Assign 버튼을 클릭했을 때 호출되는 함수
function openAssignPage() {
    // 여기에 Assign 페이지를 열기 위한 코드를 추가합니다.
    // 예를 들어, window.location.href를 사용하여 새로운 페이지로 이동할 수 있습니다.
    window.location.href = 'assign.html'; // assign.html은 내부 페이지의 파일명입니다.
    console.log
}

// Assign 버튼 클릭 이벤트에 함수 연결
document.querySelector('.assign-button').addEventListener('click', openAssignPage);
function openAssignPage() {
    console.log('assign button clicked'); // 디버깅용 메시지
    window.location.href = 'assign.html';
}
