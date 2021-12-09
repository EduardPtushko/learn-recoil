type QueryParamsType = string | string[][] | URLSearchParams | Record<string, string> | undefined

type RequestOptions = {
	queryParams?: QueryParamsType
	method?: 'GET' | 'POST'
	body?: object | string
}

export const apiUrl = (lambda: string, queryParams?: QueryParamsType) => {
	let url = `https://f10adraov8.execute-api.us-east-1.amazonaws.com/dev/${lambda}`
	if (queryParams) url += '?' + new URLSearchParams(queryParams).toString()

	return url
}

export const callApi = (lambda: string, options?: RequestOptions) => {
	const { queryParams, body, method } = options || {}
	const url = apiUrl(lambda, queryParams)

	let bodyString = body
	if (typeof bodyString === 'object') {
		bodyString = JSON.stringify(body)
	}

	return fetch(url, { body: bodyString, method }).then((res) => res.json())
}
