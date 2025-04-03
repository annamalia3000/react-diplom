import { SectionFooter } from "../SectionFooter/SectionFooter";
import cn from "classnames";
import classes from "./footerPay.module.css";

export const FooterPay = () => {
  const paymentSystems = [
    "paypal",
    "master-card",
    "visa",
    "yandex",
    "webmoney",
    "qiwi",
  ];

  return (
    <div className={classes["footer-payment"]}>
      <SectionFooter title="Принимаем к оплате:">
        <div className={classes["footer-pay"]}>
          {paymentSystems.map((paymentSystem) => (
            <div
              key={paymentSystem}
              className={cn(
                classes["footer-pay-systems"],
                classes[`footer-pay-systems-${paymentSystem}`]
              )}
            ></div>
          ))}
        </div>
      </SectionFooter>
    </div>
  );
};
