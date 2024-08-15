const data = [
    {
        id:100, // Symbol(Date.now())  --> provide unique ids for every second
        name:'Youtube watching',
        desc:'',
        priority:'3', // 0 -> low, 1 -> average, 2 -> high, 3 -> important, 4 -> urgent 
        status: 0 // 0 -> complete, 1 -> pending, 2 -> active 
    },
    {
        id:200, // Symbol(Date.now())  --> provide unique ids for every second
        name:'WebSeries watching',
        desc:'Game of Throns',
        priority:'2',  
        status: 1 
    },
    {
        id:300, // Symbol(Date.now())  --> provide unique ids for every second
        name:'Game Playing',
        desc:'',
        priority:'1', 
        status: 2  
    },
    {
        id:400, // Symbol(Date.now())  --> provide unique ids for every second
        name:'Groceries',
        desc:'1.Tomato\n2.Onion\n3.Potato',
        priority:'4', 
        status: 0 
    },
]

export default data