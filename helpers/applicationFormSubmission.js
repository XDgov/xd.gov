const form = document.getElementById("application-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault(); // prevent page from reloading on submit

    const data = new FormData(event.target);
    const dataObject = Object.fromEntries(data.entries());

    // example submission post
    // postAjax('census-application-submit.gov', dataObject, onSubmitSuccess);
}

function onSubmitSuccess(responseText) {
    console.log(responseText);
    form.reset();
}

function postAjax(url, data, success) {
    const params = typeof data === 'string' ? data : Object.keys(data).map(
            k => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`
        ).join('&');
    const xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

    xhr.open('POST', url);
    xhr.onreadystatechange = () => {
        if (xhr.readyState>3 && xhr.status==200) { success(xhr.responseText); }
    };
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(params);
    return xhr;
}
