'use babel'

import { CompositeDisposable } from 'event-kit'
import * as pagebreakEditorToolbarButton from './pagebreak'

class PageBreakPlugin {
  subscriptions = new CompositeDisposable()

  activate() {
    const { components, layouts, commands } = inkdrop
    
    this.subscriptions.add(
      commands.add(document.body, {
        'add-pagebreak':pagebreakEditorToolbarButton.toggle
      })
    )

    components.registerClass(pagebreakEditorToolbarButton)
  }

  deactivate() {
    const { components, layouts, commands } = inkdrop

    this.subscription.dispose()

    components.deleteClass(pagebreakEditorToolbarButton)
  }
}

module.exports = new PageBreakPlugin()