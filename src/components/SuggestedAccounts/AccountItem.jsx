// import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./SuggestedAccounts.module.scss";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("account-item")}>
      <img
        className={cx("avatar")}
        alt=""
        src="https://lh3.googleusercontent.com/a/ACg8ocLr-WaQOOYYgxufAz56i6lS4c5fEgjmV_zPsfmVuha2wuYxZu3H=s360-c-no"
      />
      <div className={cx("item-info")}>
        <p className={cx("nickname")}>
          <strong>dinhquanelv</strong>
          <FontAwesomeIcon icon={faCheckCircle} className={cx("check")} />
        </p>
        <p className={cx("name")}>Dinh Quan ELV</p>
      </div>
    </div>
  );
}

// AccountItem.propTypes = {};

export default AccountItem;
