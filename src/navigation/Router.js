import { Switch, Route } from 'react-router-dom'
import React from 'react'
import RegisterAdressPage from '../screens/RegisterAdressPage/RegisterAdressPage'
import Homepage from '../screens/Homepage/Homepage'
import RestaurantPage from '../screens/RestaurantPage/RestaurantPage'
import CartPage from '../screens/CartPage/CartPage'
import ProfilePage from '../screens/ProfilePage/ProfilePage'
import ProfileEditPage from '../screens/ProfilePage/ProfileEditPage'
import AdressEditPage from '../screens/ProfilePage/AdressEditPage'
import LoginPage from '../screens/LoginPage/LoginPage'
import SignUpPage from '../screens/SignUpPage/SignUpPage'
import ErrorPage from '../screens/ErrorPage/Error'
import BottomNavigation from '../components/BottomNavigation'
import Header from '../components/Header'

const Router = () => {
    return (
        <Switch>  
            <Route exact path={"/login"}>
                <LoginPage/>
            </Route>
            <Route exact path={"/cadastro"}>
                <Header title='' withBackButton />
                <SignUpPage/>
            </Route>
            <Route exact path={"/registro-endereco"}>
                <Header title='' withBackButton />
                <RegisterAdressPage/>
            </Route>
            <Route exact path={["/pagina-inicial", "/"]}>
                <Header title='Rappi4' />
                <Homepage/>
                <BottomNavigation />
            </Route>
            <Route exact path={`/detalhes-restaurante`}>
                <Header title='Restaurante' withBackButton />
                <RestaurantPage/>
            </Route>
            <Route exact path={"/carrinho"}>
                <Header title='Meu carrinho' />
                <CartPage/>
                <BottomNavigation />
            </Route>
            <Route exact path={"/dados-pessoais"}>
                <Header title='Meu perfil' />
                <ProfilePage/>
                <BottomNavigation />
            </Route>
            <Route exact path={"/editar-dados-pessoais"}>
                <Header title='Meu perfil' withBackButton/>
                <ProfileEditPage/>
            </Route>
            <Route exact path={"/editar-endereco"}>
                <Header title='Endereço' withBackButton />
                <AdressEditPage/>
            </Route>
            <Route>
                <ErrorPage/>
            </Route>
        </Switch>
    )
}

export default Router
