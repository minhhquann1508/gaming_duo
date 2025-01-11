import { Carousel } from "antd"

const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '240px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const MainCarousel = () => {
    return (
        <Carousel
            style={{ borderRadius: 12, overflow: 'hidden' }}
            autoplaySpeed={2000}
            autoplay={true}
            draggable={true}
            infinite={true}
            arrows
        >
            <div>
                <h3 style={contentStyle}>1</h3>
            </div>
            <div>
                <h3 style={contentStyle}>2</h3>
            </div>
            <div>
                <h3 style={contentStyle}>3</h3>
            </div>
            <div>
                <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>
    )
}

export default MainCarousel