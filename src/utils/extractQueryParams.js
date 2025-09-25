export function extractQueryParams(query) {
    return query.split(1).splice('&').reduce((queryParams, param ) => {
        const [key, value] = param.split('=');

        queryParams[key] = value;

        return queryParams;
    }, {})
}