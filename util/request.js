import axios from 'axios'
import it from 'element-ui/src/locale/lang/it'
const baseUrl='118.195.166.188:8085'
export default function (url,method='GET',param={}) {
  method=method.toUpperCase()
  if(method==='GET'){
    let str='?'
    Object.keys(param).map(item=>{
      str+=item+'='+param[item]+'&'
    })
    str=str.slice(0,str.length-1)
    url+=str
    return axios.get(baseUrl+url)
  }else if(method==='POST'){
    return axios.post(baseUrl+url,data)
  }
}
