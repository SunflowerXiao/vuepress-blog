## 通过 ts 的方式定义 props

使用泛型： Array as PropType<T>

```
import {PropType} from 'vue'
const props = defineProps = ({
  type: Array as PropType<T>,
  required: true,
  validator: ...
})

```
