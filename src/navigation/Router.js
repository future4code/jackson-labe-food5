import { Switch, Route, Redirect } from 'react-router-dom'
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


const PrivateRoute = ({path, children}) => {
    const token = localStorage.getItem('token')
    
    return token ? <Route path={path}>{children}</Route> : <Redirect to="/login" />
}

const Router = () => {
    return (
        <Switch>  
            <Route exact path={"/login"}>
                <LoginPage/>
            </Route>
            <Route exact path={"/cadastro"}>
                <Header title='' withbackbutton />
                <SignUpPage/>
            </Route>
            <PrivateRoute path={"/registro-endereco"}>
                <Header title='' withbackbutton />
                <RegisterAdressPage/>
            </PrivateRoute>
            <PrivateRoute path={`/detalhes-restaurante/:id`}>
                <Header title='Restaurante' withbackbutton />
                <RestaurantPage/>
            </PrivateRoute>
            <PrivateRoute path={"/carrinho"}>
                <Header title='Meu carrinho' />
                <CartPage/>
                <BottomNavigation />
            </PrivateRoute>
            <PrivateRoute path={"/dados-pessoais"}>
                <Header title='Meu perfil' />
                <ProfilePage/>
                <BottomNavigation />
            </PrivateRoute>
            <PrivateRoute path={"/editar-dados-pessoais"}>
                <Header title='Editar' withbackbutton/>
                <ProfileEditPage/>
            </PrivateRoute>
            <PrivateRoute path={"/editar-endereco"}>
                <Header title='Endereço' withbackbutton />
                <AdressEditPage/>
            </PrivateRoute>
            <PrivateRoute path={["/pagina-inicial", "/"]}>
                <Header title='Rappi4' />
                <Homepage/>
                <BottomNavigation />
            </PrivateRoute>
            <Route>
                <ErrorPage/>
            </Route>
        </Switch>
    )
}

export default Router
