//https://hospodarets.com/fetch_in_action

var getJSON = function (params) {
    var wrappedFetch = getWrappedFetch(
        params.cacheBusting ? params.url + '?' + new Date().getTime() : params.url,
        {
            method: 'get',// optional, "GET" is default value
            headers: {
                'Accept': 'application/json'
            }
        });

    var timeoutId = setTimeout(function () {
        wrappedFetch.reject(new Error('Load timeout for resource: ' + params.url));// reject on timeout
    }, MAX_WAITING_TIME);

    return wrappedFetch.promise// getting clear promise from wrapped
        .then(function (response) {
            clearTimeout(timeoutId);
            return response;
        })
        .then(processStatus)
        .then(parseJson);
};
