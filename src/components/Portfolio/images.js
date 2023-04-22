import image1 from '../../images/works/1.jpg';
import image2 from '../../images/works/2.jpg';
import image3 from '../../images/works/3.jpg';
import image4 from '../../images/works/4.jpg';
import image5 from '../../images/works/5.jpg';
import image6 from '../../images/works/6.jpg';
import image7 from '../../images/works/7.jpg';
import image8 from '../../images/works/8.jpg';
import image9 from '../../images/works/9.jpg';
import image10 from '../../images/works/10.jpg';
import image11 from '../../images/works/11.jpg';
import image12 from '../../images/works/12.jpg';


const images = [];

for (let i = 1; i <= 12; i++) {
    const imageObj = {
        largeURL: require(`../../images/works/${i}.jpg`),
        thumbnailURL: require(`../../images/works/${i}.jpg`),
        width: '1600',
        height: '2400'
    };
    images.push(imageObj);
}


export default images;
