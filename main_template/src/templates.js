import * as React from 'react';
import {Card} from 'baseui/card';

function Templates(){
    const CONCERTS = [
        {
          eventDateName: "Jón Jónsson og Friðrik Dór - fjölskyldutónleikar",
          name: "Tónleikar",
          dateOfShow: "2018-12-15T14:00:00",
          eventHallName: "Bæjarbíó (Hafnarfirði)",
          imageSource:
            "https://d30qys758zh01z.cloudfront.net/images/medium/1.10700.jpg"
        },
        {
          eventDateName: "Jón Jónsson og Friðrik Dór - fjölskyldutónleikar",
          name: "Tónleikar-UPPSELT",
          dateOfShow: "2018-12-15T16:00:00",
          eventHallName: "Bæjarbíó (Hafnarfirði)",
          imageSource:
            "https://d30qys758zh01z.cloudfront.net/images/medium/1.10700.jpg"
        },
        {
          eventDateName: "Hera Björk - Ilmur af jólum - Í borg og bæ",
          name: "Hólmavík",
          dateOfShow: "2018-12-15T17:00:00",
          eventHallName: "Hólmavíkurkirkja",
          imageSource:
            "https://d30qys758zh01z.cloudfront.net/images/medium/1.10648.jpg"
        },
        {
          eventDateName: "Hátíðartónleikar Eyþórs Inga",
          name: "Víðistaðakirkja",
          dateOfShow: "2018-12-15T20:00:00",
          eventHallName: "Víðistaðakirkja (Hafnarfirði)",
          imageSource:
            "https://d30qys758zh01z.cloudfront.net/images/medium/1.10630.jpg"
        },
        {
          eventDateName: "Jólin til þín",
          name: "Höfn",
          dateOfShow: "2018-12-15T20:00:00",
          eventHallName: "Íþróttahúsið á Höfn",
          imageSource:
            "https://d30qys758zh01z.cloudfront.net/images/medium/1.10647.jpg"
        },
        {
          eventDateName: "Jólalögin þeirra",
          name: "Tónleikar",
          dateOfShow: "2018-12-15T21:00:00",
          eventHallName: "Hendur í Höfn",
          imageSource:
            "https://d30qys758zh01z.cloudfront.net/images/medium/1.10687.jpg"
        }
      ];
    return(
        <div id='templates'>
            {CONCERTS.map(concert => (
                <Card
                    headerImage={concert.imageSource}
                    title={concert.name}
                    key={concert.eventDateName + concert.dateOfShow}
                    overrides={{
                        Root: {
                        style: {width:"475px", height: "475px", margin: "25px"}
                        }
                    }}
                >
                </Card>
            ))}
            <div id='selfDesignSlogan'>
                <p>
                    Don't like our selection?
                </p>
                <button id='contactUsButton'>Contact Us</button>
                <p>
                    To build your own.
                </p>
            </div>
        </div>
    );
}

export default Templates;