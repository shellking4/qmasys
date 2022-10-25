export { default as AdminLanding } from '../../components/AdminLanding.vue'
export { default as AdminNavigation } from '../../components/AdminNavigation.vue'
export { default as AgentCreateForm } from '../../components/AgentCreateForm.vue'
export { default as AgentsAccounts } from '../../components/AgentsAccounts.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Landing } from '../../components/Landing.vue'
export { default as LoginForm } from '../../components/LoginForm.vue'
export { default as Navigation } from '../../components/Navigation.vue'
export { default as SelectedTickets } from '../../components/SelectedTickets.vue'
export { default as ServedTickets } from '../../components/ServedTickets.vue'
export { default as Ticket } from '../../components/Ticket.vue'
export { default as TicketIssuer } from '../../components/TicketIssuer.vue'
export { default as TicketQueue } from '../../components/TicketQueue.vue'
export { default as TransferedTickets } from '../../components/TransferedTickets.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
