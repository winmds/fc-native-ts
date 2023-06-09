import {
  screenHeight,
  screenWidth,
  windowHeight,
  windowWidth,
} from "./src/config";
import { Colors } from "./src/styles/colors";
import { ErrorNotification } from "./src/components/ErrorNotification";
import { Icon } from "./src/components/Icon";
import { Button } from "./src/components/Button";
import { CheckBox } from "./src/components/CheckBox";
import { Spinner } from "./src/components/Spinner";
import { ButtonIcon } from "./src/components/ButtonIcon";
import { AnimationButton } from "./src/components/AnimationButton";
import { CustomStyles } from "./src/styles/CustomStyles";
import { TextInputMoney } from "./src/components/TextInputMoney";
import { TextInputZipCode } from "./src/components/TextInputZipCode";
import { Choose2Days } from "./src/components/Calendar";

import {
  formatDate,
  avatarOptions,
  parseToMoney,
  formatMoney,
  getVNDate,
  getVND,
  toast,
  randomNonRepeat,
  isIOS,
  isNull,
  is18x9,
  PhoneCall,
  parseMoney,
  convertHTML,
  isImageFile,
  wait,
  parseJwt,
  getIndex,
  checkStatus,
  isNumber,
  getPercent,
  handleRemoveSpace,
  checkUserNameVNese,
  checkImages
} from "./src/function";
import { useKeyboard } from "./src/hook/useKeyboard";

export {
  Colors,
  screenWidth,
  screenHeight,
  windowWidth,
  windowHeight,
  CustomStyles,
  formatDate,
  avatarOptions,
  parseToMoney,
  getVNDate,
  formatMoney,
  getVND,
  toast,
  Choose2Days,
  TextInputMoney,
  TextInputZipCode,
  Button,
  CheckBox,
  AnimationButton,
  ErrorNotification,
  Spinner,
  ButtonIcon,
  Icon,
  randomNonRepeat,
  isIOS,
  isNull,
  is18x9,
  PhoneCall,
  parseMoney,
  convertHTML,
  isImageFile,
  wait,
  parseJwt,
  getIndex,
  checkStatus,
  isNumber,
  getPercent,
  handleRemoveSpace,
  checkUserNameVNese,
  useKeyboard,
  checkImages
};
