const display = () => {
    const xhr = new XMLHttpRequest();
    let url = 'https://api.adviceslip.com/advice';

    xhr.open('GET', url, true);

    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            let data = JSON.parse(xhr.responseText);
            console.log(data);

            let adviceText = document.getElementById('advice-text');
            let adviceNo = document.getElementById('advice-no');
            adviceNo.innerHTML = `${data.slip.id}`;
            adviceText.innerHTML = `"${data.slip.advice}"`;
        }
        else {
            console.error('Request failed, Satus:', xhr.status);
        }
    };

    xhr.onerror = () => {
        console.error('Request failed');
    }

    xhr.send();
}