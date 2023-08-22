import PersonLista from "../components/OmOss/PersonLista";

const OmOss = () => {

    let personer = [
        {
            "name": "Kajjan",
            "age": 27,
            "do": "work",
            "id": 1
        },{
            "name": "Luce",
            "age": 30,
            "do": "work n' study",
            "id": 2
        },{
            "name": "Matt",
            "age": 24,
            "do": "study",
            "id": 3
        }
    ]

    //const {data: personer, isLoading, error} = useFetch("http://localhost:8000/personer");

    return ( 
        <div id="omOssWrapper">
            <h1>Om Oss</h1>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa vel pharetra tempus. Maecenas sed vehicula diam, ac venenatis lectus. Aliquam id imperdiet lectus. Curabitur pretium orci in est consequat maximus.</h4>
            {personer && <PersonLista personer={personer}></PersonLista>}
        </div>
    );
}

export default OmOss;