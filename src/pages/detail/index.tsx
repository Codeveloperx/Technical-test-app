import route from '../../resources/route.json';
import Header from "../../components/common/header";
import Image from "../../components/common/imagen";
import PokemonDetail from "../../components/pokemon-detail";

const DetailPage = () => {

  return (
    <>
      <Header>
        <Image src={`../${route.image.url}`} alt="Logo pokemon" />
      </Header>
      <PokemonDetail/>
    </>
  );
};

export default DetailPage;
