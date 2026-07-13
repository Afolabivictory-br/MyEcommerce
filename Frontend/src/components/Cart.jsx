import { useState } from "react";
import styles from "./Cart.module.css";

const MONITOR_IMG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'%3E%3Crect width='80' height='80' fill='%23f0f0f0'/%3E%3Crect x='12' y='14' width='56' height='36' rx='3' fill='%23222'/%3E%3Crect x='14' y='16' width='52' height='32' rx='2' fill='%23444'/%3E%3Crect x='34' y='50' width='12' height='6' fill='%23333'/%3E%3Crect x='26' y='56' width='28' height='4' rx='2' fill='%23222'/%3E%3Ccircle cx='40' cy='32' r='10' fill='%23db3a34' opacity='.15'/%3E%3C/svg%3E";

const GAMEPAD_IMG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'%3E%3Crect width='80' height='80' fill='%23f0f0f0'/%3E%3Cellipse cx='40' cy='42' rx='28' ry='18' fill='%23222'/%3E%3Crect x='26' y='36' width='8' height='3' rx='1.5' fill='%23555'/%3E%3Crect x='28' y='34' width='4' height='7' rx='1.5' fill='%23555'/%3E%3Ccircle cx='50' cy='37' r='2.5' fill='%23db3a34'/%3E%3Ccircle cx='55' cy='40' r='2.5' fill='%23db3a34'/%3E%3Ccircle cx='50' cy='43' r='2.5' fill='%23db3a34'/%3E%3Ccircle cx='45' cy='40' r='2.5' fill='%23db3a34'/%3E%3C/svg%3E";

const VALID_COUPONS = { SAVE10: 10, SAVE20: 20, FREE50: 50 };

const INITIAL_ITEMS = [
  { id: 1, name: "LCD Monitor", price: 650, qty: 1, img: MONITOR_IMG },
  { id: 2, name: "HI Gamepad",  price: 550, qty: 2, img: GAMEPAD_IMG },
];

