import { CardProps } from "../components/card";
import { Card } from "../components/card";

export function getCard(x : CardProps){
     return (
       <Card  type={x.type} link={x.link} title={x.title} description={x.description}/>
       ) ;
}