import React from "react";
import { Carousel, Container, Row, Col, Card } from "react-bootstrap";
import { useSelector } from "react-redux";

function Home() {
  const Provider = useSelector(state => state.productReducer)
  return (
    <>
      <div style={{ backgroundcolor: "lightgoldenrodyellow" }}>
        <div className="container my-4">
          <h1 style={{ textAlign: "center" }}>We Value Of Your Money</h1>
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <Carousel>
                  <Carousel.Item interval={1000}>
                    <img
                      className="d-block w-100"
                      src="https://cdn.pixabay.com/photo/2016/03/02/20/13/grocery-1232944_960_720.jpg"
                      alt=""
                    />
                    <h3>Assumptions are the termites of relationships</h3>
                  </Carousel.Item>
                  <Carousel.Item interval={1000}>
                    <img
                      className="d-block w-100"
                      src="https://cdn.pixabay.com/photo/2014/10/28/22/19/supermarket-507295__340.jpg"
                      alt=""
                    />
                    <h3>
                      We Won't deliver the product , we delever the experience
                    </h3>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://cdn.pixabay.com/photo/2015/08/19/10/25/shield-895808_960_720.png"
                      alt="Third slide"
                    />
                    <h3>Nothing is so contagious as enthusiasm</h3>
                  </Carousel.Item>
                </Carousel>
              </Col>
            </Row>
          </Container>
          <br></br>
          <br></br>
          <div style={{ display: "flex" }}>
            {Provider.map((ele) => {
              return (
                <div style={{ display: "flex" }} className="ms-3">
                  <Card style={{ width: "18rem", borderRadius: "10px" }}>
                    <Card.Img
                      variant="top"
                      src={ele.productImg}
                    />
                    <Card.Body>
                      <Card.Title>{ele.productName}</Card.Title>
                      <Card.Text>
                        {ele.productId}
                        <br></br>
                        {ele.productBrand}
                        <br></br>
                        {ele.productPrice}
                        <br></br>
                        {ele.productModel}
                        <br></br>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </div>
          <br></br>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
            architecto nam rem expedita? Laboriosam, id nobis. Accusamus, sit.
            Incidunt ipsa cupiditate nihil vel impedit, laborum delectus
            explicabo reiciendis aliquam eius vero quam quos quae, recusandae
            nemo. Odio molestiae quae culpa doloremque dolores laborum repellat!
            Expedita quis ipsam, at dolorem aperiam rem quia adipisci, amet
            culpa reiciendis ullam blanditiis assumenda deserunt minima est
            ratione atque aspernatur aliquid minus illo incidunt reprehenderit.
            Quasi delectus rem, possimus iure, doloremque, non reiciendis
            eveniet laboriosam quisquam fuga iusto? Quis dignissimos similique
            minus harum dolorum fuga facere consectetur magni, eaque accusamus
            rem cum obcaecati dicta maxime culpa dolore voluptates? Quo earum
            obcaecati corrupti reprehenderit dolore labore quis temporibus
            tempora deleniti. Possimus neque ad adipisci voluptates. Rem ad
            explicabo nostrum quia? Enim excepturi, numquam aperiam saepe
            placeat reiciendis illum, omnis, impedit eum neque totam alias ullam
            est. Cupiditate sequi ea pariatur libero labore deleniti eius
            accusamus reiciendis, quae, ut, aut saepe non autem adipisci enim
            impedit. Explicabo tempore sequi excepturi, exercitationem, iusto
            aliquid eius quia itaque, hic iste quas. Obcaecati repellat cumque,
            aliquid quaerat asperiores ad, aperiam excepturi ducimus magni harum
            minima! Corrupti harum sapiente saepe. Quia alias tempora ab
            nostrum. Tempore iure a laboriosam commodi eius quae, atque
            consequatur dolores porro nulla assumenda repellat, earum non magnam
            nihil cum deserunt minima cumque dolore? Aliquam beatae placeat
            itaque quis assumenda omnis veritatis similique iste, doloribus
            vitae esse nisi ut exercitationem cum sit ex temporibus quisquam.
            Consequuntur perferendis maiores fuga sunt accusantium voluptatum
            perspiciatis eos non? Totam molestiae, maiores consectetur sequi
            dolorem ratione iure corrupti vel delectus consequatur id
            consequuntur aliquam magnam nam, in maxime. Deserunt recusandae,
            aperiam maxime quo veritatis sint dolore odit quae natus, vero,
            voluptatem quaerat repellat. Vitae voluptas saepe est libero vero
            quod, esse voluptatibus ad! Culpa repudiandae numquam vero sunt
            labore. Odio, explicabo!
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
