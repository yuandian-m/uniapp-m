import http from '../http.js'
export const get_table = (data) => http({
	url: "get_label",
	data
})
export const get_list = (data) => http({
	url: "get_list",
	data
})
export const update_like = (data) => http({
	url: 'update_like',
	data
})
