const CartWidget = () => {
    return (
        <button type="button" className="btn btn-primary position-relative">
            Notificaciones
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                99+
                <span className="visually-hidden">Mensajes sin Leer</span>
            </span>
        </button>
    )
}

export default CartWidget