import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const uniqueState = uuidv4();
  
  const Handleurl = () => {
    // console.log('evvelki state',uniqueState);
    
    // let state = "82205d9a-eac9-4d85-8460-adf4b8579805"
    
    window.location.href=`https://portal.login.gov.az/grant-permission?client_id=fb541713acd54641b4e24b3724ca811e&redirect_uri=http://localhost:5901&response_type=code&state=${uniqueState}&scope=openid certificate session`
    sessionStorage.setItem('state', (uniqueState));
  }

    

  let url = window.location.href
  let searchParams = new URLSearchParams(url);
  const state = searchParams.get('state');
  let code = searchParams.get('?code')
  let result
  if(state != null){
    let query = window.location.search
    let Query = query.split('&')
    let res = Query[0].split('=')
    result = res[1]
  }
  else{
    console.log(state);
  }
  
  let ans;
  if(state == sessionStorage.getItem('state')){
    ans = result
  }
  else if(url != "http://localhost:5901/" && state != sessionStorage.getItem('state')){
    alert('state yanlisdir')
  }
  
  return (
    <>
      <button className="btn" onClick={Handleurl}>Redirect</button><br/>
      {
        ans ? (<span>code:{result}</span>) : <></>
      }
      
    </>
  );
}

export default App;
