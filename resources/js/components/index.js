import Vue from 'vue'
import Card from './Card'
import Child from './Child'
import { HasError, AlertError, AlertSuccess } from 'vform/components/bootstrap5'
// Components that are registered globaly.
[
  Card,
  Child,
  HasError,
  AlertError,
  AlertSuccess
].forEach(Component => {
  Vue.component(Component.name, Component)
})
