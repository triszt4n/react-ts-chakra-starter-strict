import React from 'react'
import CoverImage from '~components/cover-image'
import DateFormatter from '~components/date-formatter'
import PostTitle from './post-title'

type Props = {
  title: string
  coverImage: string
  date: string
}

const PostHeader: React.FC<Props> = ({ title, coverImage, date }) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}

export default PostHeader
