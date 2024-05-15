
export const setResponse = (data,response)=>{
    response.status(200)
    response.json(data)
}

export const setError = (err, response)=>{
    console.error(err);
    response.status(500)
    response.json({
        error:{
            code: "Internal Server error",
            message: err.message
        }
    })
}

export const setNotFound = (err,response)=>{
    console.log(err);
    response.status(200);
    response.json(
        {
            error:{
                code: 'Not Found',
                message: 'Donor note not found'
            }
        }
    )

    
}