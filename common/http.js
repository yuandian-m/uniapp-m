export default function $http(options) {
	const {
		url,
		data
	} = options
	const dataObj = {
		user_id: '5f11624fbb1edd0001a58fc2',
		...data
	}
	return new Promise((reslove, reject) => {
		uniCloud.callFunction({
			name: url,
			data: dataObj
		}).then((res) => {

			if (res.result.code === 200) {
				// .then
				reslove(res.result)
			} else {
				// catch
				reject(res.result)
			}

		}).catch((err) => {
			reject(err)
		})
	})
}
