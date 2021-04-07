import React from 'react';
// 참고: https://velog.io/@bearsjelly/React-kakao-%EC%A7%80%EB%8F%84-%EB%9D%84%EC%9A%B0%EA%B8%B0-2-%EC%95%B1%ED%82%A4%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%B4-%EC%A7%80%EB%8F%84-%EB%9D%84%EC%9A%B0%EA%B8%B0

/*global kakao*/ 

class App extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    const appkey = process.env.REACT_APP_APPKEY
    script.async = true;
    
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${appkey}&autoload=false&libraries=services`;
    document.head.appendChild(script)

    script.onload = () => {
      kakao.maps.load( () => {
        let container = document.getElementById("map")
        let options = {
          center: new kakao.maps.LatLng(37.506502, 127.053617),
          level: 8
        }

        const map = new kakao.maps.Map(container, options)
      })
    }
  }

  render() {
      return (
          <div id="map" style={{width:500, height:300}}/>
      )
  }
}

export default App;