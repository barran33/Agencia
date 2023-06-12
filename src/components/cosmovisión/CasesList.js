import CaseCard from "./CaseCard"
import Carousel from '@itseasy21/react-elastic-carousel'
import { color } from "framer-motion"


function CasesList(){

    const posts = [
        {
            id:'4321-zxcv',
          title: 'Científica...',
          href: '/cosmovisión/científica',  
          category: { name: 'Científica' },        
          description:
            'La convergencia de la física cuántica, la cimática y la psicología transpersonal...',
          date: 'Feb 12, 2020',
          datetime: '2020-02-12',
          imageUrl:
          ' https://bafybeif2gs5r5o36fmx7c74s54rwdaqwpco5dwb2jpk3gaeac42rw7hfem.ipfs.w3s.link/939.jpeg',      
        },
                      
        {
            id:'5678-asdf',
          title: 'Espiritual...',
          href: '/cosmovisión/espiritual',         
          description:
            'Un Enfoque Integrador de la Geometría Sagrada, la Alquimia Occidental y la Metafísica...',
          date: 'Mar 10, 2020',
          datetime: '2020-03-10',
          imageUrl:
          '    https://bafybeigt4xmb7vi2rwm66gze6mukvsxre2duntyjllj4l3gnch4zbyzgru.ipfs.w3s.link/universe.png',          
         
        },
        
        {
          id:'3567-cdfs',
        title: 'Universal...',
        href: '/cosmovisión/universal',
        category: { name: 'Universal' },           
        description:
          'La Integración del Conocimiento Científico y Espiritual para el Bienestar del Cosmos... ',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        imageUrl:
          'https://bafybeihhfisfvljzn6mi3jgzmwswis3iee7dz6qkhp4skx5ywivddxcvii.ipfs.w3s.link/universe3.jpeg', 
      },   
     
      ]
      const  breakPoints = [
        { width: 1, itemsToShow: 1, itemsToScroll: 1 },
        { width: 1280, itemsToShow: 2, itemsToScroll: 2 },
        { width: 1750, itemsToShow: 3, itemsToScroll: 2 },
        // { width: 1450, itemsToShow: 5 },
        // { width: 1750, itemsToShow: 6 },
    ]  
    return(
        <div className="relative bg-white  mx-auto max-w-full">
        <div className="absolute hover:cyan-400 inset-0">
          <div className="h-1/3 bg-white  sm:h-2/3" />
        </div>
        <div className="relative  mx-auto max-w-full">
          <Carousel
                       
                  itemsToScroll={3}
                  itemsToShow={3}
                  breakPoints={breakPoints}
                  pagination={false}
                  itemPadding={[0, 48]}
                 
                  
              >
          
            {posts.map((post, index) => (
             <CaseCard index={index} data={post}/>
            ))}
             </Carousel>
          </div>
        </div>
      
    )
}
export default CasesList