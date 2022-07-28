import React, {useState, useLayoutEffect, Suspense, lazy} from "react";
import drinkMenu from "../../drink.pdf";
const PDF = lazy(() => import("../PDF"));

const Drink = () => {
    const [scale, setScale] = useState(1);

    useLayoutEffect(() => {
        if(window.innerWidth >= 955) setScale(1.2);
        else if(window.innerWidth >= 628 && window.innerWidth < 955) setScale(1);
        else if(window.innerWidth >= 450 && window.innerWidth < 627) setScale(0.8);
        else if(window.innerWidth >= 340 && window.innerWidth < 450) setScale(0.5);
        else setScale(0.4); 
    }, []);

    return (
        <section id="drinkMenuSectionDiv">
           <Suspense fallback={<div>loading..</div>}>
                    <PDF scale={scale} menu={drinkMenu} menuType="drinks"></PDF>
            </Suspense>
        </section>
    );
};

export default Drink;