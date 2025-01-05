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