const key = ' 	6qAz0DsUZkWEIGIVgb4HYZ3nokjir1lA  ';


//weather Api
 const getweather = async (id)=>{

     const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
     const q = `${id}?apikey=${key}`;

     const response= await fetch(base + q);

     const data= await response.json();

     return data[0] ;



 }






//city Api

const getcity= async (city)=>{

    const base= 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const q= `?apikey=${key}&q=${city}`;

    const response= await fetch(base + q);
    const data = await response.json();

    return data[0];
    

};

// getcity('manchester').then(data=>{
//          return  getweather(data.Key);
// }).then(data=>{
//     console.log(data);
// }).catch(error=>{

//     console.log(error);
// });

