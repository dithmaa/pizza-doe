import React from 'react';
import { Categories, SortPopup, PizzaBlock, PizzaBlockLoading } from '../components/';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';


const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
    { name: 'популярности', type: 'popular' },
    { name: 'цене', type: 'price' },
    { name: 'алфавит', type: 'alphabet' }
];

function Home() {
    const dispatch = useDispatch();
    const items = useSelector(({ pizzas }) => pizzas.items);
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
    const { category, sortBy } = useSelector(({filters}) => filters);
    console.log(category);
    React.useEffect(()=>{
        dispatch(fetchPizzas(category));
    }, [category]); 

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, []);
    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onClickItem={onSelectCategory}
                    items={categoryNames} />

                <SortPopup items={sortItems} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">


                {
                    isLoaded ? items.map(obj => (
                    <PizzaBlock key={obj.id} {...obj}  />
                    )) 

                    : Array(12).fill(0).map((_,index)=><PizzaBlockLoading key={index}/>)
                }
            </div>
        </div>
    )
}




export default Home;
