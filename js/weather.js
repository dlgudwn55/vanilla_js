const API_KEY = "ae17cb0da2f056a8e13a967afe6a3d4e";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(Response => Response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = `\nCiti: ${data.name}`;
        weather.innerText = `Weather: ${data.weather[0].main}, ${data.main.temp} ℃`;
    });
}

function onGeoError() {
    alert("사용자의 위치를 찾을 수 없습니다. \
네트워크에 문제가 있거나 사용자에 의해 위치 정보 제공이 거절되었을 수 있습니다.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);