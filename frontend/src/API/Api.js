import axios from 'axios'

const URL = process.env.REACT_APP_SERVER_URL

export const getData = async ({ setGetDataLoading, setResult }) => {
  try {
    // setGetDataLoading(true)
    let res = await axios.get(`${URL}/api/uploads/all`)
    if (res) {
      setGetDataLoading(false)
      setResult(res.data)
    }
  } catch (error) {
    alert(error)
    setGetDataLoading(false)
  }
}

export const postData = async ({
  setPostDataLoading,
  setPostDatas,
  title,
  image,
}) => {
  try {
    const datas = { title, image: image.filesUploaded[0].url }
    setPostDataLoading(true)
    let res = await axios.post(`${URL}/api/uploads`, datas)
    if (res) {
      setPostDataLoading(false)
      setPostDatas(res.data)
    }
  } catch (error) {
    alert(error)
    setPostDataLoading(false)
  }
}
