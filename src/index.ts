import { hi, Beispiel } from './myModule';
import { alertMe } from './myOtherModule';

console.log(hi);
customElements.define('my-beispiel', Beispiel)

alertMe();