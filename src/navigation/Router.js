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

const Router = () => {
    return (
        <Switch>  
            <Route exact path={"/login"}>
                <LoginPage/>
            </Route>
            <Route exact path={"/cadastro"}>
                <SignUpPage/>
            </Route>
            <Route exact path={"/registro-endereco"}>
                <RegisterAdressPage/>
            </Route>
            <Route exact path={["/pagina-inicial", "/"]}>
                <Homepage/>
                <BottomNavigation />
            </Route>
            <Route exact path={`/detalhes-restaurante`}>
                <RestaurantPage/>
            </Route>
            <Route exact path={"/carrinho"}>
                <CartPage/>
                <BottomNavigation />
            </Route>
            <Route exact path={"/dados-pessoais"}>
                <ProfilePage/>
                <BottomNavigation />
            </Route>
            <Route exact path={"/editar-dados-pessoais"}>
                <ProfileEditPage/>
            </Route>
            <Route exact path={"/editar-endereco"}>
                <AdressEditPage/>
            </Route>
            <Route>
                <ErrorPage/>
            </Route>
        </Switch>
    )
}

export default Router
