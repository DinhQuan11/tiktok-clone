import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./SuggestedAccounts.module.scss";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountPreview from "./AccountPreview";

const cx = classNames.bind(styles);

function AccountItem() {
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountPreview />
        </PopperWrapper>
      </div>
    );
  };

  return (
    <div>
      <Tippy
        interactive
        delay={[1000, 0]}
        offset={[-20, 0]}
        placement="bottom"
        render={renderPreview}
      >
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
      </Tippy>
    </div>
  );
}

export default AccountItem;
