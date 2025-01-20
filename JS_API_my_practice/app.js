const url = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=a526289c4ac0e48a799eabdf5fd3eaba';

function populate() {
    document.getElementById('field').innerHTML = '<p>Test</p>'
}

// const request = new Request(url);
fetch(url).then(response => {
    if (response.ok) {
        return response.json();
    }
    throw new Error('Request failed');
}, networkError => console.log(networkError.message)
)
.then(jsonResponse => {
    // const jsonInfo = JSON.parse(jsonResponse);
    // return jsonInfo;
    // console.log(jsonInfo)

    // works:
    console.log(jsonResponse)
    // return jsonResponse;
})
populate();