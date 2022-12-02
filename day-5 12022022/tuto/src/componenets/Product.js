export default function Product( props ){

    return (
        <div class="card" >
            <img src={ props.photoURL } class="card-img-top" alt="..." />
            <div class="card-body">
            <h5 class="card-title">{ props.title }</h5>
            <p class="card-text">{props.price}  $</p>
            </div>
        </div>

    );
}