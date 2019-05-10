const API = "http://localhost:3002/";

export const get = (request) => {
    return new Promise((resolve, reject) => {
        request.method = 'GET'
        doRequest(request).then(resolve).catch(reject)
    })
}

export const getJSON = (request) => {
    return new Promise((resolve, reject) => {
        request.method = 'GET'
        doRequest(request).then((response) => {
            response.json().then(resolve).catch(reject)
        }).catch(reject)
    })
}

export const postJSON = (request) => {
    return new Promise((resolve, reject) => {
        request.method = 'POST'
        doRequest(request).then(resolve).catch(reject)
    })
}

export const deleteToDo = (request) => {
    return new Promise((resolve, reject) => {
        request.method = 'DELETE'
        doRequest(request).then((response) => {
            response.json().then(resolve).catch(reject)
        }).catch(reject)
    })
}

export const put = (request) => {
    return new Promise((resolve, reject) => {
        request.method = "PUT";
        doRequest(request).then(resolve).catch(reject);
    });
};

export const doRequest = (request) => {
    if (!request.headers) {
        request.headers = {}
    }
    if (request.method !== 'GET' && !request.headers.hasOwnProperty('Content-Type')) {
        request.headers['Content-Type'] = 'application/x-www-form-urlencoded'
        request.body = encodeParameters(request.body)
    }
    if (!request.headers.hasOwnProperty('Accept')) {
        request.headers['Accept'] = 'application/json'
    }
    if (!request.headers.hasOwnProperty('Authorization') && request.accessToken) {
        request.headers['Authorization'] = `Bearer ${request.accessToken}`
    }

    return new Promise((resolve, reject) => {
        fetch(new Request(API + request.url, request)).then((response) => {
            response.traceId = response.headers.get('x-trace-id')
            if (response.status < 400) {
                return resolve(response)
            }
            return reject(response)
        }).catch((response) => {
            if (response.headers) {
                response.traceId = response.headers.get('x-trace-id')
            }
            return reject(response)
        })
    })
}

const encodeParameters = (params) => {
    const formBody = []
    for (const property in params) {
        const encodedKey = encodeURIComponent(property)
        const encodedValue = encodeURIComponent(params[property])
        formBody.push(`${encodedKey}=${encodedValue}`)
    }
    return `${formBody.join('&')}`
}