export async function makeApiRequest(url, method, body, token) {
  try {
    const baseUrl = 'http://localhost:8080/v1';
    let headers = { "Content-Type": "application/json",  };
   headers.Accept =  "application/json"
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    let options = {
      method: method,
      headers: headers,
    };
    if (method === "POST" || method === "PUT" || method === "PATCH") {
      options.body = JSON.stringify(body);
    }
    let response = await fetch(baseUrl + url, options);
    const data = await response.json();
    
    if (!response.ok) {
      console.log(data.message)
      throw data
    }
    return data;
  } catch (error) {
    throw error;
  }
}

export const saveData = (id, data) => {
    sessionStorage.setItem(id, JSON.stringify(data))
}

export const getData = (id) => {
    const data = sessionStorage.getItem(id)
    if (data) return JSON.parse(data)  
    else console.warn('no data found')
}

export const responseHandler = (res) => {
  if(typeof res === 'object') return res.message
  res = res.toString().split(':')
  const checkList =[ 'error', 'validation error', "\nValidation error"]
  let message =[];
  const temp =[]
  for (let i = 0; i < res.length; i++){
    if (!checkList.includes(res[i].trim().toLowerCase())) {
      temp.push(res[i].trim().split(','))
    }
  }
  while (temp.length > 0) {
    let i = 0
    if (temp[i].length > 1) {
      temp[i].pop()
      message.push(temp[i])
    }
    else {
      message.push(temp[i])
    }
    temp.shift()
    i++      
  }
  return message[0] 
}