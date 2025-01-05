function hello(){
    let data = 'everything will be fine, it will take some time. keep patient!'
    return data
}

(async()=>{
    try {
        const fetchData =  hello()
        console.log(fetchData)
    } catch (error) {
        console.error('An error occured ', error)
    }
})();

// promise

let promise = new Promise ((res, rej)=>{
    let data = 'hellooooo'

    if(data){
        res({ status: 'data fetched', message: data })
    }else{
        rej('data couldnt fetched')
    }
})

promise
 .then((data)=> console.log(data.message))
 .catch(error=> console.log('An error occured', error))