const express=require('express')


const app=express()

app.use(express.json())

const books=require('./data.json')


function logger(req,res,next){

    const book2= books.filter((book)=>
    req.params.name==book.author
    )

    res.json([{"API_requestedby":req.params.name},{"books":book2[0].bookname}  ])

   console.log(book2)
   next()

}




app.get('/',(req,res)=>{

   
  
        res.send({books})
    
    

    console.log(res.body)
})

app.get('/:name',logger,(req,res)=>{

   
  console.log('I am used after middleware')
    
})



app.post('/book',(req,res)=>{
    newbook=[...books,req.body]
    res.send(newbook)

    console.log(req.body)
})


app.get('/book/:id',(req,res)=>{
    const onebook=books.map((bok)=>{
        if(req.params.id==bok.id){
            res.send(bok)
        }
    })

  
})


app.patch('/book/:id',(req,res)=>{
    const newbook=books.map((book1)=>{
        if(req.params.id==book1.id){
          return req.body
        }
        return book1
    })

  res.send(newbook)
})



app.delete('/book/:id',(req,res)=>{
    const newbook=books.filter((book1)=>{
        req.params.id!==book1.id
         
        })
       

  res.send(newbook)
})







app.listen('1234',()=>{
    console.log('Listening on port 1234')
})



