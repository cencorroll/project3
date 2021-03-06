import  { thingsToDoInBarcelona, thingsToDoInLondon, thingsToDoInParis, thingsToDoInLisbon, thingsToDoInAmsterdam, thingsToDoInIstanbul, thingsToDoInPorto, thingsToDoInSeville, thingsToDoInAberdeen, thingsToDoInEdinburgh, thingsToDoInGlasgow } from './thingsToDo.js'
import { restaurantDataBarcelona, restaurantDataLondon, restaurantDataParis, restaurantDataLisbon, restaurantDataIstanbul, restaurantDataPorto, restaurantDataSeville, restaurantDataAmsterdam, restaurantDataAberdeen, restaurantDataEdinburgh, restaurantDataGlasgow } from './restaurantData.js'
import { hotelsoInBarcelona, hotelsoInLondon, hotelsoInParis, hotelsoInLisbon, hotelsoInIstanbul, hotelsoInPorto, hotelsoInSeville, hotelsoInAmsterdam, hotelsoInAberdeen, hotelsoInEdinburgh, hotelsoInGlasgow } from './hotelsData.js'
import { thingsToDo } from './thingsToDo.js'
import { hotelsData } from './hotelsData.js'
import { restaurantData } from './restaurantData.js'
export default [
  {
    name: 'Paris',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873',
    country: 'France',
    thingsToDo: thingsToDoInParis,
    restaurants: restaurantDataParis,
    hotels: hotelsoInParis,
  },

  {
    name: 'London',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870',
    country: 'England',
    thingsToDo: thingsToDoInLondon,
    restaurants: restaurantDataLondon ,
    hotels: hotelsoInLondon,
    // shortHistory: shortHistroyData,
  },
  
  {
    name: 'Barcelona',
    image: 'https://images.unsplash.com/photo-1587789202069-f57c846b85db?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871',
    country: 'Spain',
    thingsToDo: thingsToDoInBarcelona,
    restaurants: restaurantDataBarcelona ,
    hotels: hotelsoInBarcelona,
    // shortHistory: shortHistroyData,
  },
  {
    name: 'Istanbul',
    image: 'https://idsb.tmgrup.com.tr/ly/uploads/images/2020/04/17/thumbs/800x531/31299.jpg',
    country: 'Turkey',
    thingsToDo: thingsToDoInIstanbul,
    restaurants: restaurantDataIstanbul,
    hotels: hotelsoInIstanbul,
  },
  {
    name: 'Lisbon',
    image: 'https://www.expatica.com/app/uploads/sites/8/2017/05/lisbon-1920x1080.jpg',
    country: 'Portugal',
    thingsToDo: thingsToDoInLisbon,
    restaurants: restaurantDataLisbon,
    hotels: hotelsoInLisbon,
  },
  {
    name: 'Porto',
    image: 'https://touristjourney.com/wp-content/uploads/2020/10/shutterstock_1706807566-scaled.jpg',
    country: 'Portugal',
    thingsToDo: thingsToDoInPorto,
    restaurants: restaurantDataPorto,
    hotels: hotelsoInPorto,
  },
  {
    name: 'Seville',
    image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/10/31/16/seville.jpg?quality=75&width=1200&auto=webp',
    country: 'Spain',
    thingsToDo: thingsToDoInSeville,
    restaurants: restaurantDataSeville,
    hotels: hotelsoInSeville,
  },
  {
    name: 'Amsterdam',
    image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/08/08/12/amsterdam-gabled-houses.jpg?quality=75&width=982&height=726&auto=webp',
    country: 'Netherland',
    thingsToDo: thingsToDoInAmsterdam,
    restaurants: restaurantDataAmsterdam,
    hotels: hotelsoInAmsterdam,
  },
  //? scottish cities
  {
    name: 'Edinburgh',
    image: 'https://images.unsplash.com/photo-1535448033526-c0e85c9e6968?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870',
    country: 'Scotland',
    thingsToDo: thingsToDoInEdinburgh,
    restaurants: restaurantDataEdinburgh,
    hotels: hotelsoInEdinburgh,
    // shortHistory: shortHistroyData,
  },
  {
    name: 'Aberdeen',
    image: 'https://images.unsplash.com/photo-1566222390510-514b1bb349b0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867',
    country: 'Scotland',
    thingsToDo: thingsToDoInAberdeen,
    restaurants: restaurantDataAberdeen,
    hotels: hotelsoInAberdeen,
    // shortHistory: shortHistroyData,
  },
  {
    name: 'Glasgow',
    image: 'https://images.unsplash.com/photo-1628874669577-7dd97c06517e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870',
    country: 'Scotland',
    thingsToDo: thingsToDoInGlasgow,
    restaurants: restaurantDataGlasgow,
    hotels: hotelsoInGlasgow,
    // shortHistory: shortHistroyData,
  },
  {
    name: 'Munich',
    image: 'https://images.unsplash.com/photo-1518290581883-8a26c3735cd2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169',
    country: 'Germany',
    thingsToDo: thingsToDo,
    restaurants: restaurantData,
    hotels: hotelsData,
    // shortHistory: shortHistroyData,
  },
  {
    name: 'San Sebastian',
    image: 'https://images.unsplash.com/photo-1594305548608-df04461f1b28?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1612',
    country: 'Spain',
    thingsToDo: thingsToDo,
    restaurants: restaurantData,
    hotels: hotelsData,
    // shortHistory: shortHistroyData,
  },
  {
    name: 'Salzburg',
    image: 'https://images.unsplash.com/photo-1535653831895-6eeaaa50953c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074',
    country: 'Austria',
    thingsToDo: thingsToDo,
    restaurants: restaurantData,
    hotels: hotelsData,
    // shortHistory: shortHistroyData,
  },
  {
    name: 'Siena',
    image: 'https://images.unsplash.com/photo-1604142056225-1feabdac3af1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632',
    country: 'Italy',
    thingsToDo: thingsToDo,
    restaurants: restaurantData,
    hotels: hotelsData,
    // shortHistory: shortHistroyData,
  },
  {
    name: 'Dubrovnik',
    image: 'https://images.unsplash.com/photo-1589472501747-1660aeed4d80?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171',
    country: 'Croatia',
    thingsToDo: thingsToDo,
    restaurants: restaurantData,
    hotels: hotelsData,
    // shortHistory: shortHistroyData,
  },
  {
    name: 'Venice',
    image: 'https://images.unsplash.com/photo-1545157000-85f257f7b040?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170',
    country: 'Italy',
    thingsToDo: thingsToDo,
    restaurants: restaurantData,
    hotels: hotelsData,
    // shortHistory: shortHistroyData,
  },
  {
    name: 'Bruges',
    image: 'https://images.unsplash.com/photo-1515784638688-3f7e90ebb446?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176',
    country: 'Belgium',
    thingsToDo: thingsToDo,
    restaurants: restaurantData,
    hotels: hotelsData,
    // shortHistory: shortHistroyData,
  },
  {
    name: 'Reykjavik',
    image: 'https://images.unsplash.com/photo-1583459291453-f7c2b9fb98f9?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170',
    country: 'Iceland',
    thingsToDo: thingsToDo,
    restaurants: restaurantData,
    hotels: hotelsData,
    // shortHistory: shortHistroyData,
  },
  {
    name: 'Galway',
    image: 'https://images.unsplash.com/photo-1591220167816-647a19555d72?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170',
    country: 'Ireland',
    thingsToDo: thingsToDo,
    restaurants: restaurantData,
    hotels: hotelsData,
    // shortHistory: shortHistroyData,
  },
  {
    name: 'Lyon',
    image: 'https://images.unsplash.com/photo-1588240668832-a12810ca39de?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170',
    country: 'France',
    thingsToDo: thingsToDo,
    restaurants: restaurantData,
    hotels: hotelsData,
    // shortHistory: shortHistroyData,
  },
  {
    name: 'Monte Carlo',
    image: 'https://images.unsplash.com/photo-1526675261026-b83db55e4035?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170',
    country: 'Monaco',
    thingsToDo: thingsToDo,
    restaurants: restaurantData,
    hotels: hotelsData,
    // shortHistory: shortHistroyData,
  },
  {
    name: 'Vienna',
    image: 'https://images.unsplash.com/photo-1587717170496-dbe09eb35f07?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170',
    country: 'Austria',
    thingsToDo: thingsToDo,
    restaurants: restaurantData,
    hotels: hotelsData,
    // shortHistory: shortHistroyData,
  },
  {
    name: 'Valletta',
    image: 'https://images.unsplash.com/photo-1584348059301-bb1d44173050?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633',
    country: 'Malta',
    thingsToDo: thingsToDo,
    restaurants: restaurantData,
    hotels: hotelsData,
    // shortHistory: shortHistroyData,
  },
  {
    name: 'Florance',
    image: 'https://images.unsplash.com/photo-1547590008-4b0fcb7a984c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170',
    country: 'Italy',
    thingsToDo: thingsToDo,
    restaurants: restaurantData,
    hotels: hotelsData,
    // shortHistory: shortHistroyData,
  },
  {
    name: 'Helsinki',
    image: 'https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170',
    country: 'Finland',
    thingsToDo: thingsToDo,
    restaurants: restaurantData,
    hotels: hotelsData,
    // shortHistory: shortHistroyData,
  },
  {
    name: 'Copenhagen',
    image: 'https://images.unsplash.com/photo-1611515905024-d6530366c87c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171',
    country: 'Denmark',
    thingsToDo: thingsToDo,
    restaurants: restaurantData,
    hotels: hotelsData,
    // shortHistory: shortHistroyData,
  },
  {
    name: 'Krakow',
    image: 'https://images.unsplash.com/photo-1606992894456-799462dacd65?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170',
    country: 'Poland',
    thingsToDo: thingsToDo,
    restaurants: restaurantData,
    hotels: hotelsData,
    // shortHistory: shortHistroyData,
  },
  {
    name: 'Lucerne',
    image: 'https://images.unsplash.com/photo-1575725136289-f0cb3d2eb41e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170',
    country: 'Switzerland',
    thingsToDo: thingsToDo,
    restaurants: restaurantData,
    hotels: hotelsData,
    // shortHistory: shortHistroyData,
  },
  {
    name: 'Athens',
    image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170',
    country: 'Greece',
    thingsToDo: thingsToDo,
    restaurants: restaurantData,
    hotels: hotelsData,
    // shortHistory: shortHistroyData,
  },
  {
    name: 'Oslo',
    image: 'https://images.unsplash.com/photo-1433757741270-94a3bcadc2f3?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1076',
    country: 'Norway',
    thingsToDo: thingsToDo,
    restaurants: restaurantData,
    hotels: hotelsData,
    // shortHistory: shortHistroyData,
  },
  {
    name: 'Stockholm',
    image: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170',
    country: 'Sweden',
    thingsToDo: thingsToDo,
    restaurants: restaurantData,
    hotels: hotelsData,
    // shortHistory: shortHistroyData,
  }

]