// This is component that outputs different designs in the background for the content in .mdx file

import React from 'react'
import { FcIdea } from 'react-icons/fc'

const Block = ({ children, type, color = '#A020F0' }) => {
  // Dynamic color isn't working
  if (type === 'note') {
    return (
      <div
        // style={{ backgroundColor: color, borderLeftColor: color }}
        className="rounded-r-lg border-l-4 border-l-purple-800 bg-purple-200 px-2 py-1 font-medium text-purple-500"
      >
        {children}
      </div>
    )
  } else if (type === 'QuickTip') {
    return (
      <div className="my-2 rounded-lg bg-slate-50 p-2 text-yellow-600">
        <div className="my-2 flex items-center gap-2">
          {' '}
          <FcIdea className="text-4xl" /> <span className="pt-2 font-bold">Quick Tip</span>
        </div>
        <div className="pl-10 font-medium">{children}</div>
      </div>
    )
  } else if (type === 'link') {
    return <center className="mb-6 text-sm font-medium text-gray-500">{children}</center>
  }

  return <div>{children}</div>
}

export default Block
