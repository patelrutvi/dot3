import React from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Row } from 'reactstrap';

let rno = Math.floor(Math.random() * 100);
const bookname = [

    {
        id: rno,
        thumbnail:'https://m.media-amazon.com/images/I/71bT1k34TvL._SY466_.jpg',
        Title: 'How to Kill Men ',
        Athor: ' Marybeth Wuenschel',
        price: 230
    }
    ,
    {
        id: rno,
        thumbnail: 'https://m.media-amazon.com/images/I/81kFTkk++8L._SY466_.jpg',
        Title: 'Never Never',
        Athor: 'Bible Study ',
        price: 130
    },
    {
        id: rno,
        thumbnail: 'https://m.media-amazon.com/images/I/81kFTkk++8L._SY466_.jpg',
        Title: 'You Can',
        Athor: 'Bible Study ',
        price: 430
    },   {
        id: rno,
        thumbnail:'https://m.media-amazon.com/images/I/71bT1k34TvL._SY466_.jpg',
        Title: 'How to Kill Men ',
        Athor: ' Marybeth Wuenschel',
        price: 230
    }
    ,
    {
        id: rno,
        thumbnail: 'https://m.media-amazon.com/images/I/81kFTkk++8L._SY466_.jpg',
        Title: 'Never Never',
        Athor: 'Bible Study ',
        price: 130
    },
    {
        id: rno,
        thumbnail: 'https://m.media-amazon.com/images/I/71bT1k34TvL._SY466_.jpg',
        Title: 'You Can',
        Athor: 'Bible Study ',
        price: 430
    }
]

function Home(props) {
    return (

        <div>
            <Row style={{display:'flex' ,margin:'20px'}}>
                {
                    bookname.map((v, i) => {
                        return (
                            <Card
                                style={{
                                    width: '18rem',
                                    margin:'20px'
                                }}
                            >
                                <img
                                    alt="Sample"
                                    src= {v.thumbnail}

                                />
                                <CardBody>

                                    <CardSubtitle
                                        className="mb-2 text-muted"
                                        tag="h6"
                                    >
                                        {v.Title}
                                    </CardSubtitle>
                                    <CardText>
                                        {v.Athor}
                                    </CardText>
                                    <CardText>
                                        {v.price}
                                    </CardText>
                                    <Button>
                                        Add to Cart
                                    </Button>
                                </CardBody>
                            </Card>
                        )
                    })
                }
            </Row>
        </div>
    );
}

export default Home;