import axios from 'axios'

export default {
	gethome(params) {
    return axios.get('https://yapi.xmodules.xyz/mock/24/home/info',params)
	},
}
