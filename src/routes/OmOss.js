import PersonList from '../components/OmOss/personList';
import '../styles/omOss.css';
import LoremIpsum from '../components/LoremIpsum';

const OmOss = () => {

    return ( 
    <div id="omOssWrapper">
        <h1>Om Oss</h1>
        <LoremIpsum></LoremIpsum>
        <PersonList></PersonList>
    </div> 
    );
}

export default OmOss;