

const cityform= document.querySelector('form');
const condition= document.querySelector('.condition');
const image= document.querySelector('.image');
const day= document.querySelector('.main-image');
const icon1= document.querySelector('.icon');



const updateUI = (data)=>{

        const weather= data.weather;
        const upcity= data.upcity;

        console.log(data);

        condition.innerHTML= `
            <p>${upcity.EnglishName}</p>
            <p>${weather.WeatherText}</p>
            <span class="display-6">${weather.Temperature.Metric.Value}</span>
            <span class="display-6">&deg; C</span>
        `;

        if(image.classList.contains('d-none'))
        {
            image.classList.remove('d-none');
        }


  

//set day and night pics 
        if(weather.IsDayTime)
        {
           day.setAttribute('src' , '/img/day.svg');
        }
        else
        {
         day.setAttribute('src' , '/img/night.svg');
        }
//set icon
      const iconsrc= `/img/icons/${weather.WeatherIcon}.svg`;
      icon1.setAttribute('src' , iconsrc);



}


const updatecity= async (city)=>{
   
   const upcity= await getcity(city);
   const weather = await getweather(upcity.Key);

  
   return { weather , upcity   };
  
};






cityform.addEventListener('submit' , e=>{

    e.preventDefault();

    const city = cityform.city.value.trim();
    cityform.reset();

     updatecity(city)
     .then(data=>{
        updateUI(data);
     }).catch(error=>{
        console.log(error);
     });
   
      localStorage.setItem('city' , city);
     
});

   if(localStorage.getItem('city')){

     updatecity(localStorage.getItem('city')).then(data=>{
      updateUI(data);
   }).catch(error=>{
      console.log(error);
   });

   }

