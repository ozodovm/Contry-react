import CountryCard from "../CountryCard"
import SearchIcon from "../../assets/images/search.svg"
import loadingIcon from "./../../assets/images/loading.png"
import CaruselSwiper from "../CaruselSwiper/CaruselSwiper";

function Hero({Allcountries, countries, setCounties,isLoading, setIsLoading, isOpenModal, setIsOpenModal}){

  function handleSearchCountry(e){
    setIsLoading(true)
    setTimeout(() => {
      const searchValues = Allcountries.filter(item => item.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
      setCounties(searchValues)
      setIsLoading(false)
    }, 800);
    
  }

  function handleChangeSelect(e){
    const filterCountry = Allcountries.filter(item => item.id == e.target.value)
    setIsLoading(true)
    if(e.target.value == 0){
      setTimeout(() => {
        setCounties(Allcountries)
        setIsLoading(false)
      }, 500);
    }
    else{
      setTimeout(() => {
        setCounties(filterCountry)
        setIsLoading(false)
      }, 500);
    }
    
    
  }
  return (
    <main>
      <section className="pb-[45px]">
        <div className="containers w-[1250px] mx-auto px-[20px]">
          <div className="flex justify-between mb-[48px]">
            <label className="w-[480px] flex items-center shadow-sm bg-white rounded-[10px] "> 
              <img className="ml-[32px]"  src={SearchIcon} alt="search img" width={"18"} height={"18"}/>
              <input onChange={handleSearchCountry} className="w-full py-[15px] pl-[24px] mr-[5px] outline-none font-normal text-[14px] leading-[20px]" type="text" placeholder="Search for a country…"/> 
            </label>
            <select onChange={handleChangeSelect} className="w-[200px] rounded-[10px] shadow-sm outline-none px-[24px] cursor-pointer">
              <option value={0}>All</option>
              {Allcountries.map(item => (
                <option key={item.id} value={item.id}>{item.name}</option>
              ))}
            </select>
          </div>


          <CaruselSwiper Allcountries={Allcountries}/>
          
          <ul className="flex flex-wrap justify-between gap-8">
            { 
              isLoading ? <img className="mx-auto mt-[100px]" src={loadingIcon} width={150}/> :
              countries.map(item => <CountryCard Allcountries={Allcountries} key={item.id} item={item} isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} /> )
            }
          </ul>
        </div>
      </section>
    </main>
  )
}
export default Hero