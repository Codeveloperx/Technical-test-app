import Header from "../../components/common/header";
import Filter from "../../components/filter";
import Layout from "../../layout/";
import Image from "../../components/common/imagen";
import route from "../../resources/route.json";
import Search from "../../components/search";
import SideBar from "../../components/common/sidebar";
import PokemonList from "../../components/Pokemon-list";
import Pagination from "../../components/pagination";
import { useContext } from "react";
import { GlobalContext } from "../../context/globalContext";
import { usePagination } from "../../hooks/usePagination";
import { KEY_DESCRIPTION_LOGO } from "../../resources/constant";

const Home = () => {
  const { pokemons, onHandlerChange, formState, onReset, types } =
    useContext(GlobalContext);
  const { page, nextPage, previousPage } = usePagination();

  return (
    <>
      <Header>
        <Image src={route.image.url} alt={KEY_DESCRIPTION_LOGO} />
      </Header>
      <SideBar>
        <Filter filters={types} />
      </SideBar>
      <Layout>
        <Search onChange={onHandlerChange} onReset={onReset} value={formState} />
        <PokemonList
          values={pokemons}
          page={page}
          searchPokemon={formState}
          onReset={onReset}
        >
          <Pagination
            maxItems={pokemons?.length}
            page={page}
            onNextPage={nextPage}
            onPrevPage={previousPage}
          />
        </PokemonList>
      </Layout>
    </>
  );
};

export default Home;
