// 导入自己需要的组件
import { Select, Option, OptionGroup, Input, Tree, Dialog, Row, Col ,
  RadioGroup,RadioButton, Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,Header,Main,Aside,
Button,Upload,Image} from 'element-ui'
const element = {
  install: function (Vue) {
    Vue.use(Select)
    Vue.use(Option)
    Vue.use(OptionGroup)
    Vue.use(Input)
    Vue.use(Tree)
    Vue.use(Dialog)
    Vue.use(Row)
    Vue.use(Col)
    Vue.use(RadioButton)
    Vue.use(RadioGroup)
    Vue.use(Menu)
    Vue.use(Submenu)
    Vue.use(MenuItem)
    Vue.use(MenuItemGroup)
    Vue.use(Header)
    Vue.use(Main)
    Vue.use(Aside)
    Vue.use(Button)
    Vue.use(Upload)
    Vue.use(Image)
  }
}
export default element
