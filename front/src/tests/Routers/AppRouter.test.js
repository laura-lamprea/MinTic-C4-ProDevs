import { mount } from "enzyme";
import { AuthContext } from "../../provider/AuthProvider";
import AppRouter from "../../routers/AppRouter"



describe(' pruebas de <AppRouter/> ', () => {

    test('debe mostrar lsita de usuarios al darle click en ingresar ', () => {
        const wrapper = mount(
            <AppRouter/>
            
        );
        
        console.log(wrapper.html())

    })
});
