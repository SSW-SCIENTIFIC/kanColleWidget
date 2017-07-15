/**
 * このスクリプトはすべての `http://osapi.dmm.com/gadgets/ifr*` URLパターンが
 * parentになっている場合においてのみ == ExtractFlash の結果として来る場合
 * だけ（と思われる）に有効
 */
import {DecorateOsapiPage} from "../../Components/Routine/DecoratePage";
import {Client} from "chomex";
import Main from "../../Components/Routine/Main";

const client = new Client(chrome.runtime);
const main = new Main(
  window,
  client,
  new DecorateOsapiPage(window),
);
main.main();
