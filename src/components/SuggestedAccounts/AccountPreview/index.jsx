import classNames from "classnames/bind";
import styles from "./AccountPreview.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import Button from "~/components/Button";

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <img
          className={cx("avatar")}
          src="https://lh3.googleusercontent.com/a/ACg8ocLr-WaQOOYYgxufAz56i6lS4c5fEgjmV_zPsfmVuha2wuYxZu3H=s360-c-no"
          alt="avatar"
        />
        <Button primary className={cx("follow-btn")}>
          Follow
        </Button>
      </div>
      <div className={cx("body")}>
        <p className={cx("nickname")}>
          <strong>dinhquanelv</strong>
          <FontAwesomeIcon icon={faCheckCircle} className={cx("check")} />
        </p>
        <p className={cx("name")}>Dinh Quan ELV</p>
        <p className={cx("analytics")}>
          <strong className={cx("value")}>1.1M </strong>
          <span className={cx("label")}>Followers</span>
          <strong className={cx("value")}>1.1B </strong>
          <span className={cx("label")}>Likes</span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;
