import classNames from "classnames/bind";

import styles from "./AccountItem.module.scss";
import Image from "~/components/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <Image
        className={cx("avatar")}
        src="https://lh3.googleusercontent.com/a/ACg8ocLr-WaQOOYYgxufAz56i6lS4c5fEgjmV_zPsfmVuha2wuYxZu3H=s360-c-no"
        alt="DinhQuanELV"
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Dinh Quan ELV</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </h4>

        <span className={cx("username")}>dqelv</span>
      </div>
    </div>
  );
}

export default AccountItem;
