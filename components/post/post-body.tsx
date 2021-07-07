import React from 'react'
import markdownStyles from '../markdown-styles.module.css'

type Props = {
  content: string
}

const PostBody: React.FC<Props> = ({ content }) => {
  return (
    <div className="max-w-2xl mx-auto">
      {/* eslint-disable-next-line react/no-danger */}
      <div className={markdownStyles.markdown} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export default PostBody
