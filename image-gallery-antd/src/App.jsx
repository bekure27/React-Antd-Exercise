import {Card, Input, List, Typography,Image} from 'antd';
import { useEffect, useState } from 'react';
import './App.css'

function App() {
const [searchText,setSearchText] = useState("");
const [dataSource,setDataSource] = useState([]);
const [loading, setLoading] = useState(false);
const [previewImage,setPreviewImage] =useState([]);
useEffect( ()=> {
// dummy json search product API
setLoading(true);
fetch(`https://dummyjson.com/products/search?q=${searchText}`)
.then(res => res.json())
.then(res => {
  setLoading(false);
  setDataSource(res.products)
});

},[searchText]);

  return (
    <>
<Typography.Title style={{textAlign:"center",fontFamily:"monospace"}}>
Image-Gallery
</Typography.Title>
<Input.Search style={{maxWidth:500, display:"flex", margin:"auto"}}
onSearch={(value) => {
  setSearchText(value);
}}
></Input.Search>
<Typography.Text>Showing the search result of <Typography.Text strong>{searchText || 'All'}</Typography.Text></Typography.Text>
<List loading={loading} dataSource={dataSource} 
grid={{xs:1,sm:2,md:3,lg:4,xl:5,xxl:6 }}
renderItem={(item)=> {
  return (
  <Card hoverable key={item.id} style={{height: 400, margin: 10, overflow:'hidden'}}>
 <Image src={item.thumbnail} preview={{visible:false}} 
 onClick={()=>{
setPreviewImage(item.images)
 }}>
 </Image>
  </Card>
  );
}}></List>
{
  previewImage.length>0?<Image.PreviewGroup preview={{visible:previewImage.length, onVisibleChange:(value)=>{
    if(!value){
      setPreviewImage([]);
    }
  }}}>
    {previewImage.map((image)=>{
      return <Image src={image}></Image>
    })}
  </Image.PreviewGroup>:null
}
    </>
  )
}

export default App
