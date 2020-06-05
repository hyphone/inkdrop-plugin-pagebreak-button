'use babel'

import * as React from 'react'

export default function pagebreakEditorToolbarButton() {
  const handleClick = () => {
    toggle()
  }

  return (
    <a
      onClick={handleClick}
      title="Add Pagebreak"
      className="fa fa-plus"
    />
  )
}

export const componentName = 'pagebreak'

const layoutName = 'editor-toolbar'

export function toggle() {
  const html = '<div style="page-break-after: always;"></div>';

  const {
    cm
  } = inkdrop.getActiveEditor();
  cm.replaceSelection(html);
  return true;
}

export function hide() {
  inkdrop.layouts.removeComponentFromLayout(layoutName, componentName)
}

export function show() {
  inkdrop.layouts.addComponentToLayout(layoutName, componentName)
}