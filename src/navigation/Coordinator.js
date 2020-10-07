export const goToLoginPage = (history) => {
    history.push("/login")
}

export const goToSignUpPage = (history) => {
    history.push("/cadastro")
}

export const goToRegisterAdressPage = (history) => {
    history.push("/registro-endereco")
}

export const goToHomepage = (history) => {
    history.push("/pagina-inicial")
}

export const goToRestaurantPage = (history) => {
    history.push("/detalhes-restaurante")
}

export const goToCart = (history) => {
    history.push("/carrinho")
}

export const goToProfilePage = (history) => {
    history.push("/dados-pessoais")
}

export const goToProfileEditPage = (history) => {
    history.push(`/editar-dados-pessoais`)
}

export const goToAdressEditPage = (history) => {
    history.push(`/editar-endereco`)
} 
export const goBack = (history) => {
    history.goBack()
}