function XIcon() {
  return (
    <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1l10 10M11 1L1 11" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ChevUp() {
  return (
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
      <path d="M1 5l4-4 4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevDown() {
  return (
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CartRow({ item, onQtyChange, onRemove }) {
  const subtotal = item.price * item.qty;

  return (
    <div className={styles.cartRow}>
      {/* Product */}
      <div className={styles.productCell}>
        <div className={styles.productImgWrap}>
          <img src={item.img} alt={item.name} />
          <button
            className={styles.removeBtn}
            onClick={() => onRemove(item.id)}
            aria-label={`Remove ${item.name}`}
          >
            <XIcon />
          </button>
        </div>
        <span className={styles.productName}>{item.name}</span>
      </div>

      {/* Price */}
      <div className={styles.priceCell}>${item.price.toLocaleString()}</div>

      {/* Quantity */}
      <div className={styles.qtyCell}>
        <div className={styles.qtyInputWrap}>
          <input
            type="number"
            min="1"
            max="99"
            value={String(item.qty).padStart(2, "0")}
            onChange={(e) => {
              const v = parseInt(e.target.value, 10);
              if (!isNaN(v) && v >= 1) onQtyChange(item.id, v);
            }}
            aria-label={`Quantity for ${item.name}`}
          />
          <div className={styles.qtyArrows}>
            <button
              className={styles.qtyArrow}
              onClick={() => onQtyChange(item.id, item.qty + 1)}
              aria-label="Increase quantity"
            >
              <ChevUp />
            </button>
            <button
              className={styles.qtyArrow}
              onClick={() => onQtyChange(item.id, Math.max(1, item.qty - 1))}
              aria-label="Decrease quantity"
            >
              <ChevDown />
            </button>
          </div>
        </div>
      </div>

      {/* Subtotal */}
      <div className={styles.subtotalCell}>${subtotal.toLocaleString()}</div>
    </div>
  );
}

export default function Cart() {
  const [items, setItems]             = useState(INITIAL_ITEMS);
  const [stagedItems, setStagedItems] = useState(INITIAL_ITEMS);
  const [coupon, setCoupon]           = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [couponMsg, setCouponMsg]     = useState({ text: "", type: "" });

  const handleQtyChange = (id, newQty) => {
    setStagedItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, qty: newQty } : it))
    );
  };

  const handleRemove = (id) => {
    setStagedItems((prev) => prev.filter((it) => it.id !== id));
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  const handleUpdateCart = () => {
    setItems(stagedItems);
  };

  const handleApplyCoupon = () => {
    const code = coupon.trim().toUpperCase();
    if (VALID_COUPONS[code] !== undefined) {
      setAppliedDiscount(VALID_COUPONS[code]);
      setCouponMsg({ text: `Coupon applied! $${VALID_COUPONS[code]} off.`, type: "success" });
    } else {
      setAppliedDiscount(0);
      setCouponMsg({ text: "Invalid coupon code.", type: "error" });
    }
  };

  const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
  const total    = Math.max(0, subtotal - appliedDiscount);

  return (
    <div className={styles.cartPage}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb} aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span className={styles.sep}>/</span>
        <span className={styles.current}>Cart</span>
      </div>

      {stagedItems.length === 0 ? (
        <div className={styles.cartEmpty}>
          <div className={styles.cartEmptyIcon}>🛒</div>
          <h2>Your cart is empty</h2>
          <p>Add some items to get started.</p>
        </div>
      ) : (
        <>
          {/* Table */}
          <div className={styles.cartTable} role="table" aria-label="Shopping cart">
            <div className={styles.cartTableHeader} role="row">
              <div className={styles.colProduct} role="columnheader">Product</div>
              <div className={styles.colPrice}   role="columnheader">Price</div>
              <div className={styles.colQty}     role="columnheader">Quantity</div>
              <div className={styles.colSub}     role="columnheader">Subtotal</div>
            </div>

            {stagedItems.map((item) => (
              <CartRow
                key={item.id}
                item={item}
                onQtyChange={handleQtyChange}
                onRemove={handleRemove}
              />
            ))}
          </div>

          {/* Actions */}
          <div className={styles.cartActions}>
            <button className={styles.btnOutline} onClick={() => window.history.back()}>
              Return To Shop
            </button>
            <button className={styles.btnOutline} onClick={handleUpdateCart}>
              Update Cart
            </button>
          </div>

          {/* Bottom */}
          <div className={styles.cartBottom}>
            {/* Coupon */}
            <div>
              <div className={styles.couponSection}>
                <input
                  className={styles.couponInput}
                  type="text"
                  placeholder="Coupon Code"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleApplyCoupon()}
                  aria-label="Coupon code"
                />
                <button className={styles.btnCoupon} onClick={handleApplyCoupon}>
                  Apply Coupon
                </button>
              </div>
              {couponMsg.text && (
                <p className={`${styles.couponMsg} ${styles[couponMsg.type]}`}>
                  {couponMsg.text}
                </p>
              )}
            </div>

            {/* Cart Total */}
            <div className={styles.cartTotalBox}>
              <h2 className={styles.cartTotalTitle}>Cart Total</h2>

              <div className={styles.totalRow}>
                <span className={styles.totalLabel}>Subtotal:</span>
                <span className={styles.totalValue}>${subtotal.toLocaleString()}</span>
              </div>

              {appliedDiscount > 0 && (
                <div className={styles.totalRow}>
                  <span className={styles.totalLabel}>Discount:</span>
                  <span className={styles.totalValueDiscount}>−${appliedDiscount}</span>
                </div>
              )}

              <div className={styles.totalRow}>
                <span className={styles.totalLabel}>Shipping:</span>
                <span className={styles.totalValueFree}>Free</span>
              </div>

              <div className={styles.totalRow}>
                <span className={styles.totalLabel}>Total:</span>
                <span className={styles.totalValue}>${total.toLocaleString()}</span>
              </div>

              <button className={styles.btnCheckout}>Proceed to Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}