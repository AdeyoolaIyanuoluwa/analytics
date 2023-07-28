import React from "react";
import Card from "../components/Card/card";


export default {
    title: 'Components/Card',
    component: Card
}

const TemplateCard = (args)=>{
   return(
    <div>
        <Card {...args}></Card>
    </div>
   )
}

export const card = TemplateCard.bind({});
    card.args = {
        cardtitle: "Starter",
        subtext: "up to 3 users",
        cardprice: "29",
        duration: "per month"
    }