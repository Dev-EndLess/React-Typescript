import useCart from "../hooks/useCart"

type PropsType = {
  viewCart: boolean,
}

function Footer({ viewCart }:PropsType) {

  const { totalItems, totalPrice } = useCart()

  const year: number = new Date().getFullYear()

  const pageContent = viewCart
    ? <p>Shopping Cart: {year}</p>
    : (
      <>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: {totalPrice}</p>
      <p>Shopping Cart: {totalItems}</p>
      </>
    )

  const content = (
    <footer className="footer">
      {pageContent}
    </footer>
  )  

  return content
}

export default Footer
