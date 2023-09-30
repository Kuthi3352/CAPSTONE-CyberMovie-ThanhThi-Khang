import { useSelector } from "react-redux"
import { RootState } from "store"

const BannerDiv = () => {
  const {bannerList} = useSelector((state:RootState)=>state.QuanLyPhim)
  console.log(bannerList);
  
  return (
    <div>
      
    </div>
  )
}

export default BannerDiv
