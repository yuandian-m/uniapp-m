export default function $http(option) {
	const {
		data,
		url
	} = option;
	return new Promise((resolve, reject) => {
		uniCloud.callFunction({
			name: url,
			data: data
		}).then(res => {
			if (res.result.code === 200) {
				// .then
				resolve(res.result)
			} else {
				// catch
				reject(res.result)
			}
		}).catch(err=>{
			reject(err)
		})
	})
}
